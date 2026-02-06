import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import fs from "node:fs";
import path from "node:path";

// =============================================================================
// ENV
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const isDev = process.env.NODE_ENV !== "production";

// =============================================================================
// Manus Debug Collector (DEV ONLY)
// =============================================================================

const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string) {
  if (!fs.existsSync(logPath)) return;
  if (fs.statSync(logPath).size <= MAX_LOG_SIZE_BYTES) return;

  const lines = fs.readFileSync(logPath, "utf-8").split("\n");
  const kept: string[] = [];
  let size = 0;

  for (let i = lines.length - 1; i >= 0; i--) {
    const bytes = Buffer.byteLength(lines[i] + "\n", "utf-8");
    if (size + bytes > TRIM_TARGET_BYTES) break;
    kept.unshift(lines[i]);
    size += bytes;
  }

  fs.writeFileSync(logPath, kept.join("\n"), "utf-8");
}

function writeLogs(source: LogSource, entries: unknown[]) {
  if (!entries?.length) return;
  ensureLogDir();

  const file = path.join(LOG_DIR, `${source}.log`);
  const lines = entries.map(
    (e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`
  );

  fs.appendFileSync(file, lines.join("\n") + "\n", "utf-8");
  trimLogFile(file);
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: { src: "/__manus__/debug-collector.js", defer: true },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";
        req.on("data", (c) => (body += c));
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            writeLogs("browserConsole", payload.consoleLogs);
            writeLogs("networkRequests", payload.networkRequests);
            writeLogs("sessionReplay", payload.sessionEvents);
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

// =============================================================================
// VITE CONFIG
// =============================================================================

export default defineConfig({
  root: path.resolve(PROJECT_ROOT, "client"),

  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
    ...(isDev ? [vitePluginManusDebugCollector()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  envDir: PROJECT_ROOT,

  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
    strictPort: false,
  },
});

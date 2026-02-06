interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/qyNNjKklOafrs6qqKX63xr/sandbox/Nx0NlFs2ukMsi45n3GvPU9-img-1_1770398269000_na1fn_aGVyby1tYWluLWN5YmVycHVuaw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcXlOTmpLa2xPYWZyczZxcUtYNjN4ci9zYW5kYm94L054ME5sRnMydWtNc2k0NW4zR3ZQVTktaW1nLTFfMTc3MDM5ODI2OTAwMF9uYTFmbl9hR1Z5YnkxdFlXbHVMV041WW1WeWNIVnVhdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rNsA8vCmdnUuYYrTkMxXHlZaUnDLzXVuyZvavrLvwDNj3h4Y7570kwGx2k9-ifSDzx2Ley0QMUdugA-4SQhA5ape6sKNJZmLNXK7cORHcZiRTRyQpDewrWzFaMJsl65dsegPY3gfQvG~NS95RSKI0pvbCVFQVBVlxbNgcCYke5N0EZzmX1~QWw0kt8LynvmWHojSn9iY9s~q~ftcIPAHz3tJ31cOUbnA-NYrvyl~6hOJXgHhTIcJzyGha0lR9STtag3DP5ZDVL0frw-E5xnpvrLVhYv-9IpW17J0ZaYVpJo3d5K19tO8lR~PZWEsfQGY2YnOdlzFqM-zOX9PoBiD3g__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center gap-8">
        {/* Animated Profile Card */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-75 animate-pulse"></div>

          {/* Profile Card */}
          <div className="relative bg-card border border-primary/50 rounded-lg p-8 max-w-2xl backdrop-blur-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/30">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-xs text-muted-foreground font-mono ml-auto">
                SYSTEM.PROFILE_LOADED
              </span>
            </div>

            {/* Name with glitch effect */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-mono">
              <span className="text-primary neon-glow">SACHIN</span>
              <br />
              <span className="text-secondary">YADAV</span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-accent font-mono mb-4">
              &gt; Backend & AI Engineer | Backend Systems | GenAI Specialist
            </p>

            {/* Description */}
            <p className="text-foreground/80 font-mono text-sm md:text-base mb-6 leading-relaxed">
              Architecting scalable backend systems with AI integrations, specializing in RAG pipelines, LLM-powered services, and production-grade distributed systems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-primary/30">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">LeetCode Problems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">1855</div>
                <div className="text-xs text-muted-foreground">Max Contest Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">1.5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-background font-mono font-bold rounded hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                &gt; View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary font-mono font-bold rounded hover:bg-primary/10 transition-all duration-300"
              >
                &gt; Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  );
}

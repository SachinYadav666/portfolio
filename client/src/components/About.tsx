/**
 * About Component
 * Design: Terminal-style about section with neon accents
 */
export default function About() {
  return (
    <section id="about" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> ABOUT_ME</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-card border border-primary/30 rounded p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-mono">
                &gt; BACKGROUND
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate Backend/AI Engineer with a strong foundation in computer science and real-world systems design. Currently at Uptitude, I focus on building production-grade GenAI applications that solve complex enterprise problems.
              </p>
            </div>

            <div className="bg-card border border-secondary/30 rounded p-6">
              <h3 className="text-xl font-bold text-secondary mb-4 font-mono">
                &gt; EXPERTISE
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I specialize in building distributed backend systems, high-scale ETL pipelines, and RAG-based LLM services, translating ML capabilities into production-ready infrastructure.              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-card border border-accent/30 rounded p-6">
              <h3 className="text-xl font-bold text-accent mb-4 font-mono">
                &gt; EDUCATION
              </h3>
              <p className="text-foreground/80 mb-2">
                <strong>B.Tech in Electronics and Communication Engineering</strong>
              </p>
              <p className="text-muted-foreground text-sm">
                Indian Institute of Information Technology Nagpur (2021-2025)
              </p>
              <p className="text-muted-foreground text-sm">
                CGPA: 8.23
              </p>
            </div>

            <div className="bg-card border border-primary/30 rounded p-6">
              <h3 className="text-xl font-bold text-accent mb-4 font-mono">
                &gt; PHILOSOPHY
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I believe in building systems that are not just intelligent, but also reliable, scalable, and maintainable. Code is poetry; let's make it beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

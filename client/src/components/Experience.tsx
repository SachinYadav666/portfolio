
export default function Experience() {
  const experiences = [
    {
      role: 'Backend & Generative AI Engineer',
      company: 'Uptitude',
      period: 'Jan 2026 – Present',
      highlights: [
        'Automated enterprise policy generation aligned with ISO and international standards',
        'Improved retrieval and generation accuracy by introducing schematic chunking',
        'Increased production reliability with end-to-end tracing and Azure deployment',
      ],
      color: 'text-accent',
    },
    {
      role: 'Backend & Generative AI Engineer',
      company: 'Big Air Lab',
      period: 'Nov 2025 – Jan 2026',
      highlights: [
        'Reduced end-to-end latency by 89% (90s → 10s)',
        'Optimized Google Places API usage and GenAI agent prompts',
        'Enforced rate limiting for high-traffic stability',
      ],
      color: 'text-accent',
    },
    {
      role: 'Backend & Generative AI Engineer',
      company: 'Rakuten',
      period: 'Sept 2024 – Sept 2025',
      highlights: [
        'Led cloud data migration from MongoDB to PostgreSQL using Airflow ETL',
        'Enhanced backend security with CSRF token protection',
        'Designed and evaluated RAG and GraphRAG pipelines',
        'Built LLM bias detection model achieving 90% accuracy',
      ],
      color: 'text-accent',
    },
  ];

  return (
    <section id="experience" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> PROFESSIONAL_EXPERIENCE</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-2 border-2 border-background"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card border border-primary/30 rounded p-6 hover:border-primary/60 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className={`text-xl font-bold font-mono ${exp.color}`}>
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-mono text-sm">
                          @ {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4 font-mono">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

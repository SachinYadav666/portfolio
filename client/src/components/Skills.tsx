/**
 * Skills Component
 * Design: Hexagonal skill badges with glitch effects on hover
 */
export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'text-accent',
      skills: ['Python', 'Java', 'SQL', ],
    },
    {
      title: 'Backend & Systems',
      color: 'text-secondary',
      skills: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'Redis', 'Docker', 'Rate Limiting'],
    },
    {
      title: 'ML & GenAI',
      color: 'text-accent',
      skills: ['TensorFlow', 'PyTorch', 'LLMs', 'RAG Pipelines', 'Prompt Engineering', 'NLP','Hugging Face'],
    },
    {
      title: 'Data & Cloud',
      color: 'text-secondary',
      skills: ['Azure', 'Docker', 'ETL Pipelines', 'PostgreSQL', 'MongoDB', 'CI/CD', 'NGINX','Pub/Sub'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> TECHNICAL_SKILLS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card border border-primary/30 rounded p-6 hover:border-primary/60 transition-all duration-300">
              <h3 className={`text-lg font-bold mb-4 font-mono ${category.color}`}>
                &gt; {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-background border border-primary/50 rounded text-sm font-mono text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-primary/30 rounded p-4 text-center hover:border-primary/60 transition-all">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground mt-2">Contest Participations</div>
          </div>
          <div className="bg-card border border-secondary/30 rounded p-4 text-center hover:border-secondary/60 transition-all">
            <div className="text-2xl font-bold text-secondary">90%</div>
            <div className="text-xs text-muted-foreground mt-2">LLM Bias Detection Accuracy</div>
          </div>
          <div className="bg-card border border-accent/30 rounded p-4 text-center hover:border-accent/60 transition-all">
            <div className="text-2xl font-bold text-accent">50%</div>
            <div className="text-xs text-muted-foreground mt-2">Improve Rag Performance for Policy generation</div>
          </div>
          <div className="bg-card border border-primary/30 rounded p-4 text-center hover:border-primary/60 transition-all">
            <div className="text-2xl font-bold text-primary">89%</div>
            <div className="text-xs text-muted-foreground mt-2">Latency Reduction Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
}

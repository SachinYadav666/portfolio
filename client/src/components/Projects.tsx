/**
 * Projects Component
 * Design: Project cards with arcade aesthetic
 */
export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Conversational Playground',
      description: 'Built a Copilot-like conversational interface with natural language querying, web/image/file search, and contextual response chaining.',
      technologies: ['Python', 'Django', 'LLMs', 'Scraping','Tavily Search'],
      highlights: [
        'Multi-modal querying support',
        'Google Custom Search',
        'Real-time user interactions',
      ],
      link: 'https://github.com/SachinYadav666/Playground',
    },
    {
      title: 'Medical Agent Agent ',
      description: 'Built a Medical Voice Agent that enables patients to book doctor appointments, access previous medical reports, and allows doctors and admins to manage schedules and profiles via voice interaction.',
      technologies: ['Python', 'Django', 'Groq-Api', 'Postgres','Nextjs'],
      highlights: [
        'Voice-based patient flow: Book appointments and download reports from past visits',
        'Doctor management: Apply leave and manage working hours seamlessly',
        'Admin controls: Add doctors and maintain complete doctor information',
      ],
      link: 'https://github.com/SachinYadav666/medical_agentic_ai',
    },
    {
      title: 'Email Agent',
      description: 'Engineered a modular email automation agent using LangGraph and LangChain, streamlining the email handling process across five stages: categorization, research, draft generation, content analysis, and finalization.',
      technologies: ['Django', 'Tavily Search', 'Langchain', 'Prompt Engineering'],
      highlights: [
        'Groq LLM for high-speed',
        'Tavily API for real-time web search',
        'Self-refining feedback loop to analyze and enhance generated responses',
      ],
      link: 'https://github.com/SachinYadav666/Email-Agent',
    },
  ];

  return (
    <section id="projects" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> FEATURED_PROJECTS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card border border-primary/30 rounded overflow-hidden hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-primary/30">
                <h3 className="text-xl font-bold text-accent font-mono mb-2">
                  &gt; {project.title}
                </h3>
                <p className="text-sm text-foreground/80">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Technologies */}
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-2">TECH_STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-background border border-primary/50 rounded text-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-2">HIGHLIGHTS:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-secondary">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-primary/20 border border-primary text-primary font-mono text-sm rounded hover:bg-primary hover:text-background transition-all duration-300"
                >
                  &gt; View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

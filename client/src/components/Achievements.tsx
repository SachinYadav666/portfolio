/**
 * Achievements Component
 * Design: Gaming-style achievement badges with unlock animations
 */
export default function Achievements() {
  const achievements = [
        {
      title: 'Hacktoberfest Champion',
      description: 'Recognized as Hacktoberfest 2022 winner for 5+ high-impact open-source contributions',
      icon: '⭐',
      color: 'border-accent',
    },
    {
      title: 'LeetCode Master',
      description: 'Solved 500+ LeetCode problems with max contest rating of 1855',
      icon: '🏆',
      color: 'border-primary',
    },
    {
      title: 'Solvathon Winner',
      description: 'Secured victory in GPT 3.5 Solvathon at IIITN Tantrafiesta',
      icon: '🥇',
      color: 'border-secondary',
    },
    {
      title: 'Agentic AI Specialist',
      description: 'Expert in designing and optimizing Agent pipelines for enterprise use',
      icon: '🔗',
      color: 'border-accent',
    },
  ];

  return (
    <section id="achievements" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> ACHIEVEMENTS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`bg-card border-2 ${achievement.color} rounded p-4 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 cursor-default`}
              style={{
                animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-sm font-bold text-foreground font-mono mb-2">
                {achievement.title}
              </h3>
              <p className="text-xs text-foreground/70 leading-tight">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Add animation keyframes */}
        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

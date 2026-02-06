import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

/**
 * Contact Component
 * Design: Terminal-style contact section with neon links
 */
export default function Contact() {
  const socialLinks = [
    {
      label: 'Email',
      href: 'mailto:sachintmg666@gmail.com',
      icon: Mail,
      color: 'text-primary',
    },
    {
      label: 'LinkedIn',
      href: 'www.linkedin.com/in/sachinyadav666',
      icon: Linkedin,
      color: 'text-secondary',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/SachinYadav666',
      icon: Github,
      color: 'text-accent',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/sachinyadav666/',
      icon: ExternalLink,
      color: 'text-primary',
    },
  ];

  return (
    <section id="contact" className="relative py-20 border-t border-primary/30">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 font-mono text-center">
          <span className="text-accent neon-glow">&gt;</span>
          <span className="text-foreground"> GET_IN_TOUCH</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Card */}
          <div className="bg-card border border-primary/30 rounded p-8 mb-8">
            <p className="text-foreground/80 text-center mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities. Whether you want to collaborate, discuss Backend/AI systems, or just say hello, feel free to reach out!
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 p-4 bg-background border border-primary/30 rounded hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group`}
                  >
                    <Icon className={`${link.color} group-hover:text-primary transition-colors`} size={24} />
                    <span className="text-xs font-mono text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Terminal Message */}
            <div className="bg-background border border-primary/30 rounded p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">&gt;</span> system.status: READY_FOR_COLLABORATION
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">&gt;</span> response_time: IMMEDIATE
              </p>
              <p className="text-primary">
                <span className="text-primary">&gt;</span> awaiting_input...
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:sachintmg666@gmail.com"
              className="inline-block px-8 py-3 bg-primary text-background font-mono font-bold rounded hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              &gt; SEND_EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

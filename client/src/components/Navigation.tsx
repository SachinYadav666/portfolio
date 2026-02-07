import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-primary/30">
      <div className="container flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-accent neon-glow">
            {'<'}SACHIN{'>'}
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            Backend/AI Engineer
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-sm font-mono text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-primary/30 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-sm font-mono text-foreground hover:text-primary transition-colors text-left"
              >
                &gt; {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

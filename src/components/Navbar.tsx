import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'mindrix', label: 'Mindrix' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/30 border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold glow-text"
        >
          KT
        </motion.div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

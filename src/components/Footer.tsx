import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: Github, href: 'https://github.com/Kartikeya-trivedi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kartikeyatrivedi/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/KartikeyaT99662', label: 'X' },
    { icon: Mail, href: 'mailto:kartikeyatrivedi@outlook.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 glow-text">Kartikeya Trivedi</h3>
            <p className="text-muted-foreground">Building the future of AI, one model at a time</p>
          </div>

          {/* Center: Social links */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2025 Kartikeya Trivedi</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg neural-glow flex items-center justify-center hover:shadow-xl transition-all z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Database, Boxes } from 'lucide-react';
import profileImage from '@/assets/kartikeya-photo.jpg';

const skills = [
  { icon: Brain, label: 'PyTorch', color: '#EE4C2C' },
  { icon: Code2, label: 'FastAPI', color: '#009688' },
  { icon: Database, label: 'Agno', color: '#7C3AED' },
  { icon: Boxes, label: 'Docker', color: '#2496ED' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
  {/* Background glow (increased size) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8 glow-text">About</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Machine Learning Engineer and{' '}
                <span className="text-primary font-semibold">Founder of Mindrix</span>, specializing in{' '}
                <span className="text-secondary font-semibold">agentic AI systems</span> and{' '}
                <span className="text-accent font-semibold">real-time generative AI</span>.
              </p>
              <p>
                As a <span className="text-primary font-semibold">Microsoft Learn Student Ambassador</span> at KIIT,
                I build intelligent systems that bridge cutting-edge research with production-ready applications—from
                AI coding assistants to video generation engines.
              </p>
              <p>
                My work focuses on <span className="text-secondary font-semibold">FastAPI backends</span>,{' '}
                <span className="text-accent font-semibold">agentic frameworks</span>, and deploying scalable
                AI infrastructure that transforms how developers work.
              </p>
            </div>
          </motion.div>

          {/* Right: Profile image with skill orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[580px] flex items-center justify-center"
          >
            {/* Profile Image in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-56 h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <img
                src={profileImage}
                alt="Kartikeya Trivedi"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Orbiting skills */}
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.label}
                  animate={{
                    rotate: 360,
                    x: [x, x * 1.1, x],
                    y: [y, y * 1.1, y],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    x: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
                  }}
                  className="absolute w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center group hover:border-primary transition-all cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-40px',
                    marginTop: '-40px',
                  }}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${skill.color}40` }}
                >
                  <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                  <div className="absolute -bottom-8 text-xs text-center w-20 text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

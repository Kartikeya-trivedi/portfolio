import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cpu, Zap, Globe } from 'lucide-react';

const skills = [
  { icon: Brain, label: 'PyTorch', color: '#EE4C2C' },
  { icon: Cpu, label: 'TensorFlow', color: '#FF6F00' },
  { icon: Zap, label: 'React', color: '#61DAFB' },
  { icon: Globe, label: 'Next.js', color: '#FFFFFF' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />

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
                I'm a Machine Learning Engineer specializing in{' '}
                <span className="text-primary font-semibold">agentic systems</span> and{' '}
                <span className="text-secondary font-semibold">real-time generative AI</span>.
              </p>
              <p>
                My work focuses on building intelligent systems that can reason, adapt, and create—
                pushing the boundaries of what AI can accomplish in production environments.
              </p>
              <p>
                From neural architecture optimization to deploying scalable AI infrastructure,
                I bridge the gap between cutting-edge research and real-world applications.
              </p>
            </div>
          </motion.div>

          {/* Right: Skill orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Center core */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary neural-glow flex items-center justify-center"
            >
              <Brain className="w-16 h-16 text-background" />
            </motion.div>

            {/* Orbiting skills */}
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const radius = 150;
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

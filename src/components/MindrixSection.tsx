import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Layers, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'Agentic Systems',
    description: 'Building autonomous AI agents that think, reason, and act',
  },
  {
    icon: Layers,
    title: 'AI Infrastructure',
    description: 'Scalable systems for deploying production ML workloads',
  },
  {
    icon: Zap,
    title: 'Creative Automation',
    description: 'Generative AI tools for content creation and synthesis',
  },
];

export default function MindrixSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="mindrix" ref={ref} className="relative py-32 overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,217,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Logo placeholder */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary neural-glow flex items-center justify-center">
              <span className="text-4xl font-bold text-background">M</span>
            </div>
          </motion.div>

          <h2 className="text-6xl font-bold mb-6 glow-text">Mindrix</h2>
          <p className="text-2xl text-muted-foreground mb-4">
            Bootstrapped SaaS Startup
          </p>
          <p className="text-xl text-primary">
            Building Intelligent Systems
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: 'easeInOut',
                }}
              >
                <Card className="group relative overflow-hidden bg-card/30 backdrop-blur border-border hover:border-primary/50 transition-all h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all" />

                  <div className="p-8 relative z-10 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50"
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl" />
            <p className="relative text-xl text-foreground/90 leading-relaxed py-8">
              "We're building the infrastructure that powers the next generation of intelligent applications—
              systems that don't just process data, but <span className="text-primary font-semibold">understand</span>, 
              <span className="text-secondary font-semibold"> reason</span>, and 
              <span className="text-accent font-semibold"> create</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

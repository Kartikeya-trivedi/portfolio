import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const research = [
  {
    id: 1,
    title: 'Predicting Earth\'s Ecosystems, Biodiversity, and Climate in 2525',
    status: 'Published',
    year: '2024',
    description: 'Long-term climate modeling using ensemble neural networks and temporal transformers',
    tags: ['Climate AI', 'Deep Learning', 'Time Series'],
    featured: true,
  },
  {
    id: 2,
    title: 'Agentic Systems for Autonomous Decision Making',
    status: 'Coming Soon',
    year: '2025',
    description: 'Framework for building self-directed AI agents with memory and reasoning',
    tags: ['Agents', 'LLMs', 'Reinforcement Learning'],
    featured: false,
  },
];

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="research" ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#5DD9FF12_1px,transparent_1px),linear-gradient(to_bottom,#5DD9FF12_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">Research & Papers</h2>
          <p className="text-xl text-muted-foreground">
            Exploring the frontiers of machine learning and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {research.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`group relative overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all ${
                  paper.featured ? 'glow-border' : ''
                }`}
              >
                {paper.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                )}

                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-xs px-3 py-1 rounded-full ${
                            paper.status === 'Published' 
                              ? 'bg-primary/20 text-primary border border-primary/30' 
                              : 'bg-secondary/20 text-secondary border border-secondary/30'
                          }`}>
                            {paper.status}
                          </span>
                          <span className="text-sm text-muted-foreground">{paper.year}</span>
                        </div>
                      </div>
                    </div>

                    {paper.status === 'Published' && (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'CodeShift',
    category: 'Infra',
    description: 'AI-powered VS Code extension with FastAPI backend using Agno framework. Features WebSocket streaming for low-latency code suggestions, vector-based context retrieval, and incremental parsing for large codebases.',
    tags: ['FastAPI', 'Agno', 'WebSocket', 'VS Code'],
    gradient: 'from-primary to-secondary',
  },
  {
    id: 2,
    title: 'ForgeTube',
    category: 'GenAI',
    description: 'End-to-end video assembly engine that segments LLM scripts into visual scenes with Stable Diffusion. Features FFmpeg scene stitching, kokoro TTS voiceover sync, and automated YouTube-ready MP4 rendering.',
    tags: ['Stable Diffusion', 'FFmpeg', 'kokoro TTS', 'Python'],
    gradient: 'from-secondary to-accent',
  },
  {
    id: 3,
    title: 'Professor Peter',
    category: 'GenAI',
    description: 'Hackathon-winning AI educational content generator with FastAPI backend. Real-time lip-syncing with FFmpeg and ElevenLabs TTS for natural narration, creating dynamic videos of Peter Griffin from text input.',
    tags: ['FastAPI', 'FFmpeg', 'ElevenLabs', 'REST API'],
    gradient: 'from-accent to-primary',
  },
];

const categories = ['All', 'ML', 'GenAI', 'Infra'];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold mb-12 text-center glow-text"
        >
          Projects
        </motion.h2>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === category
                  ? 'border-primary bg-primary/20 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all h-full perspective-card">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
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

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    role: 'Founder',
    company: 'Mindrix',
    location: 'Lucknow, India',
    period: 'May 2025 – Present',
    achievements: [
      'Secured a $500 Modal grant with an additional $30/month vested credit, enabling scalable cloud infrastructure for AI product development',
      'Developed an AI-powered coding assistant Codeshift, designed to enhance developer productivity through intelligent code generation and context-aware suggestions',
      'Engaged with multiple investors and startup founders to gather strategic feedback, refining product direction and business model'
    ]
  },
  {
    role: 'Technical Executive',
    company: 'Microsoft Learn Student Ambassadors',
    location: 'KIIT, Bhubaneswar, India',
    period: 'Jan 2025 – Present',
    achievements: [
      'Managed the event "Captcha the Impostor" and served as a speaker for a machine learning workshop utilizing the AGNO framework',
      'Built the FastAPI backend for "Professor Peter" using tools like FFmpeg and ElevenLabs TTS, a project that won a hackathon by delivering dynamic, AI-generated videos of Peter Griffin'
    ]
  }
];

const certifications = [
  'Generative AI with Large Language Models – DeepLearning.AI 2025',
  'IBM Professional Data Analyst Certification – IBM 2025',
  'Supervised Machine Learning: Regression and Classification – Coursera (by Andrew Ng) 2025'
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold mb-16 text-center glow-text"
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all perspective-card group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold glow-text">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-4 bg-card/30 backdrop-blur border-border hover:border-secondary/50 transition-all h-full">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

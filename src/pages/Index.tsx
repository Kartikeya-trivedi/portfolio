import { motion, AnimatePresence } from 'framer-motion';
import NeuralBackground from '@/components/NeuralBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import MindrixSection from '@/components/MindrixSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen"
      >
        {/* 3D Neural Background */}
        <NeuralBackground />

        {/* Navigation */}
        <Navbar />

        {/* Content Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ResearchSection />
          <MindrixSection />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

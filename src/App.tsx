import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark text-white"
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="fixed bottom-8 right-8 bg-primary text-dark p-2 rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300"
      >
        ↑
      </Link>
    </motion.div>
  );
}

export default App;
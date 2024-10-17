import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27973-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Ramachandra Udupa
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-primary mb-8"
        >
          AI Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-12"
        >
          Crafting intelligent solutions for tomorrow's challenges
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors duration-300 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-dark transition-colors duration-300 cursor-pointer"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
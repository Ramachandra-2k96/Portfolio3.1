import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Ramachandra Udupa"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              As an AI & Data Science student, I'm passionate about leveraging cutting-edge technologies to solve complex problems. My academic journey has equipped me with a strong foundation in machine learning, deep learning, and data analysis.
            </p>
            <p className="text-lg mb-4">
              I've had the opportunity to work on several exciting projects, from developing predictive models to creating intelligent chatbots. My goal is to contribute to the field of AI and make a positive impact on society through innovative solutions.
            </p>
            <p className="text-lg">
              When I'm not coding or studying, you can find me exploring the latest AI research papers, participating in hackathons, or enjoying a good sci-fi novel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
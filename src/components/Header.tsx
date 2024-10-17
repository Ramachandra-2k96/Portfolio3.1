import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-dark bg-opacity-80 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-primary cursor-pointer">
          RU
        </Link>
        <ul className="flex space-x-6">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-white hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
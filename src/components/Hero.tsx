import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold text-primary-800 mb-6"
        >
          Transform Your Life with Holistic Healing
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Join our community of healers and discover the perfect balance of spiritual growth, 
          practical healing skills, and financial abundance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="programs" smooth={true} duration={500}>
            <button className="px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
              Explore Programs
            </button>
          </Link>
          <Link to="booking" smooth={true} duration={500}>
            <button className="px-8 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors">
              Book a Session
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Glassmorphism card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
            
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-8 mx-auto"
            ></motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
            >
              A passionate and results-driven software engineering student at{' '}
              <span className="text-emerald-400 font-semibold">UET Lahore</span>, with hands-on experience 
              in building dynamic, user-centric applications using modern frontend technologies. 
              Skilled in crafting clean UIs with{' '}
              <span className="text-cyan-400 font-semibold">React.js</span> and{' '}
              <span className="text-violet-400 font-semibold">React Native</span>, and experienced 
              in API integration, responsive design, and version control. Always eager to learn 
              and bring digital ideas to life with creativity and precision.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

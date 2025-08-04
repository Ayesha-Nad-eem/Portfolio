import React from 'react';
import { motion } from 'framer-motion';
import CV from '../assets/Ayesha.pdf';

const TypingText = ({ texts }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setDisplayText(texts[currentIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % texts.length);
          setCharIndex(0);
          setDisplayText('');
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, texts]);

  return (
    <span className="text-white">
      {displayText}
      <span className="animate-pulse text-gray-300">|</span>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <span className="text-white text-sm font-medium">✨ Available for exciting opportunities</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          Ayesha Nadeem
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
        >
          Frontend Developer | React & React Native Enthusiast
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl mb-8 font-mono min-h-[2rem]"
        >
          <TypingText texts={["Frontend Developer", "React Enthusiast", "UI/UX Crafter", "Problem Solver"]} />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl mb-8 italic max-w-2xl mx-auto"
        >
          "I don't just build interfaces, I craft experiences that connect people with technology."
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 text-gray-400"
        >
          <a href="mailto:an0124163@gmail.com" className="hover:text-white transition-colors duration-300">
            an0124163@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+923270733770" className="hover:text-white transition-colors duration-300">
            +92 327 0733770
          </a>
          <span>•</span>
          <span>Lahore, Pakistan</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://www.linkedin.com/in/ayesha-nadeem-rj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-white to-gray-300 text-black rounded-full font-medium shadow-lg shadow-white/25 hover:shadow-white/40 transition-all duration-300"
          >
            LinkedIn
          </motion.a>
          
          <motion.a
            href="https://github.com/Ayesha-Nad-eem"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-full font-medium hover:border-white/50 hover:text-white transition-all duration-300"
          >
            GitHub
          </motion.a>
          
          <motion.a
            href={CV}
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-medium shadow-lg shadow-gray-500/25 hover:shadow-gray-500/40 transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

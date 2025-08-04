import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Centura',
      type: 'Remote',
      period: 'May 2024 – Aug 2024',
      color: 'emerald',
      achievements: [
        'Built dynamic interfaces using React.js and Tailwind CSS',
        'Collaborated on responsive layout design and reusable component development',
        'Gained practical experience in debugging and cross-browser compatibility'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Code Alpha',
      type: 'Remote',
      period: 'June 2024 – July 2024',
      color: 'cyan',
      achievements: [
        'Enhanced UI/UX components using clean JavaScript logic',
        'Practiced version control with Git and collaborated using GitHub',
        'Applied real-world design thinking in frontend workflows'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-l-4 ${
                exp.color === 'emerald' ? 'border-emerald-500' : 'border-cyan-500'
              } relative overflow-hidden group`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                exp.color === 'emerald' 
                  ? 'from-emerald-500/5 to-transparent' 
                  : 'from-cyan-500/5 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Pulse indicator */}
              <div className={`absolute top-6 right-6 w-3 h-3 ${
                exp.color === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'
              } rounded-full animate-pulse`}></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {exp.title} – {exp.company}
                  <span className="text-lg text-gray-400 font-normal ml-2">({exp.type})</span>
                </h3>
                
                <p className={`${
                  exp.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                } font-medium mb-6`}>
                  {exp.period}
                </p>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className={`${
                        exp.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                      } mr-3 mt-1.5 flex-shrink-0`}>
                        •
                      </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

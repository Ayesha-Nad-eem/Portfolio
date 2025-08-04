import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Centura',
      type: 'Remote',
      period: 'May 2024 – Aug 2024',
      description: [
        'Built dynamic interfaces using React.js and Tailwind CSS.',
        'Collaborated on responsive layout design and reusable component development.',
        'Gained practical experience in debugging and cross-browser compatibility.'
      ],
      color: 'from-white to-gray-300'
    },
    {
      title: 'Frontend Developer',
      company: 'Code Alpha',
      type: 'Remote',
      period: 'June 2024 – July 2024',
      description: [
        'Enhanced UI/UX components using clean JavaScript logic.',
        'Practiced version control with Git and collaborated using GitHub.',
        'Applied real-world design thinking in frontend workflows.'
      ],
      color: 'from-gray-200 to-gray-400'
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
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-gray-300/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Color indicator */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-lg font-medium">{exp.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{exp.type}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-black`}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                      <span className="text-lg leading-relaxed">{item}</span>
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
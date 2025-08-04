import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-400 to-cyan-400' },
        { name: 'React Native', level: 85, color: 'from-purple-400 to-pink-400' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-400' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-green-400' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-400' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-gray-400 to-slate-500' },
        { name: 'API Integration', level: 80, color: 'from-emerald-400 to-teal-400' },
        { name: 'Database Management', level: 75, color: 'from-cyan-400 to-blue-400' },
        { name: 'C++', level: 78, color: 'from-indigo-400 to-purple-400' },
        { name: 'OOP', level: 82, color: 'from-rose-400 to-pink-400' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 90, color: 'from-green-400 to-emerald-400' },
        { name: 'Team Collaboration', level: 88, color: 'from-violet-400 to-purple-400' },
        { name: 'Communication', level: 85, color: 'from-amber-400 to-yellow-400' },
        { name: 'Project Management', level: 80, color: 'from-pink-400 to-rose-400' }
      ]
    }
  ];

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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

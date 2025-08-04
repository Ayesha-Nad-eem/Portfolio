import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Task Flow',
      description: 'A productivity-focused to-do app built in React.js with Tailwind CSS. Supports task prioritization, reusable components, and real-time progress tracking using charts.',
      technologies: ['React.js', 'Tailwind CSS', 'Chart.js'],
      color: 'violet',
      icon: '📝'
    },
    {
      title: 'MovieVerse',
      description: 'A dynamic movie browser powered by TMDb API. Built with React.js and Tailwind CSS. Features trending/upcoming movie listings, search functionality, and watchlist management.',
      technologies: ['React.js', 'API Integration', 'Tailwind CSS'],
      color: 'emerald',
      icon: '🎬'
    },
    {
      title: 'E-ShopX',
      description: 'A fully responsive e-commerce frontend. Built in React.js with FakeStoreAPI, it supports product listing, filtering, cart, and Context API for state management.',
      technologies: ['React.js', 'Context API', 'E-commerce'],
      color: 'cyan',
      icon: '🛒'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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

  const getColorClasses = (color) => {
    const colors = {
      violet: {
        border: 'border-violet-500',
        gradient: 'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10',
        pulse: 'bg-violet-400',
        tech: 'bg-violet-500/20 text-violet-300'
      },
      emerald: {
        border: 'border-emerald-500',
        gradient: 'from-emerald-500/10 via-teal-500/5 to-green-500/10',
        pulse: 'bg-emerald-400',
        tech: 'bg-emerald-500/20 text-emerald-300'
      },
      cyan: {
        border: 'border-cyan-500',
        gradient: 'from-cyan-500/10 via-blue-500/5 to-indigo-500/10',
        pulse: 'bg-cyan-400',
        tech: 'bg-cyan-500/20 text-cyan-300'
      }
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border-t-4 ${colors.border} relative overflow-hidden group cursor-pointer`}
              >
                {/* Glassmorphism overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Pulse indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 ${colors.pulse} rounded-full animate-pulse`}></div>

                <div className="relative z-10">
                  {/* Project icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-4xl mb-4"
                  >
                    {project.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className={`px-3 py-1 ${colors.tech} rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

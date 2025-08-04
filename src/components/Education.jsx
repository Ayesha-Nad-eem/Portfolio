import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'BS Software Engineering',
      institution: 'UET New Campus KSK, Lahore',
      period: 'Sep 2023 - Present',
      cgpa: '3.574',
      description: 'Highlighted excellence in both management and technical skills with a focus on modern software development practices and emerging technologies.',
      color: 'emerald'
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Punjab College, Lahore',
      period: '2021 - 2023',
      description: 'Completed comprehensive computer science curriculum with hands-on experience in robotics programming and active participation in team leadership roles and collaborative projects.',
      color: 'cyan'
    }
  ];

  const certificates = [
    {
      title: 'Microsoft Office Specialist',
      issuer: 'Microsoft Corporation',
      icon: '🏆',
      color: 'blue'
    },
    {
      title: 'Robotics Programme',
      issuer: 'Punjab College',
      period: '2021 – 2023',
      icon: '🤖',
      color: 'purple'
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
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Education & Certificates
        </motion.h2>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 mb-16"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-l-4 ${
                edu.color === 'emerald' ? 'border-emerald-500' : 'border-cyan-500'
              } relative overflow-hidden group`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                edu.color === 'emerald' 
                  ? 'from-emerald-500/5 to-transparent' 
                  : 'from-cyan-500/5 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Pulse indicator */}
              <div className={`absolute top-6 right-6 w-3 h-3 ${
                edu.color === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'
              } rounded-full animate-pulse`}></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                
                <p className={`${
                  edu.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                } font-medium mb-1`}>
                  {edu.institution}
                </p>
                
                <p className="text-gray-400 mb-4">
                  {edu.period}
                </p>
                
                {edu.cgpa && (
                  <p className="text-white mb-4">
                    <span className="font-semibold text-amber-400">CGPA: {edu.cgpa}</span>
                  </p>
                )}
                
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                cert.color === 'blue' 
                  ? 'from-blue-500/10 via-cyan-500/5 to-transparent'
                  : 'from-purple-500/10 via-violet-500/5 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Pulse indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 ${
                cert.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'
              } rounded-full animate-pulse`}></div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-4xl mb-4"
                >
                  {cert.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className={`${
                  cert.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                } font-medium mb-1`}>
                  {cert.issuer}
                </p>

                {cert.period && (
                  <p className="text-gray-400 text-sm">
                    {cert.period}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

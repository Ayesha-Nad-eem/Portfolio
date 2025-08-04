import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'an0124163@gmail.com',
      href: 'mailto:an0124163@gmail.com',
      color: 'emerald'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+92 327 0733770',
      href: 'tel:+923270733770',
      color: 'cyan'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
      color: 'violet'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://www.linkedin.com/in/ayesha-nadeem-rj',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      icon: '💻',
      href: 'https://github.com/Ayesha-Nad-eem',
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Portfolio',
      icon: '🌐',
      href: '#home',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always open to new opportunities, collaborations, and creative projects. 
            Let's build something amazing together!
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-${method.color}-500/20 group relative overflow-hidden block`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${method.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className={`text-${method.color}-400 font-semibold mb-2`}>
                    {method.label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:an0124163@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black rounded-full font-semibold shadow-lg shadow-white/25 hover:shadow-white/40 transition-all duration-300 flex items-center gap-3"
            >
              <span>📧</span>
              Say Hello
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ayesha-nadeem-rj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-white/50 hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              <span>💼</span>
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                title={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-700/50"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Ayesha Nadeem. Built with React, Tailwind CSS, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

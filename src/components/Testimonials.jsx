import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ayesha's attention to detail and creative UI skills are top-notch! Highly recommended for any frontend project.",
      name: 'Sarah Khan',
      role: 'Product Manager, Centura',
      avatar: '👩‍💼'
    },
    {
      quote: "Working with Ayesha was a breeze. She brings ideas to life with beautiful code and design.",
      name: 'Ali Raza',
      role: 'Team Lead, Code Alpha',
      avatar: '👨‍💻'
    },
    {
      quote: "Ayesha is a rising star in frontend development. Her React and Tailwind skills are impressive!",
      name: 'Fatima Noor',
      role: 'Mentor, UET Lahore',
      avatar: '👩‍🏫'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
        >
          Testimonials
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-emerald-500/20 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
              
              {/* Decorative quotes */}
              <div className="absolute top-4 left-4 text-4xl text-emerald-400/30">"</div>
              <div className="absolute bottom-4 right-4 text-4xl text-emerald-400/30 rotate-180">"</div>

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-6xl mb-6"
                >
                  {testimonials[currentIndex].avatar}
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-300 mb-8 italic leading-relaxed"
                >
                  {testimonials[currentIndex].quote}
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="text-xl font-bold text-emerald-400 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

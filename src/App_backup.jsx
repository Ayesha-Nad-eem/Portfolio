
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({ 
      duration: 600, 
      once: true,
      easing: 'ease-out-cubic',
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import CV from './assets/Ayesha.pdf';

// Optimized animated background blob component
function AnimatedBlob({ className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.15],
        scale: [1, 1.05, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity,
        ease: "linear"
      }}
      className={`absolute rounded-full filter blur-3xl ${className}`}
      style={style}
    />
  );
}

// Typing animati        {/* Enhanced Contact Section */}
        <section id="contact" className="py-24 px-6" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-8"
            >
              Let's Connect!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I'm always open to new opportunities, collaborations, and creative projects. Let's build something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.a 
                href="mailto:an0124163@gmail.com" 
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-500 shadow-xl shadow-amber-500/30 font-semibold text-lg flex items-center gap-3"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📧</span> Say Hello
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ayesha-nadeem-rj" 
                target="_blank" 
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl hover:from-slate-800 hover:to-slate-900 transition-all duration-500 shadow-xl shadow-slate-500/30 font-medium text-lg flex items-center gap-3"
        whileHover={{ scale: 1.02, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>💼</span> LinkedIn
      </motion.a>
    </motion.div>
  </div>
</section>

// Typing animation
function Typing({ texts, speed = 100, loop = true }) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < texts[idx].length) {
        setDisplay(texts[idx].slice(0, char + 1));
        setChar(char + 1);
      } else {
        setTimeout(() => {
          if (loop) {
            setIdx((idx + 1) % texts.length);
            setChar(0);
            setDisplay('');
          }
        }, 1200);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [char, idx, texts, speed, loop]);
  return <span>{display}<span className="animate-pulse">|</span></span>;
}

// Testimonials carousel
const testimonials = [
  {
    quote: "Ayesha's attention to detail and creative UI skills are top-notch! Highly recommended for any frontend project.",
    name: 'Sarah Khan',
    role: 'Product Manager, Centura',
  },
  {
    quote: "Working with Ayesha was a breeze. She brings ideas to life with beautiful code and design.",
    name: 'Ali Raza',
    role: 'Team Lead, Code Alpha',
  },
  {
    quote: "Ayesha is a rising star in frontend development. Her React and Tailwind skills are impressive!",
    name: 'Fatima Noor',
    role: 'Mentor, UET Lahore',
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIdx((idx + 1) % testimonials.length), 6000);
    return () => clearTimeout(timer);
  }, [idx]);
  return (
    <motion.div 
      className="relative max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl shadow-2xl rounded-3xl px-10 py-10 text-center border border-amber-500/20 relative overflow-hidden group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-orange-400/5 to-rose-400/5 group-hover:from-amber-400/10 group-hover:via-orange-400/10 group-hover:to-rose-400/10 transition-all duration-700"></div>
          <motion.div 
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-100 mb-8 relative z-10 leading-relaxed">
            <span className="text-4xl text-amber-400 font-serif leading-none">"</span>
            {testimonials[idx].quote}
            <span className="text-4xl text-amber-400 font-serif leading-none">"</span>
          </blockquote>
          <motion.div 
            className="text-amber-400 font-bold text-xl relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {testimonials[idx].name}
          </motion.div>
          <motion.div 
            className="text-slate-400 text-base relative z-10 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {testimonials[idx].role}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-4 mt-8">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.8 }}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${i === idx ? 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-500/50' : 'bg-slate-500 hover:bg-slate-400'}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.documentElement.classList.add('dark'); // Always use dark mode
  }, []);
  return (
    <div className="relative min-h-screen font-sans transition-all duration-1000 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-slate-50 overflow-x-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <AnimatedBlob className="w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-rose-500/20 top-[-12rem] left-[-12rem]" />
        <AnimatedBlob className="w-[400px] h-[400px] bg-gradient-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/20 bottom-[-10rem] right-[-10rem]" />
        <AnimatedBlob className="w-[350px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 top-[60%] left-[70%] transform -translate-x-1/2 -translate-y-1/2" />
        <AnimatedBlob className="w-[300px] h-[300px] bg-gradient-to-br from-blue-500/10 via-indigo-500/15 to-purple-500/10 top-[20%] right-[20%]" />
      </div>
      
      {/* Optimized floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, -150],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>
      {/* Enhanced Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-slate-950/30 backdrop-blur-2xl shadow-2xl border-b border-amber-500/20 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <motion.span 
            whileHover={{ scale: 1.02 }}
            className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent select-none cursor-pointer"
          >
            Ayesha Nadeem
          </motion.span>
          <ul className="hidden md:flex gap-10 font-medium">
            {['Home','About','Experience','Projects','Skills','Education','Certificates','Contact'].map((s, index) => (
              <motion.li 
                key={s}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -1, scale: 1.02 }}
              >
                <a 
                  href={`#${s.toLowerCase()}`} 
                  className="hover:text-amber-400 transition-all duration-500 hover:scale-110 inline-block relative group"
                >
                  {s}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-500"
                  ></motion.div>
                </a>
              </motion.li>
            ))}
          </ul>
          {/* Optimized Mobile menu button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden ml-2 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-amber-500/25"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ rotate: mobileOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </motion.button>
          {/* Optimized Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 right-6 bg-slate-900/95 backdrop-blur-2xl shadow-2xl rounded-3xl flex flex-col gap-6 p-8 md:hidden border border-amber-500/20 z-50 max-w-[calc(100vw-3rem)]"
              >
                {['Home','About','Experience','Projects','Skills','Education','Certificates','Contact'].map((s, index) => (
                  <motion.li 
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    whileHover={{ x: 3 }}
                  >
                    <a 
                      href={`#${s.toLowerCase()}`} 
                      className="hover:text-amber-400 transition-all duration-300 block py-2 text-lg" 
                      onClick={() => setMobileOpen(false)}
                    >
                      {s}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      {/* Main Content */}
      <main className="relative z-10 pt-24 md:pt-28 w-full overflow-x-hidden">
        <div className="w-full max-w-full">
        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden w-full max-w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-amber-500/20"
              whileHover={{ scale: 1.02 }}
            >
              ✨ Available for exciting opportunities
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.01 }}
            >
              Ayesha Nadeem
            </motion.h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Frontend Developer | React & React Native Enthusiast</h2>
            <div className="text-lg md:text-xl text-indigo-700 dark:text-teal-300 font-mono mb-4">
              <Typing texts={["Frontend Developer", "React Enthusiast", "UI Crafter"]} speed={80} />
            </div>
            <blockquote className="italic text-gray-700 dark:text-gray-300 mb-6">“I don’t just build interfaces, I craft experiences.”</blockquote>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a href="mailto:an0124163@gmail.com" className="text-indigo-700 dark:text-teal-400 hover:underline">an0124163@gmail.com</a>
              <span className="text-gray-400">|</span>
              <a href="tel:+923270733770" className="text-indigo-700 dark:text-teal-400 hover:underline">+92 327 0733770</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://www.linkedin.com/in/ayesha-nadeem-rj" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">LinkedIn</a>
              <a href="https://github.com/Ayesha-Nad-eem" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline">GitHub</a>
              <a href={CV} download className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:scale-105 transition-transform">Download CV</a>
            </div>
          </motion.div>
        </section>
        {/* Enhanced About Section */}
        <section id="about" className="max-w-4xl mx-auto py-20 px-6" data-aos="fade-up">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="bg-gradient-to-br from-slate-800/70 via-slate-700/60 to-slate-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-amber-500/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-rose-500/10 group-hover:from-amber-500/10 group-hover:via-orange-500/10 group-hover:to-rose-500/15 transition-all duration-700"></div>
            <motion.div 
              className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-8 relative z-10 text-center"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-200 leading-relaxed relative z-10 text-center max-w-3xl mx-auto"
            >
              A passionate and results-driven software engineering student at UET Lahore, with hands-on experience in building dynamic, user-centric applications using modern frontend technologies. Skilled in crafting clean UIs with React.js and React Native, and experienced in API integration, responsive design, and version control. Always eager to learn and bring digital ideas to life with creativity and precision.
            </motion.p>
          </motion.div>
        </section>
        {/* Enhanced Experience Section */}
        <section id="experience" className="bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/60 backdrop-blur-sm py-24 px-6" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-16 text-center"
            >
              Experience
            </motion.h2>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.01, y: -3 }}
                className="bg-gradient-to-br from-slate-800/70 via-slate-700/60 to-slate-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border-l-8 border-amber-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-slate-100 relative z-10 mb-2"
                >
                  Frontend Developer – Centura 
                  <span className="text-lg text-slate-400 font-normal ml-2">(Remote)</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-amber-400 text-base mb-6 relative z-10 font-medium"
                >
                  May 2024 – Aug 2024
                </motion.p>
                <motion.ul 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="list-disc list-inside text-slate-300 space-y-3 relative z-10 text-lg"
                >
                  <li>Built dynamic interfaces using React.js and Tailwind CSS.</li>
                  <li>Collaborated on responsive layout design and reusable component development.</li>
                  <li>Gained practical experience in debugging and cross-browser compatibility.</li>
                </motion.ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.01, y: -3 }}
                className="bg-gradient-to-br from-slate-800/70 via-slate-700/60 to-slate-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border-l-8 border-orange-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-slate-100 relative z-10 mb-2"
                >
                  Frontend Developer – Code Alpha 
                  <span className="text-lg text-slate-400 font-normal ml-2">(Remote)</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-orange-400 text-base mb-6 relative z-10 font-medium"
                >
                  June 2024 – July 2024
                </motion.p>
                <motion.ul 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="list-disc list-inside text-slate-300 space-y-3 relative z-10 text-lg"
                >
                  <li>Enhanced UI/UX components using clean JavaScript logic.</li>
                  <li>Practiced version control with Git and collaborated using GitHub.</li>
                  <li>Applied real-world design thinking in frontend workflows.</li>
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Enhanced Projects Section */}
        <section id="projects" className="py-24 px-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-16 text-center"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border-t-8 border-purple-500 flex flex-col relative overflow-hidden group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold mb-6 text-slate-100 relative z-10"
                >
                  Task Flow
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-300 flex-1 leading-relaxed relative z-10 text-lg"
                >
                  A productivity-focused to-do app built in React.js with Tailwind CSS. Supports task prioritization, reusable components, and real-time progress tracking using charts.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-2 mt-6 relative z-10"
                >
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border-t-8 border-blue-500 flex flex-col relative overflow-hidden group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold mb-6 text-slate-100 relative z-10"
                >
                  MovieVerse
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-300 flex-1 leading-relaxed relative z-10 text-lg"
                >
                  A dynamic movie browser powered by TMDb API. Built with React.js and Tailwind CSS. Features trending/upcoming movie listings, search functionality, and watchlist management.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-2 mt-6 relative z-10"
                >
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">API</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border-t-8 border-emerald-500 flex flex-col relative overflow-hidden group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold mb-6 text-slate-100 relative z-10"
                >
                  E-ShopX
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-slate-300 flex-1 leading-relaxed relative z-10 text-lg"
                >
                  A fully responsive e-commerce frontend. Built in React.js with FakeStoreAPI, it supports product listing, filtering, cart, and Context API for state management.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-2 mt-6 relative z-10"
                >
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Context API</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Enhanced Skills Section */}
        <section id="skills" className="bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/60 backdrop-blur-sm py-24 px-6" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-16 text-center"
            >
              Skills & Technologies
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
            >
              {[
                { name: 'React.js', color: 'from-blue-400 to-cyan-400' },
                { name: 'React Native', color: 'from-purple-400 to-pink-400' },
                { name: 'Tailwind CSS', color: 'from-teal-400 to-green-400' },
                { name: 'JavaScript', color: 'from-yellow-400 to-orange-400' },
                { name: 'HTML', color: 'from-orange-400 to-red-400' },
                { name: 'CSS', color: 'from-blue-400 to-indigo-400' },
                { name: 'API Integration', color: 'from-emerald-400 to-teal-400' },
                { name: 'Git & GitHub', color: 'from-gray-400 to-slate-500' },
                { name: 'C++', color: 'from-indigo-400 to-purple-400' },
                { name: 'OOP', color: 'from-rose-400 to-pink-400' },
                { name: 'Database Management', color: 'from-cyan-400 to-blue-400' },
                { name: 'Competitive Programming', color: 'from-amber-400 to-yellow-400' },
                { name: 'Problem Solving', color: 'from-green-400 to-emerald-400' },
                { name: 'Robotics (Basic)', color: 'from-violet-400 to-purple-400' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -3
                  }}
                  className="bg-gradient-to-br from-slate-800/70 to-slate-700/60 backdrop-blur-xl rounded-2xl p-4 text-center border border-slate-600/30 relative overflow-hidden group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  <motion.div
                    className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${skill.color} rounded-full`}
                  ></motion.div>
                  <div className="relative z-10">
                    <div className={`text-lg font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Enhanced Education Section */}
        <section id="education" className="py-24 px-6" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-16 text-center"
            >
              Education
            </motion.h2>
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }} 
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border-l-8 border-purple-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-6 right-6 w-5 h-5 bg-purple-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-slate-100 relative z-10"
                >
                  BS Software Engineering
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-purple-400 text-lg mb-4 relative z-10 font-medium"
                >
                  UET New Campus KSK, Lahore — Sep 2023 - Present
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-300 text-lg relative z-10 leading-relaxed"
                >
                  <span className="font-semibold text-amber-400">CGPA: 3.574</span><br/>
                  Highlighted excellence in both management and technical skills with a focus on modern software development practices and emerging technologies.
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }} 
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border-l-8 border-teal-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-6 right-6 w-5 h-5 bg-teal-400 rounded-full animate-pulse"></div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-slate-100 relative z-10"
                >
                  Intermediate in Computer Science
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-teal-400 text-lg mb-4 relative z-10 font-medium"
                >
                  Punjab College, Lahore — 2021 - 2023
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-300 text-lg relative z-10 leading-relaxed"
                >
                  Completed comprehensive computer science curriculum with hands-on experience in robotics programming and active participation in team leadership roles and collaborative projects.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Enhanced Certificates Section */}
        <section id="certificates" className="bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/60 backdrop-blur-sm py-24 px-6" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent mb-16 text-center"
            >
              Certificates & Achievements
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-amber-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl mb-4 relative z-10"
                >
                  🏆
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-slate-100 mb-2 relative z-10"
                >
                  Microsoft Office Specialist
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-400 font-medium relative z-10"
                >
                  Microsoft Corporation
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 via-slate-700/70 to-slate-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-amber-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl mb-4 relative z-10"
                >
                  🤖
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-slate-100 mb-2 relative z-10"
                >
                  Robotics Programme
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-purple-400 font-medium mb-2 relative z-10"
                >
                  Punjab College
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-slate-400 text-sm relative z-10"
                >
                  2021 – 2023
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8 text-center">Testimonials</h2>
          <Testimonials />
        </section>
        {/* Contact/Quote Section */}
        <section id="contact" className="py-16 px-4" data-aos="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-4">Let’s Connect!</h2>
            <p className="text-lg text-gray-900 dark:text-gray-200 mb-6">I’m always open to new opportunities, collaborations, and creative projects. Feel free to reach out!</p>
            <a href="mailto:an0124163@gmail.com" className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 text-white px-6 py-3 rounded shadow hover:scale-105 transition-transform">Say Hello</a>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

export default App

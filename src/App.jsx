
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import CV from './assets/Ayesha.pdf';

// Animated background blob component
function AnimatedBlob({ className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1.5, type: 'spring' }}
      className={`absolute rounded-full filter blur-2xl ${className}`}
      style={style}
    />
  );
}

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
    const timer = setTimeout(() => setIdx((idx + 1) % testimonials.length), 5000);
    return () => clearTimeout(timer);
  }, [idx]);
  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900/80 shadow-xl rounded-2xl px-8 py-8 text-center backdrop-blur border border-gray-200 dark:border-gray-700"
        >
          <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-4">“{testimonials[idx].quote}”</blockquote>
          <div className="text-indigo-600 dark:text-indigo-400 font-bold">{testimonials[idx].name}</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[idx].role}</div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === idx ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-700'} transition`}
            onClick={() => setIdx(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    document.documentElement.classList.add('dark'); // Always use dark mode
  }, []);
  return (
    <div className="relative min-h-screen font-sans transition-colors duration-700 bg-gray-950 text-gray-100">
      {/* Animated background blobs */}
      <AnimatedBlob className="w-96 h-96 bg-gradient-to-tr from-purple-400 via-indigo-400 to-teal-300 top-[-8rem] left-[-8rem] z-0" />
      <AnimatedBlob className="w-72 h-72 bg-gradient-to-br from-teal-200 via-indigo-200 to-purple-200 bottom-[-6rem] right-[-6rem] z-0" />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative">
          <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent select-none">Ayesha Nadeem</span>
          <ul className="hidden md:flex gap-8 font-medium">
            {['Home','About','Experience','Projects','Skills','Education','Certificates','Contact'].map((s) => (
              <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-200">{s}</a></li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button className="md:hidden ml-2 p-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-14 right-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg flex flex-col gap-4 p-6 md:hidden border border-gray-200 dark:border-gray-700 z-50"
              >
                {['Home','About','Experience','Projects','Skills','Education','Certificates','Contact'].map((s) => (
                  <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors duration-200" onClick={() => setMobileOpen(false)}>{s}</a></li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {/* Main Content */}
      <main className="relative z-10 pt-24 md:pt-28">
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-semibold mb-2 animate-bounce shadow">I'm open to opportunities</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-indigo-800 dark:text-gray-100">Ayesha Nadeem</h1>
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
        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto py-16 px-4" data-aos="fade-up">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 dark:backdrop-blur">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-4">About Me</h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              A passionate and results-driven software engineering student at UET Lahore, with hands-on experience in building dynamic, user-centric applications using modern frontend technologies. Skilled in crafting clean UIs with React.js and React Native, and experienced in API integration, responsive design, and version control. Always eager to learn and bring digital ideas to life with creativity and precision.
            </p>
          </motion.div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-teal-950 py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8">Experience</h2>
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-l-4 border-indigo-500 border-opacity-60 dark:border-indigo-400 dark:backdrop-blur">
                <h3 className="text-xl font-semibold">Frontend Developer – Centura <span className="text-sm text-gray-400 font-normal">(Remote)</span></h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">May 2024 – Aug 2024</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                  <li>Built dynamic interfaces using React.js and Tailwind CSS.</li>
                  <li>Collaborated on responsive layout design and reusable component development.</li>
                  <li>Gained practical experience in debugging and cross-browser compatibility.</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-l-4 border-teal-500 border-opacity-60 dark:border-teal-400 dark:backdrop-blur">
                <h3 className="text-xl font-semibold">Frontend Developer – Code Alpha <span className="text-sm text-gray-400 font-normal">(Remote)</span></h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">June 2024 – July 2024</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                  <li>Enhanced UI/UX components using clean JavaScript logic.</li>
                  <li>Practiced version control with Git and collaborated using GitHub.</li>
                  <li>Applied real-world design thinking in frontend workflows.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16 px-4" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(99,102,241,0.15)" }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-t-4 border-purple-500 border-opacity-60 dark:border-purple-400 flex flex-col dark:backdrop-blur">
                <h3 className="text-xl font-semibold mb-2">Task Flow</h3>
                <p className="text-gray-700 dark:text-gray-200 flex-1">A productivity-focused to-do app built in React.js with Tailwind CSS. Supports task prioritization, reusable components, and real-time progress tracking using charts.</p>
              </motion.div>
              <motion.div whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(99,102,241,0.15)" }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-t-4 border-indigo-500 border-opacity-60 dark:border-indigo-400 flex flex-col dark:backdrop-blur">
                <h3 className="text-xl font-semibold mb-2">MovieVerse</h3>
                <p className="text-gray-700 dark:text-gray-200 flex-1">A dynamic movie browser powered by TMDb API. Built with React.js and Tailwind CSS. Features trending/upcoming movie listings, search functionality, and watchlist management.</p>
              </motion.div>
              <motion.div whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(20,184,166,0.15)" }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-t-4 border-teal-500 border-opacity-60 dark:border-teal-400 flex flex-col dark:backdrop-blur">
                <h3 className="text-xl font-semibold mb-2">E-ShopX</h3>
                <p className="text-gray-700 dark:text-gray-200 flex-1">A fully responsive e-commerce frontend. Built in React.js with FakeStoreAPI, it supports product listing, filtering, cart, and Context API for state management.</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg text-gray-900 dark:text-gray-200">
              <li>React.js</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>API Integration</li>
              <li>Git & GitHub</li>
              <li>C++</li>
              <li>OOP</li>
              <li>Database Management</li>
              <li>Competitive Programming</li>
              <li>Problem Solving</li>
              <li>Robotics (Basic)</li>
            </ul>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8">Education</h2>
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-l-4 border-purple-500 border-opacity-60 dark:border-purple-400 dark:backdrop-blur">
                <h3 className="text-xl font-semibold">BS Software Engineering</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">UET New Campus KSK, Lahore — Sep 2023 - Present</p>
                <p className="text-gray-700 dark:text-gray-200">CGPA: 3.574<br/>Highlighted excellence in both management and technical skills.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-6 border-l-4 border-teal-500 border-opacity-60 dark:border-teal-400 dark:backdrop-blur">
                <h3 className="text-xl font-semibold">Intermediate in Computer Science</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Punjab College, Lahore — 2021 - 2023</p>
                <p className="text-gray-700 dark:text-gray-200">Robotics program participant and active in team leadership roles.</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Certificates Section */}
        <section id="certificates" className="bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 py-16 px-4" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-8">Certificates</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-200">
              <li>Microsoft Office Specialist – Microsoft</li>
              <li>Robotics Programme – Punjab College (2021–2023)</li>
            </ul>
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
      </main>
    </div>
  );
}

export default App

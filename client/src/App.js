import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import sha256 from 'crypto-js/sha256';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = sha256('https://your-portfolio-url.com');
    console.log(`Anti-clone token: ${hash}`);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Splash screen timeout
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {loading ? (
        <SplashScreen />
      ) : (
        <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-2 rounded-full"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;

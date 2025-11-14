import React, { useEffect, useState } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer & Tech Innovator';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Cat Background */}
      <div className="absolute top-10 right-10 w-72 h-72 opacity-10 z-0">
        <img 
          src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
          alt="Programmer Cat" 
          className="w-full h-full object-cover rounded-full border-4 border-gray-700/30 shadow-2xl"
        />
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-indigo-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Cat Theme */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold text-white border-4 border-gray-700 shadow-2xl overflow-hidden">
                {/* Mini cat in the corner */}
                <div className="absolute top-2 right-2 w-8 h-8 opacity-30">
                  <img 
                    src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
                    alt="" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                T
              </div>
            </div>
          </div>

          {/* Personal Branding */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-sm font-medium text-gray-300">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for hire
            </span>
          </div>

          {/* Text Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Thena_dev
            </span>
            <span className="text-2xl ml-4">🐱‍💻</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="border-r-2 border-blue-400 pr-1 animate-blink">
              {text}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 4+ years of experience building scalable web applications. 
            I specialize in React, Node.js, and cloud technologies, transforming complex ideas into elegant digital solutions. 
            Currently based in Seattle, Washington. 🐾
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">60+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">25+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">15+</div>
              <div className="text-sm text-gray-400">Tech Stack</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <span>🚀</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/25"
            >
              Get In Touch
              <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Personal Motto */}
          <div className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <p className="text-gray-300 italic flex items-center justify-center gap-3">
              <span className="text-2xl">💬</span>
              "Code with the precision of a cat and the curiosity to never stop learning!"
              <span className="text-2xl">🐱</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

window.Hero = Hero;
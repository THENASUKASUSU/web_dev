import React from 'react';

function About() {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      location: 'Seattle, WA',
      description: 'Leading development of enterprise applications using React, Node.js, and AWS. Architected microservices handling 100k+ daily users.',
      achievements: [
        'Reduced application load time by 65%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      year: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'InnovateTech Studio',
      location: 'Remote',
      description: 'Built scalable web applications for startups and SMEs. Specialized in React, Python, and PostgreSQL implementations.',
      achievements: [
        'Delivered 15+ projects on time',
        'Improved performance by 45%',
        'Mentored 3 junior developers'
      ]
    },
    {
      year: '2020 - 2021',
      role: 'Frontend Developer',
      company: 'Digital Creative Agency',
      location: 'Portland, OR',
      description: 'Developed responsive user interfaces and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Converted designs to pixel-perfect code',
        'Maintained 99.5% browser compatibility',
        'Increased client satisfaction by 40%'
      ]
    }
  ];

  const personalInfo = {
    location: 'Seattle, Washington, USA',
    email: 'hello@thena-dev.com',
    phone: '+1 (555) 987-6543',
    languages: ['English (Native)', 'Spanish (Conversational)', 'Japanese (Basic)'],
    interests: ['Open Source Contributing', 'Tech Blogging', 'Photography', 'Gaming', 'Cat Cafes 🐱']
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative">
      {/* Cat Background Element */}
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-5">
        <img 
          src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
          alt="" 
          className="w-full h-full object-contain rounded-full animate-pulse"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Thena_dev</span>
            <span className="text-3xl ml-2">👩‍💻</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Personal Info & Bio */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
                My Story
                <span className="text-2xl">📖</span>
              </h3>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Thena, a passionate full-stack developer based in the beautiful city of Seattle. 
                  My journey into technology started during college when I built my first website for a local 
                  cat shelter - combining my love for coding and feline friends! 🐱
                </p>
                
                <p>
                  Over the past 4+ years, I've had the privilege of working with amazing teams and clients, 
                  building everything from e-commerce platforms to complex data visualization dashboards. 
                  I specialize in React and Node.js, but I'm always excited to learn new technologies.
                </p>
                
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical 
                  blogs, or exploring Seattle's coffee shops (always with my laptop, ready to code!). 
                  I believe in continuous learning and sharing knowledge with the developer community.
                </p>

                <p>
                  My goal is to create digital experiences that not only look beautiful but also solve 
                  real-world problems. Whether it's optimizing performance, improving user experience, 
                  or building scalable architectures, I approach every project with curiosity and precision.
                </p>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">60+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
                <div className="text-xs text-gray-500 mt-1">🚀</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
                <div className="text-xs text-gray-500 mt-1">⏱️</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-400 transition-all duration-300">
                <div className="text-4xl font-bold text-pink-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
                <div className="text-xs text-gray-500 mt-1">😊</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-indigo-400 transition-all duration-300">
                <div className="text-4xl font-bold text-indigo-400 mb-2">99%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
                <div className="text-xs text-gray-500 mt-1">✅</div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Personal Details */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>📍</span> Personal Info
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🌍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>✉️</span>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>📞</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>🗣️</span> Languages
              </h4>
              <div className="space-y-2">
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="text-sm text-gray-300">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Interests
              </h4>
              <div className="space-y-2">
                {personalInfo.interests.map((interest, index) => (
                  <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> Fun Facts
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>☕ Coffee consumed while coding: 2,847 cups</div>
                <div>🌙 Favorite coding time: 10 PM - 2 AM</div>
                <div>🎵 Coding soundtrack: Lo-fi & Synthwave</div>
                <div>🐱 Pet cats: 2 (Luna & Pixel)</div>
                <div>📚 Books read this year: 12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-100 mb-12 text-center flex items-center justify-center gap-2">
            Professional Experience <span>💼</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l border-gray-600 last:border-l-0 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover:scale-105 transition-all duration-300 ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="text-sm text-blue-400 font-semibold mb-1 flex items-center gap-2">
                        <span>📅</span> {exp.year}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.role}</h4>
                      <div className="text-purple-400 font-medium flex items-center gap-2">
                        <span>🏢</span> {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-1 mt-2 md:mt-0">
                      <span>📍</span>
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                  
                  <div className="space-y-1">
                    <h5 className="text-sm font-medium text-white mb-2">Key Achievements:</h5>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
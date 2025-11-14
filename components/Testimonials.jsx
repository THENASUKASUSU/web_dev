import React, { useState } from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechFlow Solutions',
      image: 'https://picsum.photos/100/100?random=1',
      rating: 5,
      text: "Thena is an exceptional developer who consistently delivers high-quality solutions. Her expertise in React and Node.js, combined with her problem-solving skills, made her invaluable to our team. She led the development of our flagship product that now serves over 100k users.",
      project: 'E-commerce Platform',
      skills: ['React', 'Node.js', 'AWS', 'Leadership']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateTech Studio',
      image: 'https://picsum.photos/100/100?random=2',
      rating: 5,
      text: "Working with Thena was a game-changer for our startup. She not only delivered our MVP ahead of schedule but also provided valuable insights on user experience and scalability. Her attention to detail and proactive communication made the entire process smooth.",
      project: 'Social Media Analytics',
      skills: ['Vue.js', 'Python', 'PostgreSQL', 'UX']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      company: 'GreenTech Solutions',
      image: 'https://picsum.photos/100/100?random=3',
      rating: 5,
      text: "Thena transformed our vision into reality with her exceptional full-stack development skills. She built our entire platform from scratch and implemented complex features that we thought were impossible within our timeline and budget.",
      project: 'Environmental Monitoring App',
      skills: ['React Native', 'GraphQL', 'MongoDB', 'Innovation']
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Senior Developer',
      company: 'Digital Creative Agency',
      image: 'https://picsum.photos/100/100?random=4',
      rating: 5,
      text: "As a colleague, Thena was always willing to help and share her knowledge. Her code reviews were thorough and constructive, and she mentored several junior developers including myself. She's not just a great developer but also an amazing team player.",
      project: 'Team Collaboration',
      skills: ['Mentoring', 'Code Review', 'Team Leadership', 'Knowledge Sharing']
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'UI/UX Designer',
      company: 'Creative Labs',
      image: 'https://picsum.photos/100/100?random=5',
      rating: 5,
      text: "Thena has an incredible eye for design implementation. She translated our complex designs into pixel-perfect, responsive interfaces while suggesting improvements that enhanced user experience. The collaboration was seamless and professional.",
      project: 'Portfolio Website Redesign',
      skills: ['CSS', 'Responsive Design', 'Collaboration', 'Attention to Detail']
    },
    {
      id: 6,
      name: 'Alex Kumar',
      role: 'DevOps Engineer',
      company: 'CloudTech Inc',
      image: 'https://picsum.photos/100/100?random=6',
      rating: 5,
      text: "Thena's understanding of cloud architecture and DevOps practices is impressive. She helped us migrate our legacy system to a modern microservices architecture on AWS, reducing our infrastructure costs by 40% while improving performance significantly.",
      project: 'Cloud Migration',
      skills: ['AWS', 'Microservices', 'DevOps', 'System Architecture']
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  React.useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            What colleagues, clients, and collaborators say about working with me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center md:text-left">
                <div className="relative w-24 h-24 mx-auto md:mx-0 mb-4">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-1">{currentTestimonial.name}</h4>
                <p className="text-purple-400 font-medium mb-1">{currentTestimonial.role}</p>
                <p className="text-gray-400 text-sm mb-3">{currentTestimonial.company}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Project Info */}
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-400 font-medium">Project:</span> {currentTestimonial.project}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {currentTestimonial.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-2">
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-12 h-12 text-blue-400/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C4.477 8 0 12.477 0 18s4.477 10 10 10c1.105 0 2-.895 2-2s-.895-2-2-2c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.105 0 2-.895 2-2s-.895-2-2-2zm12 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c1.105 0 2-.895 2-2s-.895-2-2-2c-3.313 0-6-2.687-6-6s2.687-6 6-6c1.105 0 2-.895 2-2s-.895-2-2-2z"/>
                  </svg>
                  <div className="pl-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {currentTestimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
              title={isAutoplay ? 'Pause autoplay' : 'Resume autoplay'}
            >
              {isAutoplay ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10A9 9 0 1121 12a9 9 0 01-18 0z" />
                </svg>
              )}
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
              title="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoplay(false);
                }}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-500/20 border-2 border-blue-400'
                    : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full mx-auto mb-2"
                />
                <p className="text-white text-xs font-medium truncate">{testimonial.name}</p>
                <p className="text-gray-400 text-xs truncate">{testimonial.company}</p>
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join these satisfied clients and let's create something amazing together. 
                I'm always excited to take on new challenges and deliver exceptional results.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
                <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
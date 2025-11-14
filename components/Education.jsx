import React from 'react';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Washington',
      location: 'Seattle, WA',
      year: '2016 - 2020',
      gpa: '3.8/4.0',
      honors: 'Magna Cum Laude',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Machine Learning',
        'Computer Networks'
      ],
      activities: [
        'President of Computer Science Club',
        'Teaching Assistant for Web Development',
        'Hackathon Winner (2019, 2020)'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      credential: 'SAA-C03',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      credential: 'PCD-001',
      icon: '🌐'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      credential: 'CKA-2023',
      icon: '⚡'
    },
    {
      name: 'React Advanced Patterns',
      issuer: 'Meta',
      year: '2022',
      credential: 'RAP-2022',
      icon: '⚛️'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021',
      credential: 'MCD-2021',
      icon: '🍃'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      year: '2022',
      credential: 'DCA-2022',
      icon: '🐳'
    }
  ];

  const courses = [
    {
      name: 'Advanced React Patterns',
      provider: 'Kent C. Dodds',
      year: '2023',
      type: 'Online Course'
    },
    {
      name: 'System Design Interview',
      provider: 'Educative',
      year: '2023',
      type: 'Specialization'
    },
    {
      name: 'Microservices with Node.js',
      provider: 'Udemy',
      year: '2022',
      type: 'Professional Course'
    },
    {
      name: 'GraphQL Complete Guide',
      provider: 'The Net Ninja',
      year: '2022',
      type: 'Online Course'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My educational background and professional certifications that fuel my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formal Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                      <span>🏫</span>
                      {edu.institution}
                    </div>
                    <div className="text-gray-400 text-sm flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="text-purple-400 font-semibold">GPA: {edu.gpa}</div>
                    <div className="text-yellow-400 text-sm">{edu.honors}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span>📚</span>
                      Relevant Coursework
                    </h5>
                    <div className="space-y-1">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="text-gray-300 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span>🏆</span>
                      Activities & Honors
                    </h5>
                    <div className="space-y-1">
                      {edu.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="text-gray-300 text-sm flex items-center gap-2">
                          <span className="text-yellow-400">⭐</span>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continuous Learning */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="text-3xl">📖</span>
                Continuous Learning
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-blue-400 transition-all duration-300">
                    <h4 className="text-white font-medium mb-2">{course.name}</h4>
                    <div className="text-sm text-gray-400 flex items-center justify-between">
                      <span>{course.provider}</span>
                      <span className="text-blue-400">{course.year}</span>
                    </div>
                    <div className="text-xs text-purple-400 mt-1">{course.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🏅</span>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                      <div className="text-blue-400 text-sm mb-2">{cert.issuer}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{cert.year}</span>
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {cert.credential}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <div className="mt-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span>💡</span>
                Learning Philosophy
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines formal education, practical experience, and community learning. 
                I spend at least 5 hours per week learning new skills and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Education = Education;
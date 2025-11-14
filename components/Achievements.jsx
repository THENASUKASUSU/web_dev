import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: 'Technical Innovation Award',
      organization: 'TechFlow Solutions',
      year: '2023',
      description: 'Recognized for developing an AI-powered code review system that reduced review time by 60%',
      icon: '🏆',
      category: 'Professional'
    },
    {
      title: 'Open Source Contributor of the Month',
      organization: 'GitHub',
      year: '2023',
      description: 'Top contributor to React ecosystem projects with 50+ merged pull requests',
      icon: '🌟',
      category: 'Community'
    },
    {
      title: 'Hackathon Winner - Best Innovation',
      organization: 'Seattle Tech Week',
      year: '2022',
      description: 'Built a real-time collaborative coding platform in 48 hours',
      icon: '🥇',
      category: 'Competition'
    },
    {
      title: 'Google Developer Expert',
      organization: 'Google',
      year: '2022',
      description: 'Recognized expert in Web Technologies and Google Cloud Platform',
      icon: '⭐',
      category: 'Recognition'
    },
    {
      title: 'Tech Talk Speaker',
      organization: 'React Seattle Meetup',
      year: '2023',
      description: 'Delivered presentation on "Advanced React Patterns" to 300+ developers',
      icon: '🎤',
      category: 'Speaking'
    },
    {
      title: 'Mentor of the Year',
      organization: 'Code for Social Good',
      year: '2022',
      description: 'Mentored 20+ junior developers, with 95% job placement success rate',
      icon: '👩‍🏫',
      category: 'Mentoring'
    },
    {
      title: 'Performance Excellence',
      organization: 'InnovateTech Studio',
      year: '2022',
      description: 'Exceeded all performance metrics and delivered projects 20% ahead of schedule',
      icon: '🚀',
      category: 'Professional'
    },
    {
      title: 'Open Source Project Creator',
      organization: 'Personal',
      year: '2021',
      description: 'Created "DevCat" - a VS Code extension with 10k+ downloads',
      icon: '💻',
      category: 'Personal'
    }
  ];

  const stats = [
    {
      number: '10k+',
      label: 'GitHub Stars',
      description: 'Across personal repositories',
      icon: '⭐'
    },
    {
      number: '50+',
      label: 'Conference Talks',
      description: 'At tech meetups and conferences',
      icon: '🎙️'
    },
    {
      number: '20+',
      label: 'Mentored Developers',
      description: 'Successfully placed in jobs',
      icon: '👥'
    },
    {
      number: '15+',
      label: 'Open Source',
      description: 'Active contributions',
      icon: '🔓'
    }
  ];

  const categories = ['All', 'Professional', 'Community', 'Competition', 'Recognition', 'Speaking', 'Mentoring', 'Personal'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredAchievements = activeCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  return (
    <section id="achievements" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones that reflect my commitment to excellence and community contribution
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAchievements.map((achievement, index) => (
            <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full mb-2">
                    {achievement.category}
                  </span>
                  <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                  <div className="text-purple-400 text-sm font-medium mb-1">{achievement.organization}</div>
                  <div className="text-gray-400 text-sm">{achievement.year}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Notable Projects Impact */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">🎯</span>
            Impact & Contributions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-xl font-bold text-blue-400 mb-1">5+</div>
              <div className="text-sm text-gray-300">Patents Filed</div>
            </div>
            <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700">
              <div className="text-2xl mb-2">📝</div>
              <div className="text-xl font-bold text-purple-400 mb-1">25+</div>
              <div className="text-sm text-gray-300">Technical Articles</div>
            </div>
            <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-xl font-bold text-pink-400 mb-1">10+</div>
              <div className="text-sm text-gray-300">Countries Reached</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-300 italic">
              "Success is not just about personal achievements, but about lifting others up and contributing to the tech community." 
              <span className="text-blue-400">- Thena_dev</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Achievements = Achievements;
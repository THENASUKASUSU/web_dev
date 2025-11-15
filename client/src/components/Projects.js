import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A dramatic web experience built with the MERN stack.',
    stack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Another theatrical project with a focus on user experience.',
    stack: ['React', 'Firebase', 'TailwindCSS'],
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-red-600 text-white text-xs font-bold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demo} className="text-red-500 hover:text-red-400">Demo</a>
                  <a href={project.github} className="text-red-500 hover:text-red-400">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

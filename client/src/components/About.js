import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img src="https://i.pravatar.cc/300" alt="Your Name" className="rounded-full mx-auto" />
        </div>
        <div className="md:w-2/3 md:pl-10">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I'm a passionate full-stack developer with a love for creating dramatic and engaging web experiences. I thrive on challenges and enjoy working with modern technologies to build beautiful and functional applications.
          </p>
          <h3 className="text-2xl font-bold mb-2">Skills</h3>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB</li>
            <li>TailwindCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

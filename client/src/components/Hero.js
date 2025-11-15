import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-black text-white">
      <div>
        <h1 className="text-6xl font-bold">Your Name</h1>
        <p className="text-2xl mt-4">Full Stack Developer | Building Dramatic Web Experiences</p>
        <button className="mt-8 px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;

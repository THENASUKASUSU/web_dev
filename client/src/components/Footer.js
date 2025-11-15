import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-red-500">GitHub</a>
          <a href="#" className="hover:text-red-500">LinkedIn</a>
          <a href="#" className="hover:text-red-500">Twitter</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

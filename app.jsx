import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkDependencies = () => {
      if (
        window.Header &&
        window.Hero &&
        window.About &&
        window.Skills &&
        window.Portfolio &&
        window.CryptoTool &&
        window.PhotoEditor &&
        window.Contact &&
        window.Footer &&
        window.Education &&
        window.Testimonials &&
        window.Achievements
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-gray-300 text-lg">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Programmer Cat Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 opacity-5 animate-float">
          <img 
            src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
            alt="" 
            className="w-full h-full object-contain rounded-full filter grayscale"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-80 h-80 opacity-3 animate-float" style={{ animationDelay: '3s' }}>
          <img 
            src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
            alt="" 
            className="w-full h-full object-contain rounded-full filter grayscale"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 opacity-4 animate-float" style={{ animationDelay: '6s' }}>
          <img 
            src="https://www.infinityg.ai/assets/user-upload/1763127829717-1001139267.jpg" 
            alt="" 
            className="w-full h-full object-contain rounded-full filter grayscale"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <window.Header />
        <window.Hero />
        <window.About />
        <window.Skills />
        <window.Education />
        <window.Portfolio />
        <window.Achievements />
        <window.CryptoTool />
        <window.PhotoEditor />
        <window.Testimonials />
        <window.Contact />
        <window.Footer />
      </div>
    </div>
  );
}

createRoot(document.getElementById('renderDiv')).render(<App />);
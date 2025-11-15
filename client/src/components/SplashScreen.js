import React from 'react';

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-red-500">
      <pre className="text-2xl font-mono">
        {`
          ____ ____ ____ ____ ____ ____ ____ ____ ____ ____
         ||G |||A |||B |||U |||R |||I |||K |||S |||T |||Y ||
         ||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||
         |/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|
        `}
      </pre>
    </div>
  );
};

export default SplashScreen;

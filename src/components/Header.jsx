import React from 'react';

const Header = () => {
  return (
    <header className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Waterproof <span className="text-yellow-400">Earphones</span>
        </h1>
        
        {/* Simple description */}
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          A520 Earphones - Clear sound, works with water, easy to use. 
          Good for gym, rain, everyday use.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Buy Now
          </button>
          <button className="border-2 border-gray-400 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all">
            See Demo
          </button>
        </div>
        
        {/* Trust message */}
        <p className="mt-8 text-sm text-gray-400">30 Days - Return if you don't like it</p>
      </div>
    </header>
  );
};

export default Header;
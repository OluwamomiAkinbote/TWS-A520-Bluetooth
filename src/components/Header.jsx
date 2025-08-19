'use client';
import React from 'react';

const Header = () => {
  const handleBuyNowClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
          ⚡ Nigeria's #1 Wireless Earbuds
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Studio-Grade Sound, <span className="text-yellow-400">Made for Your Hustle</span>
        </h1>
        
        {/* Simple description */}
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Crystal-clear audio, sweat-proof design, and all-day comfort—whether you’re in Lagos traffic, at the gym, or on the move.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Free Lagos Delivery
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            6 Months Warranty
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            30-Day Money Back
          </div>
        </div>
        
        {/* Action button */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={handleBuyNowClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-yellow-400/20"
          >
            Get Yours Today – Free Delivery
          </button>
        </div>

        {/* Price highlight */}
        <p className="text-lg text-yellow-400 font-semibold mb-4">
          🔥 Limited Time: Up to 33% OFF All Packages!
        </p>
        
        {/* Trust message */}
        <p className="text-sm text-gray-400">
          Join 10,000+ satisfied customers across Nigeria
        </p>
      </div>
    </header>
  );
};

export default Header;

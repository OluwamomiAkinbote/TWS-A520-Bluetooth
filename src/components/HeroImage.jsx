

import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* First Image Section */}
        <div className="flex flex-col space-y-6">
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
            <Image
              src="/images/Water-proof-design.png"
              alt="Water-resistant A520s headphones"
              fill
              className="object-cover"
              priority
              quality={100}
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.1) brightness(1.05)'
              }}
            />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Rain or Shine, Keep the Music Going
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Jam to your favorite playlist while rain pours down—just keep moving! 
              Our A520s are built tough to handle splashes and sweat, so nothing stops your soundtrack.
            </p>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="flex flex-col space-y-6">
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-green-200">
            <Image
              src="/images/listen-to-songs-design.png"
              alt="A520s headphones with crystal clear microphone"
              fill
              className="object-cover"
            />
            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
          </div>
          
          <div className="text-center lg:text-left px-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Crystal Clear Calls, Every Time
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Need to take a call? No worries! The built-in microphone makes sure 
              your voice comes through crystal clear, turning every conversation into a breeze.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroImage;
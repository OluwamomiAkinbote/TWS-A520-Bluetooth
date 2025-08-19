'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* First Image Section */}
        <div className={`flex flex-col space-y-8 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/20">
            <Image
              src="/images/Painless-Waterproof.png"
              alt="Water-resistant A520s headphones surviving rain and water exposure"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              quality={100}
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.15) brightness(1.1) saturate(1.1)'
              }}
            />
            {/* Water droplet effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10 pointer-events-none" />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <div className="inline-flex items-center bg-blue-900/30 px-3 py-1 rounded-full mb-4 border border-blue-500/30">
              <span className="h-2 w-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-300">IPX8 WATERPROOF</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              RAIN, SWEAT, OR SPLASHES — YOUR BEATS STAY PERFECT
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              With military-grade IPX8 protection, the A520s laugh in the face of moisture. Perfect for intense workouts, sudden downpours, or even accidental dunks. Your music never skips a beat.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-md text-sm">Swim-proof</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-md text-sm">Sweat-resistant</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-md text-sm">All-weather ready</span>
            </div>
          </div>
        </div>

        {/* Second Image Section */}
        <div className={`flex flex-col space-y-8 transition-all duration-700 ease-out delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl shadow-emerald-500/20">
            <Image
              src="/images/slide-image-2.jpeg"
              alt="A520s headphones with crystal clear microphone for professional calls"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              style={{
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
            {/* Voice wave effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-emerald-500/10 pointer-events-none" />
          </div>
          
          <div className="text-center lg:text-left px-2">
            <div className="inline-flex items-center bg-emerald-900/30 px-3 py-1 rounded-full mb-4 border border-emerald-500/30">
              <span className="h-2 w-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-300">VOICE ISOLATION TECH</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
              STUDIO-QUALITY CLARITY — HEARD EVERY WORD
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              Our advanced noise-cancelling microphones eliminate background noise, ensuring your voice comes through with stunning clarity. Perfect for calls, gaming, or recording content.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1 rounded-md text-sm">Noise cancellation</span>
              <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1 rounded-md text-sm">HD Voice</span>
              <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1 rounded-md text-sm">Wind resistant</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroImage;
import React from 'react';
import { Headphones, Volume2, Wifi, Droplets, Touchpad, Ear } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/image-1.jpg"
        >
          <source src="/images/Motion-Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            UNLEASH YOUR SOUND
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            The A520 Wireless - Where crystal clear audio meets uncompromising comfort
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <FeatureItem 
              icon={<Volume2 className="w-6 h-6" />} 
              title="HD Stereo Sound" 
              text="Crystal-clear audio with premium drivers"
            />
            <FeatureItem 
              icon={<Droplets className="w-6 h-6" />} 
              title="Sweat-Resistant" 
              text="Perfect for intense workouts"
            />
            <FeatureItem 
              icon={<Touchpad className="w-6 h-6" />} 
              title="Touch Controls" 
              text="Effortless music and call management"
            />
            <FeatureItem 
              icon={<Ear className="w-6 h-6" />} 
              title="Noise Isolation" 
              text="Immersive listening experience"
            />
            <FeatureItem 
              icon={<Wifi className="w-6 h-6" />} 
              title="Bluetooth 5.3" 
              text="Stable wireless connection"
            />
            <FeatureItem 
              icon={<Headphones className="w-6 h-6" />} 
              title="All-Day Comfort" 
              text="Ergonomic earplug design"
            />
          </div>

          {/* CTA */}
          <button className="mt-16 px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold rounded-full text-lg hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-3">
    <div className="text-amber-400 mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-amber-400">{title}</h3>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  </div>
);

export default Hero;
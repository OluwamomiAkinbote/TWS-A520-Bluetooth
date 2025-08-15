import React from 'react';
import { Volume2, Activity, Touchpad, Headphones, Bluetooth } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row items-center">
      {/* Video Section - Left Side */}
      <div className="lg:w-1/2 h-[60vh] lg:h-screen relative">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/image-10.png"
        >
          <source src="/images/Motion-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent lg:hidden"></div>
      </div>

      {/* Content Section - Right Side */}
      <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
            Sound That Moves You
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            The A520 wireless headphones deliver studio-quality sound with the freedom to move. 
            Built for your active lifestyle without compromising on audio.
          </p>

          <div className="space-y-5 mb-12">
            <FeatureItem 
              icon={<Volume2 className="text-amber-400" size={20} />}
              title="Premium Audio"
              text="HD stereo sound with deep bass and crisp highs"
            />
            <FeatureItem 
              icon={<Activity className="text-amber-400" size={20} />}
              title="Sweatproof"
              text="Workout-ready protection against sweat and rain"
            />
            <FeatureItem 
              icon={<Touchpad className="text-amber-400" size={20} />}
              title="Smart Touch"
              text="Intuitive controls for music and calls"
            />
            <FeatureItem 
              icon={<Headphones className="text-amber-400" size={20} />}
              title="All-Day Comfort"
              text="Ergonomic design that stays comfortable"
            />
            <FeatureItem 
              icon={<Bluetooth className="text-amber-400" size={20} />}
              title="Wireless Freedom"
              text="Bluetooth 5.3 with stable, long-range connection"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-amber-400">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

export default Hero;
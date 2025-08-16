'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const features = [
  { 
    img: '/images/image-1.png', 
    title: 'Bluetooth 5.3 Connectivity', 
    desc: 'Experience fast, stable, and reliable wireless connection to your phones, laptops, tablets, and other devices. Advanced Bluetooth technology ensures minimal latency and maximum compatibility across all your favorite gadgets.' 
  },
  { 
    img: '/images/slide-image-3.jpeg', 
    title: 'Intuitive Touch Controls', 
    desc: 'Effortlessly control your music and calls with simple tap gestures. Play, pause, skip tracks, adjust volume, or answer incoming calls without ever reaching for your phone. Smart touch sensors respond instantly to your commands.' 
  },
  { 
    img: '/images/image-design-for-sport.png', 
    title: 'Sweat & Weather Resistant', 
    desc: 'Built to withstand your active lifestyle with reliable sweat and moisture resistance. Perfect companion for workouts, jogging, or caught in light rain. Durable construction ensures long-lasting performance in various conditions.' 
  },
  { 
    img: '/images/slide-image-2.jpeg', 
    title: 'Crystal Clear Audio Quality', 
    desc: 'Enjoy crisp, balanced sound reproduction for all your entertainment needs. Whether streaming music, watching videos, or taking important calls, experience rich audio with clear highs and deep bass that brings your content to life.' 
  },
  { 
    img: '/images/slide-image-4.jpeg', 
    title: 'Portable Charging Solution', 
    desc: 'Never run out of power with the convenient charging case that extends your listening time significantly. Multiple recharge cycles keep your earbuds ready for extended use, while the modern USB-C port ensures fast and universal charging.' 
  },
  { 
    img: '/images/image-6.png', 
    title: 'Smart LED Battery Indicator', 
    desc: 'Stay informed about your battery status with the intelligent LED display system. Instantly check remaining power levels at a glance, so you always know when it\'s time to recharge and never get caught with dead earbuds.' 
  },
];

export default function Features() {
  return (
    <section className="relative w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 md:mb-12 text-center">
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={feature.title} className="bg-gradient-to-b from-neutral-900 to-black shadow-2xl overflow-hidden h-full">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full">
                <Image 
                  src={feature.img} 
                  alt={feature.title} 
                  fill
                  className="object-cover" 
                />
              </div>
              <div className="p-4 md:p-6 flex-1">
                <h3 className="font-semibold text-white text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
    </section>
  );
}
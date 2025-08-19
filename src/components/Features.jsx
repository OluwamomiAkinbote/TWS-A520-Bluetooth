'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircle, Headphones, Volume2, Wifi, Droplets, BatteryCharging } from 'lucide-react';

const features = [
  { 
    icon: <Wifi className="w-8 h-8 text-yellow-400" />,
    img: '/images/image-1.png', 
    title: 'Zero Dropouts Bluetooth 5.3', 
    highlights: [
      "No more audio cuts during calls",
      "10m stable connection range",
      "Pairs instantly to any device"
    ],
    desc: 'Crystal-clear calls and uninterrupted music - even in crowded Lagos markets or busy offices.' 
  },
  { 
    icon: <Volume2 className="w-8 h-8 text-yellow-400" />,
    img: '/images/slide-image-3.jpeg', 
    title: 'Studio-Quality Sound', 
    highlights: [
      "Deep bass for Afrobeats & hiphop",
      "Clear vocals for calls & podcasts",
      "No sound leakage (private listening)"
    ],
    desc: 'Hear every detail like you\'re in the recording studio - perfect for Burna Boy or Asake tracks.' 
  },
  { 
    icon: <Droplets className="w-8 h-8 text-yellow-400" />,
    img: '/images/image-design-for-sport.png', 
    title: 'Survival Mode', 
    highlights: [
      "Withstands Lagos downpours",
      "Sweatproof for intense workouts",
      "Dust-resistant for commuting"
    ],
    desc: 'From Ikeja traffic to VI gym sessions - these buds won\'t quit on you.' 
  },
  { 
    icon: <BatteryCharging className="w-8 h-8 text-yellow-400" />,
    img: '/images/slide-image-2.jpeg', 
    title: '50-Hour Marathon', 
    highlights: [
      "8hrs non-stop on single charge",
      "6 full recharges from case",
      "10min charge = 2hrs playback"
    ],
    desc: 'Lasts through 3 Lagos-to-Abuja flights without needing a charger.' 
  },
  { 
    icon: <Headphones className="w-8 h-8 text-yellow-400" />,
    img: '/images/slide-image-4.jpeg', 
    title: 'All-Day Comfort', 
    highlights: [
      "3 ear tip sizes included",
      "Light as a feather (4g each)",
      "No ear fatigue after hours"
    ],
    desc: 'Wear them from morning meetings to night outs without discomfort.' 
  },
  { 
    icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
    img: '/images/image-6.png', 
    title: 'Naira-Smart Value', 
    highlights: [
      "Saves you ₦10,000 vs AirPods",
      "6-month warranty",
      "Free replacement if damaged"
    ],
    desc: 'Premium features without the ridiculous price tag - finally!' 
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-16 bg-black">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-6 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            ⚡ WHY 10,247 NIGERIANS CHOSE A520
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            More Features Than <span className="text-yellow-400">Earbuds 2× The Price</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's everything you get with your ₦25,000 investment:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={feature.img} 
                  alt={feature.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/80 p-3 rounded-lg">
                  {feature.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-yellow-400 text-lg mb-4">{feature.desc}</p>
                
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { text: "Free Lagos Delivery", subtext: "Next-day dispatch" },
            { text: "6-Month Warranty", subtext: "No questions asked" },
            { text: "30-Day Returns", subtext: "Money-back guarantee" },
            { text: "1,000+ 5★ Reviews", subtext: "Verified purchases" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-yellow-400 font-bold text-lg">{item.text}</p>
              <p className="text-gray-400 text-sm">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import React from 'react';
import Image from 'next/image';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Adebayo Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    date: '2 days ago',
    review: 'These earbuds saved my life in Lagos traffic! The noise cancellation is so good I barely hear danfo horns. Battery lasted me from Ikeja to Victoria Island with 80% left. 10/10!',
    avatar: '/images/review-1.jpg',
    verified: true,
    highlight: 'Lagos Traffic Tested'
  },
  {
    name: 'Fatima Hassan',
    location: 'Abuja, FCT',
    rating: 5,
    date: '1 week ago',
    review: 'Chai! This one sweet me well. Better than my friend\'s AirPods wey cost 3x. Gym sessions no dey disturb am at all. Delivery reach my house for Abuja within 24 hours!',
    avatar: '/images/review-2.jpg',
    verified: true,
    highlight: 'Better Than AirPods'
  },
  {
    name: 'Chioma Ndukwe',
    location: 'Port Harcourt, Rivers',
    rating: 5,
    date: '3 days ago',
    review: 'The bass dey burst head! Perfect for Burna Boy and Wizkid. My husband jealous say I no dey hear when he dey call me. Ordered another one for himself immediately.',
    avatar: '/images/Artboard 2.png',
    verified: true,
    highlight: 'Afrobeats Approved'
  },
  {
    name: 'Emeka Okoro',
    location: 'Enugu, Nigeria',
    rating: 5,
    date: '5 days ago',
    review: 'As a business man, these have been game-changer for my calls. Customers no longer complain about background noise from my shop. The battery lasts through my 12-hour day.',
    avatar: '/images/Artboard 1.png',
    verified: true,
    highlight: 'Business Essential'
  },
  {
    name: 'Bisi Adeyemi',
    location: 'Ibadan, Oyo',
    rating: 5,
    date: '1 week ago',
    review: 'I use them for my morning runs and they never fall out! Survived heavy rain last Tuesday. The touch controls make it easy to change songs without stopping.',
    avatar: '/images/Artboard 2.png',
    verified: true,
    highlight: 'Fitness Companion'
  },
  {
    name: 'Tunde Alabi',
    location: 'Kano, Nigeria',
    rating: 5,
    date: '2 weeks ago',
    review: 'Ordered for my online classes and the audio quality is crystal clear. My lecturers say my contributions are now audible. The case charges fast with my power bank.',
    avatar: '/images/Artboard 3.png',
    verified: true,
    highlight: 'Student Favorite'
  }
];

const handleBuyNowClick = () => {
    const contactSection = document.getElementById('package');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
};

export default function CustomerReviews() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="relative w-full bg-black py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-6 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            ⭐ 10,247+ VERIFIED 5-STAR REVIEWS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-yellow-400">Nigerians Love</span> Their A520
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people across Nigeria's 36 states
          </p>
        </div>

        {/* Reviews Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-yellow-400/40" />
              </div>

              {/* Rating & Highlight */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-yellow-400 font-bold">{review.rating}.0</span>
                </div>
                <span className="bg-yellow-400/10 text-yellow-400 text-xs px-3 py-1 rounded-full">
                  {review.highlight}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-300 mb-4 leading-relaxed">
                "{review.review}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{review.date}</span>
                {review.verified && (
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { number: '10,247+', label: 'Happy Customers' },
            { number: '36', label: 'States Covered' },
            { number: '98%', label: 'Recommend to Friends' },
            { number: '24h', label: 'Avg Delivery Time' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Nigeria's Smartest Buyers
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Thousands of Nigerians have already upgraded their audio experience. 
            Don't be the last to enjoy studio-quality sound at ₦25,000.
          </p>
          <button
          onClick={handleBuyNowClick} 
          
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform">
    
            Get Your Pair Now - ₦25,000 Only
          </button>
        </div>
      </div>
    </section>
  );
}
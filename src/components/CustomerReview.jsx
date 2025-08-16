'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Adebayo Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    date: 'August 2025',
    review: 'Amazing sound quality! I use them daily for Lagos traffic and the battery life is incredible. Touch controls work perfectly. Best purchase this year!',
    avatar: '/images/review-1.jpg'
  },
  {
    name: 'Fatima Hassan',
    location: 'Abuja, FCT',
    rating: 5,
    date: 'July 2025',
    review: 'Chai! This one sweet me well. Better than expensive AirPods. Perfect for gym and calls. Delivery quick reach Abuja. I recommend am!',
    avatar: '/images/review-2.jpg'
  },
  {
    name: 'Chioma Ndukwe',
    location: 'Port Harcourt, Rivers',
    rating: 4,
    date: 'August 2025',
    review: 'Great value for money! Bass dey sweet and sound is very clear. I can use one side for calls while the other charges. My husband ordered his own.',
    avatar: '/images/review-3.jpg'
  }
];

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
    <section className="relative w-full bg-gradient-to-b from-neutral-950 to-black">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            What Customers Say
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
            Real reviews from satisfied customers across Nigeria
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl overflow-hidden"
            >
              {/* Customer Image */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-neutral-400">
                    {review.rating}.0
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed mb-4">
                  "{review.review}"
                </blockquote>

                {/* Customer Info */}
                <div className="mb-3">
                  <h4 className="font-semibold text-white text-base md:text-lg">
                    {review.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-xs md:text-sm text-neutral-400">
                    <span>{review.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{review.date}</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="inline-flex items-center gap-1 bg-green-900/30 text-green-400 px-2 py-1 text-xs">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Verified Purchase
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-neutral-400 text-sm md:text-base">
            Join thousands of satisfied customers across Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
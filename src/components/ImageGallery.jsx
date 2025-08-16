'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { id: 1, src: '/images/image-01.jpg', alt: 'TWS A520 Product View 1' },
  { id: 2, src: '/images/image-02.jpg', alt: 'TWS A520 Product View 2' },
  { id: 3, src: '/images/image-03.jpg', alt: 'TWS A520 Product View 3' },
  { id: 4, src: '/images/image-04.jpg', alt: 'TWS A520 Product View 4' },
  { id: 5, src: '/images/image-5.png', alt: 'TWS A520 Product View 5' },
  { id: 6, src: '/images/image-6.png', alt: 'TWS A520 Product View 6' }
];

export default function ImageGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current set of 3 images to display
  const getCurrentImages = () => {
    const current = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % images.length;
      current.push(images[index]);
    }
    return current;
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-black to-neutral-950">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Gallery Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {getCurrentImages().map((image, index) => (
              <div
                key={`${image.id}-${currentSlide}`}
                className="relative aspect-square overflow-hidden bg-neutral-900 shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors shadow-lg"
              aria-label="Previous images"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(images.length / 3) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i * 3)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 3) === i
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-neutral-600 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide set ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors shadow-lg"
              aria-label="Next images"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Individual Image Indicators */}
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index >= currentSlide && index < currentSlide + 3
                    ? 'bg-yellow-400'
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
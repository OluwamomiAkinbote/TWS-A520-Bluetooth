'use client';

import React, { useState } from 'react';
import { Volume2, Activity, Touchpad, Headphones, Bluetooth, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    { src: '/images/Artboard 5.png', alt: 'TWS-A520 Earbuds - Main View' },
    { src: '/images/Artboard 6.png', alt: 'TWS-A520 Earbuds - In Case' },
    { src: '/images/Artboard 7.png', alt: 'TWS-A520 Earbuds - Side Profile' },
    { src: '/images/Artboard 1.png', alt: 'TWS-A520 Earbuds - Side Profile' },
    { src: '/images/Artboard 2.png', alt: 'TWS-A520 Earbuds - Side Profile' },
    { src: '/images/Artboard 3.png', alt: 'TWS-A520 Earbuds - Side Profile' },
    { src: '/images/Artboard 4.png', alt: 'TWS-A520 Earbuds - Features' }
  ];

  const handleShopNowClick = () => {
    const contactSection = document.getElementById('package');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row items-center">
        {/* Image Gallery Section - Left Side */}
        <div className="lg:w-1/2 h-[60vh] lg:h-screen relative">
          {/* Main Image Display */}
          <div className="relative w-full h-full group">
            <img 
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={openLightbox}
            />
            
            {/* Gradient Overlay for mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent lg:hidden"></div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* View Full Size Indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer" onClick={openLightbox}>
              <Play className="inline w-4 h-4 mr-1" />
              View Full Size
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden transition-all border-2 ${
                  index === currentImageIndex 
                    ? 'border-amber-400 opacity-100' 
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
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
              <button 
                onClick={handleShopNowClick}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-all"
            >
              <X size={24} />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative">
              <img 
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation in Lightbox */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Lightbox Thumbnails */}
            <div className="flex justify-center space-x-3 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden transition-all border-2 ${
                    index === currentImageIndex 
                      ? 'border-amber-400 opacity-100' 
                      : 'border-white/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Image Info */}
            <div className="text-center mt-4 text-white">
              <p className="text-lg font-semibold">{images[currentImageIndex].alt}</p>
              <p className="text-gray-300 text-sm">{currentImageIndex + 1} of {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
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
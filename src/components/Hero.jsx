'use client';

import React, { useState, useEffect } from 'react';
import { 
  Volume2, Activity, Touchpad, Headphones, Bluetooth, 
  ChevronLeft, ChevronRight, Play, X, MessageCircle, 
  Zap, ShoppingBag, Clock, Users, ArrowRight
} from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  // WhatsApp order function
  const handleWhatsAppOrder = () => {
    const phoneNumber = "2348051230133"; // Your WhatsApp number
    const message = `Hello! I'm interested in the TWS-A520 Wireless Earbuds. Please send me pricing and availability information.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row items-center">
        {/* Image Gallery Section - Left Side */}
        <div className="lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-screen relative overflow-hidden">
          {/* Main Image Display */}
          <div className="relative w-full h-full group">
            <img 
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-contain lg:object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={openLightbox}
            />
            
            {/* Gradient Overlay - Responsive */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent lg:from-black/70 lg:to-transparent"></div>

            {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
            <button 
              onClick={prevImage}
              className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>

            {/* View Full Size Indicator - Hidden on smallest screens */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all cursor-pointer hidden xs:block" onClick={openLightbox}>
              <Play className="inline w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              View Full
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation - Responsive */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex space-x-1 sm:space-x-2 max-w-full overflow-x-auto pb-1 hide-scrollbar">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded overflow-hidden transition-all border-2 ${
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
        <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Sound That Moves You
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10">
              The A520 wireless headphones deliver studio-quality sound with the freedom to move. 
              Built for your active lifestyle without compromising on audio.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 md:mb-12">
              <FeatureItem 
                icon={<Volume2 className="text-amber-400" size={18} />}
                title="Premium Audio"
                text="HD stereo sound with deep bass and crisp highs"
              />
              <FeatureItem 
                icon={<Activity className="text-amber-400" size={18} />}
                title="Sweatproof"
                text="Workout-ready protection against sweat and rain"
              />
              <FeatureItem 
                icon={<Touchpad className="text-amber-400" size={18} />}
                title="Smart Touch"
                text="Intuitive controls for music and calls"
              />
              <FeatureItem 
                icon={<Headphones className="text-amber-400" size={18} />}
                title="All-Day Comfort"
                text="Ergonomic design that stays comfortable"
              />
              <FeatureItem 
                icon={<Bluetooth className="text-amber-400" size={18} />}
                title="Wireless Freedom"
                text="Bluetooth 5.3 with stable, long-range connection"
              />
            </div>

            {/* Primary/Secondary Button Approach */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={handleShopNowClick}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer text-sm sm:text-base flex-1 flex items-center justify-center gap-2 group"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                See Pricing & Buy Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleWhatsAppOrder}
                className="px-6 sm:px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-medium rounded-full transition-all cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quick Questions?
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-400 text-center">
              WhatsApp replies within 5 minutes
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-gray-400 text-xs sm:text-sm">
              <span className="flex items-center">
                <Users className="w-3 h-3 text-green-400 mr-1" />
                2,500+ Happy Customers
              </span>
              <span className="flex items-center">
                <ShoppingBag className="w-3 h-3 text-green-400 mr-1" />
                Free Delivery in Lagos
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 text-green-400 mr-1" />
                30-Day Returns
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-10 right-0 sm:top-2 sm:right-2 md:top-4 md:right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-all"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative">
              <img 
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation in Lightbox */}
              <button 
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
              >
                <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
              >
                <ChevronRight size={20} className="sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Lightbox Thumbnails */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4 px-2 overflow-x-auto hide-scrollbar">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded overflow-hidden transition-all border-2 ${
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
            <div className="text-center mt-3 sm:mt-4 text-white px-2">
              <p className="text-sm sm:text-base md:text-lg font-semibold">{images[currentImageIndex].alt}</p>
              <p className="text-gray-300 text-xs sm:text-sm">{currentImageIndex + 1} of {images.length}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 475px) {
          .xs\\:block {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

const FeatureItem = ({ icon, title, text }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="p-1 sm:p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-amber-400 text-sm sm:text-base">{title}</h3>
      <p className="text-gray-300 text-xs sm:text-sm">{text}</p>
    </div>
  </div>
);

export default Hero;
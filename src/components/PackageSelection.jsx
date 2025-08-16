'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Truck, RotateCcw, ShoppingCart } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Single Pack',
    quantity: '1 Piece',
    price: 25000,
    originalPrice: 35000,
    discount: '29% OFF',
    image: '/images/free-delivery.jpg',
    popular: false,
    features: [
      'Free Delivery Nationwide',
      'Easy Return Policy',
      '1 Year Warranty',
      'Original TWS A520'
    ]
  },
  {
    id: 2,
    title: 'Couple Pack',
    quantity: '2 Pieces',
    price: 48000,
    originalPrice: 70000,
    discount: '31% OFF',
    image: '/images/free-delivery.jpg',
    popular: true,
    features: [
      'Free Delivery Nationwide',
      'Easy Return Policy',
      '1 Year Warranty',
      'Original TWS A520',
      'Save ₦22,000'
    ]
  },
  {
    id: 3,
    title: 'Family Pack',
    quantity: '3 Pieces',
    price: 70000,
    originalPrice: 105000,
    discount: '33% OFF',
    image: '/images/free-delivery.jpg',
    popular: false,
    features: [
      'Free Delivery Nationwide',
      'Easy Return Policy',
      '1 Year Warranty',
      'Original TWS A520',
      'Save ₦35,000',
      'Best Value Deal'
    ]
  }
];

export default function PackageSelection() {
  const [selectedPackage, setSelectedPackage] = useState(2);

  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace('NGN', '₦');
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-black to-neutral-950">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Choose Your Package
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
            Select the perfect package for you, your family or friends
          </p>
        </div>

        {/* Top Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-green-900/20 text-green-400 p-4 border border-green-800/30">
            <Truck className="h-6 w-6" />
            <span className="font-medium text-sm md:text-base">Free Delivery Nationwide</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-blue-900/20 text-blue-400 p-4 border border-blue-800/30">
            <RotateCcw className="h-6 w-6" />
            <span className="font-medium text-sm md:text-base">Easy Return Policy</span>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl overflow-hidden transition-all duration-300 ${
                selectedPackage === pkg.id ? 'ring-2 ring-blue-500 scale-105' : ''
              } ${pkg.popular ? 'ring-2 ring-yellow-500' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 text-xs font-bold z-10">
                  MOST POPULAR
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-bold z-10">
                {pkg.discount}
              </div>

              {/* Package Image */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Package Info */}
                <div className="text-center mb-4">
                  <h3 className="font-bold text-white text-xl md:text-2xl mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base mb-3">
                    {pkg.quantity}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {formatPrice(pkg.price)}
                      </span>
                      <span className="text-lg text-neutral-500 line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    </div>
                    <p className="text-sm text-green-400 font-medium">
                      You save {formatPrice(pkg.originalPrice - pkg.price)}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span className="text-sm md:text-base text-neutral-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Select Button */}
                <button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full py-3 px-6 font-semibold transition-all duration-200 ${
                    selectedPackage === pkg.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-black hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {selectedPackage === pkg.id ? (
                      'Contact Us for This Package'
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        Select Package
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-neutral-400 text-sm md:text-base">
            All packages come with 1 year warranty and 30-day money back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
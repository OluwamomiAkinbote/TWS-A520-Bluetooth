'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Check, Truck, RotateCcw, ShoppingCart, Zap, Users, Crown, Star } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Solo Listener',
    quantity: '1 Earbud',
    price: 25000,
    originalPrice: 35000,
    discount: '29% OFF',
    image: '/images/Artboard 5.png',
    popular: false,
    savings: 10000,
    features: [
      'Perfect for personal use',
      'Free Lagos delivery',
      '6 months warranty',
      '30-day returns',
      'Save ₦10,000 instantly'
    ],
    badge: 'SELF CARE'
  },
  {
    id: 2,
    title: 'Power Couple',
    quantity: '2 Earbuds',
    price: 48000,
    originalPrice: 70000,
    discount: '31% OFF',
    image: '/images/image-02.jpg',
    popular: true,
    savings: 22000,
    features: [
      'Ideal for couples & besties',
      'Free nationwide delivery',
      '6 months warranty',
      '30-day returns',
      'Save ₦22,000 total',
      'Most popular choice'
    ],
    badge: 'MOST POPULAR'
  },
  {
    id: 3,
    title: 'Family Bundle',
    quantity: '3 Earbuds',
    price: 70000,
    originalPrice: 105000,
    discount: '33% OFF',
    image: '/images/image-2.png',
    popular: false,
    savings: 35000,
    features: [
      'Perfect for family & friends',
      'Free express delivery',
      '6 months warranty',
      '30-day returns',
      'Save ₦35,000 total',
      'Best value per unit'
    ],
    badge: 'BEST VALUE'
  }
];

export default function PackageSelection() {
  const [selectedPackage, setSelectedPackage] = useState(2);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
    setShowPopup(true);
    
    // Scroll to contact section after a brief delay
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 500);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price).replace('NGN', '₦');
  };

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage);

  return (
    <section className="relative w-full bg-black py-20" id='package'>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-6 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            ⚡ LIMITED TIME BUNDLE DISCOUNTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-yellow-400">Perfect Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Smart Nigerians save more when they buy together. Which package suits your lifestyle?
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-12 text-center">
          <p className="text-red-400 font-medium">
            ⏳ Flash Sale: These prices expire in <span className="font-bold">02:45:18</span>
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border-2 rounded-xl p-6 transition-all duration-300 ${
                selectedPackage === pkg.id 
                  ? 'border-yellow-400 bg-gradient-to-b from-yellow-400/5 to-transparent scale-105' 
                  : pkg.popular 
                  ? 'border-yellow-400 bg-gradient-to-b from-yellow-400/5 to-transparent' 
                  : 'border-gray-800 bg-gradient-to-b from-gray-900 to-black'
              }`}
            >
              {/* Badge */}
              <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                pkg.popular 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-800 text-white'
              }`}>
                {pkg.badge}
              </div>

              {/* Popular Crown */}
              {pkg.popular && (
                <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 fill-yellow-400" />
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                {pkg.discount}
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-gray-400">{pkg.quantity}</p>
              </div>

              {/* Image */}
              <div className="relative h-48 mb-6 flex items-center justify-center">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">{formatPrice(pkg.price)}</span>
                  <span className="text-lg text-gray-500 line-through">{formatPrice(pkg.originalPrice)}</span>
                </div>
                <div className="bg-green-400/10 text-green-400 text-sm px-3 py-1 rounded-full">
                  Save {formatPrice(pkg.savings)}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleSelectPackage(pkg.id)}
                className={`w-full py-4 rounded-lg font-bold transition-all duration-200 ${
                  selectedPackage === pkg.id
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : pkg.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {selectedPackage === pkg.id ? 'Selected ✓' : 'Choose Package'}
              </button>
            </div>
          ))}
        </div>

        {/* Selected Package Summary */}
        {showPopup && selectedPackageData && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-md w-full">
              <div className="text-center mb-4">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-white mb-2">Smart Choice!</h3>
                <p className="text-gray-400">You selected: {selectedPackageData.title}</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    {formatPrice(selectedPackageData.price)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">You save:</span>
                  <span className="text-green-400 font-bold">
                    {formatPrice(selectedPackageData.savings)}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm text-center mb-4">
                Scroll down to complete your order with secure payment
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300"
              >
                Continue to Order ↓
              </button>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: <Truck className="w-6 h-6" />, text: 'Free Delivery', subtext: 'Lagos & Nationwide' },
            { icon: <RotateCcw className="w-6 h-6" />, text: '30-Day Returns', subtext: 'No questions asked' },
            { icon: <Zap className="w-6 h-6" />, text: '6-Month Warranty', subtext: 'Free replacements' },
            { icon: <Users className="w-6 h-6" />, text: '10,247+ Sold', subtext: 'Verified customers' }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-yellow-400 mb-2 flex justify-center">{item.icon}</div>
              <p className="text-white font-bold">{item.text}</p>
              <p className="text-gray-400 text-sm">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
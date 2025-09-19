'use client';

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, MessageSquare, MapPin, Package, User, Send } from 'lucide-react';

const packages = [
  { id: 1, name: 'Single Pack - ₦25,000 (1 Piece)' },
  { id: 2, name: 'Couple Pack - ₦48,000 (2 Pieces)' },
  { id: 3, name: 'Family Pack - ₦70,000 (3 Pieces)' }
];

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzvwlak");
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({});

  // Helper function to extract price from package selection
  const getPackagePrice = (pkg) => {
    if (!pkg) return 0;

    const priceMatch = pkg.match(/₦(\d+,\d+|\d+)/);
    if (priceMatch) {
      return parseInt(priceMatch[1].replace(/,/g, ''), 10);
    }

    return 0;
  };

  // Track Facebook Pixel Purchase event on successful submission
  useEffect(() => {
    if (state.succeeded) {
      // Fire enhanced Purchase event
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Purchase', {
          value: getPackagePrice(selectedPackage),
          currency: 'NGN',
          content_name: selectedPackage,
          content_type: 'product'
        });
      }

      // Inject raw fbq('track', 'Purchase') script (as extra)
      const script = document.createElement("script");
      script.innerHTML = `fbq('track', 'Purchase');`;
      document.body.appendChild(script);
    }
  }, [state.succeeded, selectedPackage]);

  if (state.succeeded) {
    return (
      <section id="contact" className="relative w-full bg-gradient-to-b from-neutral-950 to-black">
        <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 md:p-12 shadow-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-base md:text-lg text-neutral-300 mb-6">
                Your order has been received successfully. We'll contact you shortly to confirm your delivery details.
              </p>
              <p className="text-sm text-neutral-400">
                Expect a call within 24 hours for order confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-neutral-950 to-black">
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Order Your TWS Earbuds
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-neutral-400 mb-2">
              Fill the form below to place your order
            </p>
            <p className="text-sm md:text-base text-yellow-400 font-medium">
              📍 Lagos Delivery Only
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 md:p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-white font-medium mb-3">
                  <User className="h-4 w-4" />
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Phone Numbers Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone 1 */}
                <div>
                  <label htmlFor="phone1" className="flex items-center gap-2 text-white font-medium mb-3">
                    <Phone className="h-4 w-4" />
                    Phone Number *
                  </label>
                  <input
                    id="phone1"
                    type="tel"
                    name="phone1"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="080XXXXXXXX"
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone1"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Phone 2 (WhatsApp) */}
                <div>
                  <label htmlFor="phone2" className="flex items-center gap-2 text-white font-medium mb-3">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Number *
                  </label>
                  <input
                    id="phone2"
                    type="tel"
                    name="phone2"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="080XXXXXXXX"
                  />
                  <ValidationError 
                    prefix="WhatsApp" 
                    field="phone2"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="flex items-center gap-2 text-white font-medium mb-3">
                  <MapPin className="h-4 w-4" />
                  Delivery Address in Lagos *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-vertical"
                  placeholder="Enter your complete address within Lagos (e.g., 123 Allen Avenue, Ikeja, Lagos)"
                />
                <ValidationError 
                  prefix="Address" 
                  field="address"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Package Selection */}
              <div>
                <label htmlFor="package" className="flex items-center gap-2 text-white font-medium mb-3">
                  <Package className="h-4 w-4" />
                  Select Package *
                </label>
                <select
                  id="package"
                  name="package"
                  required
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="" className="text-neutral-400">Choose your package</option>
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.name} className="text-white">
                      {pkg.name}
                    </option>
                  ))}
                </select>
                <ValidationError 
                  prefix="Package" 
                  field="package"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-white text-black font-semibold py-4 px-6 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    {state.submitting ? 'Submitting Order...' : 'Submit Order'}
                  </div>
                </button>
              </div>

              {/* Form Note */}
              <div className="text-center pt-4">
                <p className="text-xs md:text-sm text-neutral-400">
                  By submitting this form, you agree to our terms and conditions. 
                  We'll contact you within 24 hours to confirm your order.
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-neutral-900/50 p-4 text-center">
              <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Quick Response</p>
              <p className="text-neutral-400 text-sm">We call within 24 hours</p>
            </div>
            <div className="bg-neutral-900/50 p-4 text-center">
              <MapPin className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Lagos Only</p>
              <p className="text-neutral-400 text-sm">Free delivery in Lagos</p>
            </div>
            <div className="bg-neutral-900/50 p-4 text-center">
              <Package className="h-6 w-6 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Secure Order</p>
              <p className="text-neutral-400 text-sm">Your details are safe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return <ContactForm />;
}

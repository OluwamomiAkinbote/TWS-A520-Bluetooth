'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone, Headphones, Truck, Shield, CheckCircle, Droplets, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleWhatsAppContact = () => {
    const message = "Hello! I need support with my TWS-A520 earbuds.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348051230133?text=${encodedMessage}`, '_blank');
  };

  const faqs = [
    {
      question: "How long does delivery take in Nigeria?",
      answer: "We offer FREE delivery within 24-48 hours to Lagos and 2-3 working days to other states via trusted dispatch riders. You'll get tracking details immediately after dispatch for peace of mind.",
      icon: <Truck className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "Are these compatible with both iPhone and Android?",
      answer: "Absolutely! The TWS A520 works seamlessly with all Bluetooth devices including iPhones (iOS 10+), Samsung Galaxy, Tecno, Infinix, and laptops. Auto-pairs instantly when you open the case.",
      icon: <Smartphone className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "What if the earbuds stop working?",
      answer: (
        <div>
          <p className="mb-3">Your purchase comes with a 6-month warranty covering manufacturing defects. We'll replace faulty units immediately - no lengthy repair processes.</p>
          <button 
            onClick={handleWhatsAppContact}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contact us on WhatsApp
          </button>
        </div>
      ),
      icon: <Shield className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "How's the battery life during calls?",
      answer: "You get 5 hours of continuous call time (longer than most competitors). The case provides 4 additional full charges, giving you 25+ total call hours - perfect for business owners.",
      icon: <Headphones className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "Can I return if I don't like them?",
      answer: "Yes! We offer a 30-day return policy. If you're unsatisfied, you can either return them for a refund or exchange for related products in our store. Note: If you return without ordering anything else, delivery charges will be deducted from your refund.",
      icon: <CheckCircle className="w-5 h-5 text-yellow-400" />
    },
    {
      question: "Do they work for gym workouts?",
      answer: "Designed for active Nigerians! The IPX5 rating means they withstand sweat, humidity, and accidental water splashes. The ergonomic design stays secure even during burpees or running.",
      icon: <Droplets className="w-5 h-5 text-yellow-400" />
    }
  ];

  const handleGetYoursNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">Nigerian Buyers</span> Ask...
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to know before ordering
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-yellow-400/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex items-center justify-between w-full p-6 text-left transition-colors duration-200 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-3 rounded-lg border border-yellow-400/30">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400 transform transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400 transform transition-transform duration-200" />
                  )}
                </div>
              </button>

              {activeIndex === index && (
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border-t border-gray-700">
                  <div className="p-6 pt-4">
                    <div className="pl-16 text-gray-300 leading-relaxed">
                      {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Minimalistic CTA Card */}
        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Still Hesitating?
          </h3>
          <p className="text-gray-300 mb-4">
            30-day risk-free trial. If not perfect, return or exchange hassle-free.
          </p>
          <button 
            onClick={handleGetYoursNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Get Yours Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
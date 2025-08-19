'use client'

import React, { useState } from 'react';
import { X, MessageCircle, Headphones, ShoppingCart, Info, DollarSign } from 'lucide-react';

const WhatsAppContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleWidget = () => setIsOpen(!isOpen);
  const closeWidget = () => setIsOpen(false);
  const hideWidget = () => setIsVisible(false);

  const whatsappNumber = '2348051230133';

  const tws520Inquiries = [
    {
      title: 'Check Price & Availability',
      icon: <DollarSign className="w-5 h-5" />,
      message: 'Hello! I\'m interested in the TWS-A520 Bluetooth earbuds. What\'s the current price and availability?',
      description: 'Get current pricing info',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Product Specifications',
      icon: <Info className="w-5 h-5" />,
      message: 'Hi! Can you tell me more about the TWS-A520 features and specifications? Battery life, sound quality, etc.',
      description: 'Learn about features',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Place Order',
      icon: <ShoppingCart className="w-5 h-5" />,
      message: 'Hello! I want to purchase the TWS-A520 Bluetooth earbuds. How can I place an order?',
      description: 'Ready to buy now',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Ask Question',
      icon: <MessageCircle className="w-5 h-5" />,
      message: 'Hi! I have some questions about the TWS-A520 earbuds. Can you help me?',
      description: 'Custom inquiry',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    closeWidget();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded WhatsApp Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-green-200 overflow-hidden transform transition-all duration-300 ease-out animate-in slide-in-from-right max-w-[90vw]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 relative">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold">TWS-A520 Earbuds</h3>
                <p className="text-green-100 text-sm">Premium Bluetooth Experience</p>
              </div>
            </div>
            <button
              onClick={closeWidget}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Info Banner */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 border-b border-green-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800">TWS-A520 Bluetooth Earbuds</h4>
                <p className="text-sm text-green-600">High-quality wireless audio</p>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Options */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            <p className="text-sm text-gray-600 mb-4">How can we help you with the TWS-A520?</p>
            
            {tws520Inquiries.map((inquiry, index) => (
              <button
                key={index}
                onClick={() => sendWhatsAppMessage(inquiry.message)}
                className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 transition-all duration-200 transform hover:scale-[1.02] text-left group"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${inquiry.color}`}>
                  {inquiry.icon}
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900 text-sm">{inquiry.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{inquiry.description}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>WhatsApp Support</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleWidget}
        className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group overflow-hidden"
      >
        {isOpen ? (
          <X className="w-7 h-7 transition-transform duration-200 group-hover:scale-110 relative z-10" />
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <MessageCircle className="w-6 h-6 mb-0.5" />
            <div className="text-[8px] font-bold leading-none">MESSAGE</div>
          </div>
        )}

        {/* Pulse animation */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
          </>
        )}

        {/* New arrival badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold animate-bounce">
            NEW
          </div>
        )}

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isOpen ? 'Close' : 'TWS-A520 Earbuds - Ask anything!'}
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>

      {/* Floating product preview */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Headphones className="w-4 h-4 text-green-600" />
            <div className="text-sm text-gray-800 font-semibold">TWS-A520 Earbuds</div>
          </div>
          <div className="text-xs text-gray-600">💰 Check price & availability</div>
          <div className="text-xs text-gray-600">📋 View specifications</div>
          <div className="text-xs text-gray-600">🛒 Place your order</div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppContactWidget;
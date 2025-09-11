'use client'

import React, { useState } from 'react';
import { X, MessageCircle, Headphones, ShoppingCart, DollarSign } from 'lucide-react';

const WhatsAppContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleWidget = () => setIsOpen(!isOpen);
  const closeWidget = () => setIsOpen(false);
  const hideWidget = () => setIsVisible(false);

  const whatsappNumber = '2348051230133';

  // Reordered inquiries as requested
  const tws520Inquiries = [
    {
      title: 'Order Now',
      icon: <ShoppingCart className="w-5 h-5" />,
      message: 'Hello! I want to purchase the TWS-A520 Bluetooth earbuds. How can I place an order?',
      description: 'Ready to buy',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Price & Availability',
      icon: <DollarSign className="w-5 h-5" />,
      message: 'Hello! I\'m interested in the TWS-A520 Bluetooth earbuds. What\'s the current price and availability?',
      description: 'Check pricing info',
      color: 'bg-green-100 text-green-700'
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
    <div className="fixed right-2 sm:right-6 z-50" style={{ bottom: '20%', transform: 'translateY(-50%)' }}>
      {/* Expanded WhatsApp Panel - Responsive design */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-80 sm:w-80 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-green-200 overflow-hidden transform transition-all duration-300 ease-out animate-in slide-in-from-right max-w-[85vw] sm:max-w-[90vw] max-h-[55vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 sm:p-4 relative">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-md font-bold">TWS-A520 Earbuds</h3>
                <p className="text-green-100 text-xs">Premium Bluetooth Experience</p>
              </div>
            </div>
            <button
              onClick={closeWidget}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Quick Inquiry Options */}
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(55vh - 120px)' }}>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">How can we help you?</p>
            
            {tws520Inquiries.map((inquiry, index) => (
              <button
                key={index}
                onClick={() => sendWhatsAppMessage(inquiry.message)}
                className="w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 transition-all duration-200 text-left group hover:shadow-sm"
              >
                <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${inquiry.color}`}>
                  {inquiry.icon}
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900 text-xs sm:text-sm">{inquiry.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{inquiry.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-2 sm:p-3 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center space-x-1">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="hidden sm:inline">WhatsApp Support</span>
                <span className="sm:hidden">WhatsApp</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button - Clean and simple */}
      <button
        onClick={toggleWidget}
        className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group overflow-hidden"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <div className="flex flex-col items-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5" />
            <div className="text-[6px] sm:text-[7px] font-bold leading-none">MESSAGE</div>
          </div>
        )}

        {/* Pulse animation */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
          </>
        )}

        {/* Tooltip */}
        <div className="absolute left-full ml-2 sm:ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isOpen ? 'Close' : 'TWS-A520 Earbuds'}
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppContactWidget;
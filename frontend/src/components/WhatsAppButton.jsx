import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { mockData } from '../mock';

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about AKJ Builders' services.");
    const whatsappUrl = `https://wa.me/${mockData.company.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-full right-0 mb-2 bg-white text-[#50535B] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-200">
          <p className="font-semibold text-sm">Chat with us on WhatsApp!</p>
          <div className="absolute top-full right-4 border-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse"
      >
        <MessageCircle size={28} />
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppButton;
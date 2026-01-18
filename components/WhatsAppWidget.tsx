import React from 'react';
import { PHONE_NUMBER } from '../constants';

const WhatsAppWidget: React.FC = () => {
  const handleClick = () => {
    const message = "Hi, I'd like to make a reservation or inquire about the menu.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse group"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="currentColor"
        className="fill-current"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c.93.576 1.671.921 2.809.921 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.766-5.768zm0 13.065c-2.037 0-3.799-1.053-4.887-2.67l-3.385.888.905-3.296c-1.282-1.282-2.067-2.924-2.068-4.755 0-4.103 3.337-7.44 7.44-7.44 4.102 0 7.439 3.337 7.439 7.44s-3.336 7.439-7.439 7.439z"/>
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-white text-dark-900 px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppWidget;
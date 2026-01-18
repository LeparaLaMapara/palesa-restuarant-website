import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-dark-900 via-dark-900/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-gold-500 font-sans tracking-[0.3em] text-sm md:text-base uppercase mb-4 animate-fade-in-up">
          Est. 2024
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          Taste the <span className="text-gold-500 italic font-serif">Luxury</span>
        </h1>
        <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
          Experience an unforgettable culinary journey where traditional flavors meet modern elegance in the heart of the city.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="#reservation" 
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold tracking-widest transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-gold-500/20"
          >
            BOOK A TABLE
          </a>
          <a 
            href="#menu" 
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-dark-900 font-bold tracking-widest transition-all transform hover:-translate-y-1"
          >
            VIEW MENU
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#menu" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-gold-500 transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
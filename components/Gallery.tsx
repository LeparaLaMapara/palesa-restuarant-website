import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Interior' | 'Events'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGallery = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-dark-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-6">
           <span className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-2 block animate-fade-in-up">Visual Journey</span>
           <h1 className="font-display text-4xl md:text-6xl text-white">Gallery & Films</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <div className="flex justify-center mb-12 flex-wrap gap-6">
            {['All', 'Food', 'Interior', 'Events'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 pb-2 ${
                  filter === cat 
                    ? 'text-gold-600 font-bold border-b-2 border-gold-600' 
                    : 'text-gray-400 hover:text-dark-900 border-b-2 border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                className="relative group overflow-hidden cursor-pointer bg-gray-100 rounded-sm shadow-md"
              >
                {item.type === 'video' ? (
                   <div className="w-full h-full relative group">
                     <iframe 
                        width="100%" 
                        height="100%" 
                        src={item.url} 
                        title={item.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full object-cover"
                     ></iframe>
                     {/* Overlay to prevent interaction until clicked (optional, mostly for style) */}
                     <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                   </div>
                ) : (
                  <>
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-gold-500 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</span>
                      <h3 className="text-white font-display text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
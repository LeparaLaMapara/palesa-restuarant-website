import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'Starters' | 'Mains' | 'Desserts'>('Starters');

  const categories = ['Starters', 'Mains', 'Desserts'];
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-2">Discover</h4>
          <h2 className="font-display text-4xl md:text-5xl text-dark-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
                activeCategory === cat 
                  ? 'border-gold-500 text-dark-900 font-bold' 
                  : 'border-transparent text-gray-500 hover:text-gold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Menu Items List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white p-4 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex gap-4"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-display text-lg text-dark-900 group-hover:text-gold-600 transition-colors">{item.name}</h3>
                      <span className="font-bold text-gold-600">R{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm line-clamp-2">{item.description}</p>
                  </div>
                  
                  <div className="mt-3 flex justify-end">
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-dark-900 hover:text-gold-600 transition-colors"
                    >
                      Add to Cart <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Image (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[500px]">
             <div className="sticky top-24 h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={filteredItems[0]?.image || 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1'} 
                  alt="Featured" 
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <h3 className="font-display text-2xl mb-2">Chef's Recommendation</h3>
                  <p className="font-sans text-sm text-gray-300">Try our signature {activeCategory.toLowerCase()}, crafted with passion.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuSection;
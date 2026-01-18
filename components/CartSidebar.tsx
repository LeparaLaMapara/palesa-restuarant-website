import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-dark-900 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold-500" />
            <h2 className="font-display text-xl tracking-wide">Your Order</h2>
          </div>
          <button onClick={onClose} className="hover:text-gold-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Your cart is empty.</p>
              <button onClick={onClose} className="mt-4 text-gold-600 font-bold text-sm uppercase tracking-wide">
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display text-dark-900">{item.name}</h3>
                    <p className="font-bold text-gold-600">R{item.price * item.quantity}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">R{item.price} each</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-gray-100 w-max px-2 py-1 rounded-sm">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="text-gray-600 hover:text-dark-900"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="text-gray-600 hover:text-dark-900"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 font-sans">Subtotal</span>
              <span className="font-display text-2xl font-bold text-dark-900">R{total}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold tracking-widest uppercase transition-colors shadow-lg"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
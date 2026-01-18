import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReservationForm from './components/ReservationForm';
import Gallery from './components/Gallery';
import CartSidebar from './components/CartSidebar';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';
import { PHONE_NUMBER } from './constants';

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const HomePage: React.FC<{ onAddToCart: (item: MenuItem) => void }> = ({ onAddToCart }) => (
  <>
    <Hero />
    <MenuSection onAddToCart={onAddToCart} />
    <ReservationForm />
  </>
);

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart Logic
  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const checkout = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cartItems.map(i => `${i.quantity}x ${i.name}`).join('%0A');
    const message = `*New Online Order*%0A%0AItems:%0A${orderDetails}%0A%0ATotal: R${total}%0A%0AI would like to place this order for collection.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen bg-gray-50 text-dark-900 font-sans">
        <Header 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)}
          onMobileMenuToggle={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onCheckout={checkout}
        />

        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
};

export default App;
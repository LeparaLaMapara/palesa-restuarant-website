import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND} from '../constants';


interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMobileMenuToggle: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onMobileMenuToggle, isMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force solid background if not on home page
  const isHome = location.pathname === '/';
  const headerClass = !isHome || scrolled ? 'bg-dark-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6';

  const navLinks = [
    { name: 'Menu', to: '/#menu', type: 'hash' },
    { name: 'Reservation', to: '/#reservation', type: 'hash' },
    { name: 'Gallery', to: '/gallery', type: 'page' },
    { name: 'Contact', to: '/#footer', type: 'hash' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${headerClass}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-white tracking-wider">
          {BRAND.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = link.type === 'page' && location.pathname === link.to;
            return (
              <Link 
                key={link.name} 
                to={link.to}
                className={`text-sm font-sans tracking-widest transition-colors uppercase ${isActive ? 'text-gold-500 font-bold' : 'text-white/80 hover:text-gold-500'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
            
          {/* Cart Icon */}
          <button 
            onClick={onCartClick} 
            className="relative text-white hover:text-gold-500 transition-transform hover:scale-110"
            aria-label="Open Cart"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-dark-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* CTA Button (Desktop) */}
          <Link 
            to="/#reservation"
            className="hidden md:inline-block px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 rounded-sm font-sans text-sm tracking-wide font-medium"
          >
            RESERVE A TABLE
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-gold-500"
            onClick={() => onMobileMenuToggle(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-dark-900/98 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center space-y-8`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.to}
            onClick={() => onMobileMenuToggle(false)}
            className="font-display text-3xl text-white hover:text-gold-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
         <Link 
            to="/#reservation"
            onClick={() => onMobileMenuToggle(false)}
            className="mt-8 px-8 py-3 bg-gold-500 text-dark-900 font-bold tracking-wider rounded-sm"
          >
            RESERVE NOW
          </Link>
      </div>
    </header>
  );
};

export default Header;
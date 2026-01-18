import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import {  SOCIAL_LINKS , BRAND} from '../constants';


const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark-900 pt-20 pb-10 border-t border-white/5 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-white font-bold tracking-wider">{BRAND.name}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {BRAND.tagline}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Reservation', 'Gallery', 'Gift Cards'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold-500" />
                {SOCIAL_LINKS.address}
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-gold-500" />
                {SOCIAL_LINKS.phone}
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-gold-500" />
                {SOCIAL_LINKS.email}
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-display text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">10:00 - 21:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
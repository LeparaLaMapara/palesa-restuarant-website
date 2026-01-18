import React, { useState } from 'react';
import { Calendar, Users, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { ReservationData } from '../types';
import { PHONE_NUMBER } from '../constants';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2,
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API.
    // For this demo, we'll format a WhatsApp message.
    
    const message = `*New Reservation Request*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AGuests: ${formData.guests}%0ARequest: ${formData.requests}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="reservation" className="py-24 relative bg-dark-900 text-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h4 className="text-gold-500 tracking-widest uppercase text-sm font-bold mb-2">Book Your Table</h4>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Reservation</h2>
            <p className="text-gray-400 font-sans max-w-lg mx-auto">
              Secure your spot for an evening of elegance. For groups larger than 10, please contact us directly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-gold-500 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm text-gold-500 uppercase tracking-wide">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors"
                  placeholder="+27..."
                />
              </div>

              {/* Date */}
              <div className="space-y-2 relative">
                <label className="text-sm text-gold-500 uppercase tracking-wide flex items-center gap-2">
                  <Calendar size={14} /> Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors [color-scheme:dark]"
                />
              </div>

              {/* Time & Guests */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <label className="text-sm text-gold-500 uppercase tracking-wide flex items-center gap-2">
                    <Clock size={14} /> Time
                  </label>
                  <select 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors [&>option]:bg-dark-900"
                  >
                    {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gold-500 uppercase tracking-wide flex items-center gap-2">
                    <Users size={14} /> Guests
                  </label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors [&>option]:bg-dark-900"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} People</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm text-gold-500 uppercase tracking-wide flex items-center gap-2">
                  <MessageSquare size={14} /> Special Requests
                </label>
                <textarea 
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-gold-500 py-2 text-white outline-none transition-colors resize-none"
                  placeholder="Allergies, special occasions..."
                ></textarea>
              </div>

            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold tracking-[0.2em] uppercase transition-all duration-300 transform hover:scale-[1.01] shadow-lg"
            >
              Book Now via WhatsApp
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
import React from 'react';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-end pb-16 justify-center text-center text-white px-4">
          <div className="max-w-4xl mb-4">
            <h1 className="text-6xl md:text-7xl font-playfair font-normal mb-6 drop-shadow-lg">
              Der Europäische Hof
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-lg">
              #1 auf Tripadvisor in Heidelberg
            </p>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
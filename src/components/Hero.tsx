import React from 'react';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/EHH-fuer-Header.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-end pb-16 justify-center text-center text-white px-4">
          <div className="max-w-4xl mb-4">
            <h1 className="text-6xl md:text-7xl font-playfair font-normal mb-6 drop-shadow-lg">
              Der Europäische Hof Heidelberg
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

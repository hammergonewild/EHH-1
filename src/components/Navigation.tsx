import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MapPin, Image, Menu, Mail, Navigation2 } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        {/* Info Bar */}
        <div className="fixed w-full top-0 z-50 bg-hotel-gold text-white h-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-full">
              <div className="flex space-x-6 text-sm">
                <a href="tel:+496221515-0" className="hover:text-white/80 transition-colors flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5" />
                  <span>+49 6221 515-0</span>
                </a>
                <a href="mailto:info@europaeischerhof.com" className="hover:text-white/80 transition-colors flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5" />
                  <span>info@europaeischerhof.com</span>
                </a>
                <a 
                  href="https://www.google.com/maps/dir//Europäischer+Hof+Heidelberg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors flex items-center space-x-2"
                >
                  <Navigation2 className="h-3.5 w-3.5" />
                  <span>Anfahrt</span>
                </a>
                <a href="#gallery" className="hover:text-white/80 transition-colors flex items-center space-x-2">
                  <Image className="h-3.5 w-3.5" />
                  <span>Bilder-Galerie</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`fixed w-full z-40 transition-all duration-300 top-8 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[100px]">
              <div className="flex items-center">
                <img 
                  src={isScrolled ? "/logos/logo-gold.png" : "/logos/logo-white.png"}
                  alt="Der Europäische Hof"
                  className="h-[100px] w-auto"
                />
              </div>

              <div className="flex items-center space-x-8">
                <div className={`flex space-x-8 text-base font-medium ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  <div className="relative group">
                    <a href="#unterkunft" className="hover:text-hotel-gold">Zimmer & Suiten</a>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                      <a href="#zimmer" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Zimmer & Suiten</a>
                      <a href="#arrangements" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Arrangements</a>
                      <a href="#heidelberg" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Heidelberg Special</a>
                      <a href="#luxus" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Luxus verschenken</a>
                    </div>
                  </div>
                  <div className="relative group">
                    <a href="#kulinarik" className="hover:text-hotel-gold">Kulinarik</a>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                      <a href="#restaurant" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Kurfürsten Stube (Michelin Star)</a>
                      <a href="#breakfast" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Frühstücksbuffet</a>
                      <a href="#specials" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Kulinarik-Specials</a>
                      <a href="#genuss" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Genuss verschenken</a>
                    </div>
                  </div>
                  <a href="#events" className="hover:text-hotel-gold">Events</a>
                  <div className="relative group">
                    <a href="#panorama-spa" className="hover:text-hotel-gold">Panorama Spa</a>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                      <a href="#pool" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Pool</a>
                      <a href="#gym" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Gym</a>
                      <a href="#sundeck" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Sonnendeck</a>
                      <a href="#sauna" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Sauna & Dampfbad</a>
                      <a href="#massage" className="block px-4 py-2 text-gray-800 hover:bg-amber-50">Massage & Wellness</a>
                    </div>
                  </div>
                  <a href="#faq" className="hover:text-hotel-gold">FAQ</a>
                </div>
                <button className="px-6 py-2 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-colors">
                  Reservieren
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-black/30 backdrop-blur-sm'
        }`}>
          {/* Logo Area */}
          <div className="flex justify-center items-center h-[100px]">
            <img 
              src={isScrolled ? "/logos/logo-gold.png" : "/logos/logo-white.png"}
              alt="Der Europäische Hof"
              className="h-[100px] w-auto"
            />
          </div>

          {/* Mobile Icon Bar */}
          <div className="w-full">
            <div className="grid grid-cols-5 h-16">
              <a href="#book" className="flex flex-col items-center justify-center text-center">
                <Calendar className={`h-6 w-6 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`} />
                <span className={`text-xs mt-1 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`}>Buchen</span>
              </a>
              <a href="tel:+496221515-0" className="flex flex-col items-center justify-center text-center">
                <Phone className={`h-6 w-6 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`} />
                <span className={`text-xs mt-1 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`}>Anrufen</span>
              </a>
              <a href="#route" className="flex flex-col items-center justify-center text-center">
                <MapPin className={`h-6 w-6 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`} />
                <span className={`text-xs mt-1 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`}>Route</span>
              </a>
              <a href="#gallery" className="flex flex-col items-center justify-center text-center">
                <Image className={`h-6 w-6 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`} />
                <span className={`text-xs mt-1 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`}>Bilder</span>
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col items-center justify-center text-center"
              >
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`} />
                <span className={`text-xs mt-1 ${isScrolled ? 'text-hotel-gold' : 'text-white'}`}>Menü</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-36">
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Zimmer & Suiten</div>
                <div className="pl-4 space-y-2">
                  <a href="#zimmer" className="block text-gray-600">Zimmer & Suiten</a>
                  <a href="#arrangements" className="block text-gray-600">Arrangements</a>
                  <a href="#heidelberg" className="block text-gray-600">Heidelberg Special</a>
                  <a href="#luxus" className="block text-gray-600">Luxus verschenken</a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Kulinarik</div>
                <div className="pl-4 space-y-2">
                  <a href="#restaurant" className="block text-gray-600">Kurfürsten Stube (Michelin Star)</a>
                  <a href="#breakfast" className="block text-gray-600">Frühstücksbuffet</a>
                  <a href="#specials" className="block text-gray-600">Kulinarik-Specials</a>
                  <a href="#genuss" className="block text-gray-600">Genuss verschenken</a>
                </div>
              </div>
              <a href="#events" className="block font-medium text-gray-900">Events</a>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Panorama Spa</div>
                <div className="pl-4 space-y-2">
                  <a href="#pool" className="block text-gray-600">Pool</a>
                  <a href="#gym" className="block text-gray-600">Gym</a>
                  <a href="#sundeck" className="block text-gray-600">Sonnendeck</a>
                  <a href="#sauna" className="block text-gray-600">Sauna & Dampfbad</a>
                  <a href="#massage" className="block text-gray-600">Massage & Wellness</a>
                </div>
              </div>
              <a href="#faq" className="block font-medium text-gray-900">FAQ</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

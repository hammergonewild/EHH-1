import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hotel-gold text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-7 gap-12">
          {/* Contact and Careers Information */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <img 
                  src="/logos/logo-white.png"
                  alt="Der Europäische Hof"
                  className="h-[120px] w-auto"
                />
              </div>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Friedrich-Ebert-Anlage 1<br />69117 Heidelberg</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <p>+49 6221 515-0</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <p>info@europaeischerhof.com</p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Heart className="h-5 w-5 text-white" />
                <h4 className="font-karma text-lg">Werden Sie Teil unserer Familie</h4>
              </div>
              <p className="text-white/90 mb-4 leading-relaxed font-sans font-light">
                Suchen Sie mehr als nur einen Job? Bei uns erwartet Sie eine Karriere voller Leidenschaft für erstklassige Gastfreundschaft in einem der traditionsreichsten Häuser Deutschlands.
              </p>
              <a 
                href="#careers" 
                className="inline-block px-6 py-2 bg-white text-hotel-gold rounded hover:bg-white/90 transition-colors duration-300 text-sm"
              >
                Karriere im Europäischen Hof
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-8">
            <div className="border-l border-white/20 pl-8">
              <h4 className="font-karma text-lg mb-6">Hotel</h4>
              <ul className="space-y-3">
                <li><a href="#rooms" className="text-white/80 hover:text-white">Zimmer & Suiten</a></li>
                <li><a href="#arrangements" className="text-white/80 hover:text-white">Arrangements</a></li>
                <li><a href="#vouchers" className="text-white/80 hover:text-white">Geschenkgutscheine</a></li>
              </ul>
            </div>
            <div className="border-l border-white/20 pl-8">
              <h4 className="font-karma text-lg mb-6">Genuss</h4>
              <ul className="space-y-3">
                <li><a href="#restaurant" className="text-white/80 hover:text-white">Restaurant</a></li>
                <li><a href="#bar" className="text-white/80 hover:text-white">Bar & Lounge</a></li>
                <li><a href="#breakfast" className="text-white/80 hover:text-white">Frühstück</a></li>
              </ul>
            </div>
            <div className="border-l border-white/20 pl-8">
              <h4 className="font-karma text-lg mb-6">Wellness</h4>
              <ul className="space-y-3">
                <li><a href="#spa" className="text-white/80 hover:text-white">Panorama SPA</a></li>
                <li><a href="#fitness" className="text-white/80 hover:text-white">Fitness</a></li>
                <li><a href="#pool" className="text-white/80 hover:text-white">Pool</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20 text-center text-sm text-white/80">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p>© {new Date().getFullYear()} Der Europäische Hof. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Impressum</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors duration-300">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

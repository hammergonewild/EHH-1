import React from 'react';
import { Facebook, Youtube, Linkedin, Calendar, Gift, CalendarRange } from 'lucide-react';
import useInView from '../hooks/useInView';

const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-6 w-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function CallToAction() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${
          isInView ? 'is-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-karma text-gray-900 mb-6">
              Wann lassen Sie sich von uns verzaubern?
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-sans font-light">
              Seit über 150 Jahren begeistern wir Gäste von nah und fern. 
              Nun sind auch Sie herzlich eingeladen, sich von unserer einzigartigen Atmosphäre 
              verzaubern zu lassen und Teil unserer Geschichte zu werden.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <button className="px-6 py-3 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-all duration-300 text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Calendar className="h-4 w-4" />
                <span>JETZT BUCHEN</span>
              </button>
              <button className="px-6 py-3 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-all duration-300 text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Gift className="h-4 w-4" />
                <span>GESCHENK-GUTSCHEIN</span>
              </button>
              <button className="px-6 py-3 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-all duration-300 text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <CalendarRange className="h-4 w-4" />
                <span>ARRANGEMENTS</span>
              </button>
            </div>

            <div className="flex space-x-6">
              <a href="#tiktok" className="text-hotel-gold hover:text-hotel-gold/80 transition-colors">
                <TikTokIcon />
              </a>
              <a href="#facebook" className="text-hotel-gold hover:text-hotel-gold/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#youtube" className="text-hotel-gold hover:text-hotel-gold/80 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#linkedin" className="text-hotel-gold hover:text-hotel-gold/80 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3 className="text-xl font-karma text-gray-900 mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-6 font-sans font-light">
                Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Angebote und Einblicke.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                />
                <button className="w-full px-6 py-3 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-all duration-300 text-sm tracking-wide shadow-lg hover:shadow-xl">
                  ABONNIEREN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
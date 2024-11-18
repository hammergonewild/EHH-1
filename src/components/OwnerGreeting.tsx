import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

export default function OwnerGreeting() {
  const [ref, isInView] = useInView();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/owner-greeting-bg.jpg')",
          transform: `translateY(${scrollPosition * 0.5}px)`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent"></div>
      </div>
      
      <div className="relative min-h-[100vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div 
          ref={ref}
          className={`w-full md:w-1/2 lg:w-2/5 py-32 fade-in-section ${
            isInView ? 'is-visible' : ''
          }`}
        >
          <p className="text-white text-sm tracking-widest uppercase font-medium mb-6">
            Ihre Gastgeber seit 1865
          </p>
          <h2 className="text-3xl md:text-4xl font-karma mb-12 text-white">
            Willkommen im Europäischen Hof
          </h2>
          <div className="space-y-8 leading-relaxed text-white/90 font-light">
            <p>
              Seit vier Generationen führen wir dieses besondere Haus mit Leidenschaft und Hingabe. 
              Unsere Mission ist es, Ihnen einen Ort zu bieten, an dem Sie die Wärme eines Zuhauses 
              mit dem Luxus eines Grand Hotels vereint finden.
            </p>
            <p className="text-xl font-karma text-white italic">
              "Wir lieben, was wir tun!"
            </p>
            <p>
              Wir setzen alles daran, dass auch Sie Ihr Herz (erneut) in Heidelberg verlieren - an uns.
            </p>
            <p>
              Sie sind herzlich eingeladen, Teil unserer Geschichte zu werden und die einzigartige 
              Atmosphäre zu genießen, die unsere Gäste seit über 150 Jahren so schätzen.
            </p>
          </div>
          <div className="mt-16 font-karma">
            <p className="text-white mb-1">Herzlichst,</p>
            <p className="text-lg text-white">Caroline von Kretschmann</p>
            <p className="text-sm italic text-white/80 mt-2">- Ihre Gastgeberin in vierter Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

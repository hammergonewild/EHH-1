import React from 'react';
import useInView from '../hooks/useInView';

export default function OwnerGreeting() {
  const [ref, isInView] = useInView();

  return (
    <section className="relative min-h-[80vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/owner-greeting-bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent md:w-1/2 lg:w-1/3"></div>
        
      </div>
      <div className="relative min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div 
          ref={ref}
          className={`w-full md:w-1/2 lg:w-1/3 py-28 fade-in-section ${
            isInView ? 'is-visible' : ''
          }`}
        >
          <p className="text-white text-sm tracking-widest uppercase font-medium mb-4">
            Ihre Gastgeber seit 1865
          </p>
          <h2 className="text-3xl md:text-4xl font-karma text-white mb-8">
            Willkommen im Europäischen Hof
          </h2>
          <div className="space-y-6 leading-relaxed text-white">
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
          <div className="mt-12 font-karma">
            <p className="text-white mb-1">Herzlichst,</p>
            <p className="text-lg text-white">Caroline von Kretschmann</p>
            <p className="text-sm italic text-white mt-2">- Ihre Gastgeberin in vierter Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

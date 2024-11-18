import React from 'react';
import { Heart, Clock, Home, Users } from 'lucide-react';
import useInView from '../hooks/useInView';

const features = [
  {
    icon: Heart,
    title: "Erfahrung & Expertise",
    description: "Jahrzehntelange Erfahrung in der Betreuung von Gästen während medizinischer Behandlungen"
  },
  {
    icon: Clock,
    title: "Flexible Aufenthaltsdauer",
    description: "Von wenigen Tagen bis zu mehreren Monaten - wir passen uns Ihren Bedürfnissen an"
  },
  {
    icon: Home,
    title: "Wohnlicher Komfort",
    description: "Großzügige Suiten mit separatem Wohnbereich für ein Gefühl wie zu Hause"
  },
  {
    icon: Users,
    title: "Familienbetreuung",
    description: "Besondere Unterstützung für begleitende Familienmitglieder und Angehörige"
  }
];

export default function MedicalStay() {
  const [headerRef, headerInView] = useInView();
  const [featuresRef, featuresInView] = useInView();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 fade-in-section ${
            headerInView ? 'is-visible' : ''
          }`}
        >
          <p className="text-hotel-gold text-sm tracking-widest uppercase font-medium mb-4 font-sans">
            Wie ein Zuhause auch in schwierigen Zeiten
          </p>
          <h2 className="text-3xl md:text-4xl font-karma text-gray-900 mb-8">
            Ihr erfahrener Gastgeber bei medizinisch bedingten Heidelberg-Aufenthalten
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-sans font-light">
            Seit Generationen vertrauen uns Gäste aus aller Welt, die für medizinische Behandlungen nach Heidelberg kommen. 
            Sie schätzen unser Feingefühl im Umgang mit ihnen und ihren Angehörigen und schöpfen Kraft aus unserem 
            achtsamen und herzlichen Umgang.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-section ${
                  featuresInView ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="h-12 w-12 text-hotel-gold mb-6" />
                <h3 className="text-xl font-karma mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans font-light">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center fade-in-section ${featuresInView ? 'is-visible' : ''}`}>
          <button className="inline-flex items-center px-8 py-3 bg-hotel-gold text-white rounded hover:bg-hotel-gold/90 transition-all duration-300 transform hover:scale-[1.02] text-sm tracking-wide shadow-lg">
            BUCHEN SIE HIER IHR BERATUNGSGESPRÄCH
          </button>
        </div>
      </div>
    </section>
  );
}
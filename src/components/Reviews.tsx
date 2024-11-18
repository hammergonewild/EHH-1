import React from 'react';
import { Star } from 'lucide-react';
import useInView from '../hooks/useInView';

const reviews = [
  {
    text: "Ein wahrhaft magischer Ort. Die Kombination aus historischem Charme und modernem Luxus ist einzigartig. Das Personal ist außergewöhnlich aufmerksam.",
    author: "Familie Müller",
    date: "Oktober 2023"
  },
  {
    text: "Die Suite war traumhaft, aber was uns wirklich beeindruckt hat, war die persönliche Betreuung. Man fühlt sich hier nicht wie ein Gast, sondern wie ein lang erwarteter Freund.",
    author: "Dr. Schmidt",
    date: "September 2023"
  },
  {
    text: "Das Frühstück ist das beste, das wir je in einem Hotel hatten. Die Lage ist perfekt für Erkundungstouren durch Heidelberg.",
    author: "Sarah und Thomas",
    date: "November 2023"
  },
  {
    text: "Wir waren für eine medizinische Behandlung hier und hätten uns keinen besseren Ort wünschen können. Die Unterstützung war unglaublich.",
    author: "Familie Al-Rahman",
    date: "Dezember 2023"
  }
];

export default function Reviews() {
  const [headerRef, headerInView] = useInView();
  const [contentRef, contentInView] = useInView();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 fade-in-section ${
            headerInView ? 'is-visible' : ''
          }`}
        >
          <p className="text-hotel-gold text-sm tracking-widest uppercase font-medium mb-4 font-sans">
            Unangefochtene Nummer eins in Heidelberg
          </p>
          <h2 className="text-3xl md:text-4xl font-karma text-gray-900 mb-8">
            Auszug aus den Gäste Bewertungen auf Tripadvisor
          </h2>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className={`bg-gray-50 p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300 fade-in-section ${
                    contentInView ? 'is-visible' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-hotel-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic font-sans font-light">{review.text}</p>
                  <div className="text-sm font-sans">
                    <p className="font-medium text-gray-900">{review.author}</p>
                    <p className="text-gray-500">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-1 space-y-8 fade-in-section ${contentInView ? 'is-visible' : ''}`}>
            <div>
              <h3 className="text-xl font-karma mb-4">KI-Podcast mit einer Zusammenfassung der Bewertungen</h3>
              <div className="aspect-video bg-gray-100 rounded-lg"></div>
            </div>
            <div>
              <h3 className="text-xl font-karma mb-4">KI generierter Song über unser Hotel</h3>
              <div className="aspect-video bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
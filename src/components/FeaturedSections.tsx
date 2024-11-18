import React from 'react';

const sections = [
  {
    id: 'rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    title: 'Zimmer & Suiten',
    description: 'Großzügig, luxuriös mit antiquem Touch und Betten von hohem Schlafkomfort.'
  },
  {
    id: 'dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    title: 'Gaumenfreuden von morgens bis abends',
    description: 'Viel gerühmtes Frühstücksbuffet und Restaurant mit Michelin Stern'
  }
];

export default function FeaturedSections() {
  return (
    <section className="w-full">
      {sections.map((section, index) => (
        <div 
          key={section.id}
          className={`relative h-[70vh] w-full flex items-center ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className={`relative w-full max-w-xl mx-8 md:mx-16 lg:mx-24 p-8 md:p-12 bg-white/90 backdrop-blur-sm ${
            index % 2 === 0 ? 'lg:ml-24' : 'lg:mr-24'
          }`}>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.description}
            </p>
            <button className="mt-6 px-8 py-3 bg-amber-800 text-white rounded hover:bg-amber-900 transition-all duration-300 transform hover:scale-[1.02] text-sm tracking-wide">
              MEHR ERFAHREN
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

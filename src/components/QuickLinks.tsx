import React from 'react';
import { Bed, Utensils, Dumbbell, MapPin, PartyPopper, Wine } from 'lucide-react';
import useInView from '../hooks/useInView';

const mainLinks = [
  {
    title: "Zimmer & Suiten",
    description: "Großzügig, luxuriös mit antiquem Touch und Betten von höchstem Schlafkomfort",
    icon: Bed,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    link: "#accommodations"
  },
  {
    title: "Gaumenfreuden von früh bis spät",
    description: "Viel gerühmtes Frühstücksbuffet und Restaurant mit Michelin Stern",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    link: "#dining"
  },
  {
    title: "Panorama SPA, Gym & Wellness",
    description: "Erholen, entspannen und auspowern mit Blick über die Stadt und den Wald nebenan",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    link: "#wellness"
  },
  {
    title: "Perfekte Lage für Entdeckungstouren",
    description: "Schloss, Altstadt, der Königstuhl, die Alte Brücke erreichen Sie bequem zu Fuß",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1696347932229-60d88e325e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    link: "#explore"
  }
];

const additionalLinks = [
  {
    title: "Stilvoll Feiern & Tagen",
    description: "Die perfekte Kulisse für Veranstaltungen von denen Ihre Gäste noch Ihren Enkeln vorschwärmen werden",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    link: "#events"
  },
  {
    title: "Bar & Smokers Lounge",
    description: "Der ideale Rahmen, um bei einem fancy Cocktail oder edlen Tropfen den Tag ausklingen zu lassen",
    icon: Wine,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    link: "#bar"
  }
];

export default function QuickLinks() {
  const [mainRef, mainInView] = useInView();
  const [additionalRef, additionalInView] = useInView();

  return (
    <>
      <div 
        ref={mainRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {mainLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a 
              key={index}
              href={link.link}
              className={`group relative h-96 overflow-hidden fade-in-section ${
                mainInView ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${link.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-serif mb-2">{link.title}</h3>
                <p className="text-sm font-light">{link.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div 
        ref={additionalRef}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {additionalLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a 
              key={index}
              href={link.link}
              className={`group relative h-96 overflow-hidden fade-in-section ${
                additionalInView ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${link.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-serif mb-2">{link.title}</h3>
                <p className="text-sm font-light">{link.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
import React from 'react';
import useInView from '../hooks/useInView';

export default function Welcome() {
  const [ref, isInView] = useInView();

  return (
    <section className="pt-32 pb-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section ${
          isInView ? 'is-visible' : ''
        }`}
      >
        <p className="text-hotel-gold text-sm tracking-widest uppercase font-medium mb-4 font-sans">
          Reich an Tradition & verschwenderisch mit Herzlichkeit
        </p>
        <h2 className="text-3xl md:text-4xl font-karma text-gray-900 mb-8">
          Ihr fünf Sterne Superior Grand-Hotel im Herzen Heidelbergs
        </h2>
        <div className="text-gray-600 leading-relaxed text-lg space-y-6 font-sans font-light">
          <p>
            Hier werden Sie (erneut) Ihr Herz an und in Heidelberg verlieren - und an uns.
          </p>
          <p>
           Was auch immer Sie nach Heidelberg, eine der romantischsten Städte Deutschlands, führt – wir sind hier, um Ihren Aufenthalt unvergesslich zu machen. Damit Sie das Gefühl haben, nie wieder weggehen zu wollen. Ein Ort, der Erinnerungen an eine Zeit weckt, in der die Welt noch in Ordnung war. In unserem privat geführten Luxushotel erleben Sie echte Wertschätzung, tiefe Aufmerksamkeit und eine herzliche Gastfreundschaft, die Sie umhüllt wie die Umarmung eines Freundes. Selbst wenn Ihr Besuch medizinischen Ursprungs ist, finden Sie bei uns und für Ihre Liebsten ein Zuhause – auch in herausfordernden Zeiten.
          </p>
          <p>
            Holen Sie sich nun einen Vorgeschmack auf das, was Sie bei uns erwartet.
          </p>
        </div>
      </div>
    </section>
  );
}

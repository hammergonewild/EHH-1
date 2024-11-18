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
            Egal, welcher Anlass Sie in eine der romantischsten Städte Deutschlands führt. 
            Wir sind bekannt dafür, alles zu tun, damit Sie am liebsten für immer bleiben würden. 
            An einem Ort, der Sie an die Zeiten erinnert, als die Welt noch in Ordnung war. 
            Ein Hotel in dem Sie sich gesehen, respektvoll wertgeschätzt, luxuriös umsorgt fühlen 
            und gebadet in verschwenderischer Herzlichkeit. Und selbst wenn Ihr Aufenthalt in 
            Heidelberg einen medizinischen Anlass haben sollte, finden Sie im Europäischen Hof 
            für sich und Ihre Angehörigen ein Zuhause auch in schwierigen Zeiten.
          </p>
          <p>
            Holen Sie sich nun einen Vorgeschmack auf das, was Sie bei uns erwartet.
          </p>
        </div>
      </div>
    </section>
  );
}

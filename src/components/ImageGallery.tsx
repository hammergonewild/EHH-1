import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useInView from '../hooks/useInView';

const images = [
  {
    src: "/images/sonnendeck.jpg",
    span: "md:col-span-2 md:row-span-2",
    title: "Sonnendeck Panorama SPA"
  },
  {
    src: "/images/kurfuerstenstube.jpg",
    span: "",
    title: "Kurfürstenstube"
  },
  {
    src: "/images/kaminzimmer.jpg",
    span: "",
    title: "Kaminzimmer"
  },
  {
    src: "/images/sommerrestaurant.jpg",
    span: "md:col-span-2",
    title: "Sommerrestaurant"
  },
  {
    src: "/images/entspannung.jpg",
    span: "",
    title: "Massage & Wellness"
  },
  {
    src: "/images/gym.jpg",
    span: "",
    title: "Fitness Studio"
  },
  {
    src: "/images/sauna.jpg",
    span: "",
    title: "Sauna & Dampfsauna"
  },
  {
    src: "/images/meeting.jpg",
    span: "",
    title: "Konferenzräume"
  },
  {
    src: "/images/schloss-bei-nacht.jpg",
    span: "",
    title: "Heidelberger Schloss bei Nacht"
  },
  {
    src: "/images/koenigstuhl.jpg",
    span: "",
    title: "Königstuhl"
  },
  {
    src: "/images/pfalz.jpg",
    span: "",
    title: "Weinverkostung in der Pfalz"
  }
];

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);
  const [headerRef, headerInView] = useInView();
  const [galleryRef, galleryInView] = useInView();

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 fade-in-section ${
            headerInView ? 'is-visible' : ''
          }`}
        >
          <p className="text-hotel-gold text-sm tracking-widest uppercase font-medium mb-4">
            Hotel Impressionen
          </p>
          <h2 className="text-3xl md:text-4xl font-karma text-gray-900 mb-8">
            Die beliebtesten Spots unserer Gäste
          </h2>
        </div>

        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
        >
          {images.map((image, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden rounded-lg ${image.span} group cursor-pointer fade-in-section ${
                galleryInView ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIndex(idx)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white text-lg font-karma">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
        />
      </div>
    </section>
  );
}

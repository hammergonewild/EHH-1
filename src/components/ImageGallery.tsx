import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useInView from '../hooks/useInView';

const images = [
  {
    src: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    span: "md:col-span-2 md:row-span-2",
    title: "Hotellobby"
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Deluxe Suite"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Restaurant"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "md:col-span-2",
    title: "Panorama SPA"
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    span: "",
    title: "Bar"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Veranstaltungsraum"
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Wellness Bereich"
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Executive Suite"
  },
  {
    src: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Frühstücksraum"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Außenansicht"
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    span: "",
    title: "Präsidenten Suite"
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
          <p className="text-amber-800 text-sm tracking-widest uppercase font-medium mb-4">
            Hotel Impressionen
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
            Die beliebtesten Spots unserer Gäste im Hotel, in Heidelberg und drumherum
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
                  <span className="text-white text-lg font-serif">{image.title}</span>
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

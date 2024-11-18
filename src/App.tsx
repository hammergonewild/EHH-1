import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import QuickLinks from './components/QuickLinks';
import MedicalStay from './components/MedicalStay';
import OwnerGreeting from './components/OwnerGreeting';
import Reviews from './components/Reviews';
import ImageGallery from './components/ImageGallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Welcome />
      <QuickLinks />
      <MedicalStay />
      <OwnerGreeting />
      <Reviews />
      <ImageGallery />
      <CallToAction />
      <Footer />
    </div>
  );
}
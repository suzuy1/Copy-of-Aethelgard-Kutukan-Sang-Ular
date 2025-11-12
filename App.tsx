import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LoreSection from './components/LoreSection';
import CharacterSection from './components/CharacterSection';
import WorldSection from './components/WorldSection';
import BestiarySection from './components/BestiarySection';
import MediaGallery from './components/MediaGallery';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LoreSection />
        <WorldSection />
        <CharacterSection />
        <BestiarySection />
        <MediaGallery />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
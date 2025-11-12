import React, { useState, useEffect } from 'react';
import { DragonIcon } from './icons';
import ParticleBackground from './ParticleBackground';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#features', label: 'Fitur' },
    { href: '#lore', label: 'Cerita' },
    { href: '#world', label: 'Dunia' },
    { href: '#characters', label: 'Karakter' },
    { href: '#bestiary', label: 'Monster' },
    { href: '#media', label: 'Media' },
    { href: '#cta', label: 'Berita' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className={`absolute inset-0 -z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        {isScrolled && <ParticleBackground />}
      </div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <DragonIcon className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold font-cinzel tracking-wider text-white">AETHELGARD</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Buka menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <nav className="flex flex-col px-6 pb-4 space-y-2 bg-slate-900/95">
             {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-300 hover:text-amber-400 py-2 transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-20 bg-slate-800/80 backdrop-blur-sm text-amber-400 p-3 rounded-full shadow-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
      aria-label="Gulir ke atas"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;

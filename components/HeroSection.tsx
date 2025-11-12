import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import RainEffect from './RainEffect';
import WindEffect from './WindEffect';
import Modal from './Modal';

const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  
  const fullText = 'Aethelgard';
  const typingDuration = 1.5; // Durasi animasi pengetikan dalam detik
  const startDelay = 0.5; // Jeda sebelum pengetikan dimulai

  useEffect(() => {
    const img = new Image();
    img.src = 'https://picsum.photos/seed/adventuregame/1920/1080';
    img.onload = () => setIsBgLoaded(true);
  }, []);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handlePreOrderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const subtitleDelay = `${startDelay + typingDuration + 0.2}s`;
  const buttonDelay = `${startDelay + typingDuration + 0.5}s`;

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-slate-900">
        <div
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1] transition-opacity duration-1000 ease-in ${isBgLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('https://picsum.photos/seed/adventuregame/1920/1080')",
            transform: `translateY(${offsetY * 0.7}px)`
          }}
        />
        <ParticleBackground />
        <RainEffect />
        <WindEffect />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div
          className="relative z-10 p-6"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-cinzel tracking-widest leading-tight mb-4 smooth-glint-effect min-h-[1.2em]" style={{ textShadow: '0 0 15px rgba(251, 191, 36, 0.7)' }}>
             {isBgLoaded && <span className="typewriter">{fullText}</span>}
          </h1>
          <p className={`text-lg md:text-2xl font-light tracking-wider mb-8 ${isBgLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: subtitleDelay }}>
            Tempa Legenda Anda di Dunia yang Ditinggalkan para Dewa.
          </p>
          <div className={`${isBgLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: buttonDelay }}>
            <button
              onClick={handlePreOrderClick}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-sm shadow-lg transition-all duration-300 transform hover:scale-105 text-lg tracking-wider smooth-glint-effect"
            >
              Pesan di Muka Sekarang
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Konfirmasi Pra-Pemesanan">
        <p className="text-slate-300 mb-6">Anda akan melakukan pra-pemesanan "Aethelgard: Kutukan Sang Ular". Ini adalah maket dan tidak ada pembayaran yang akan diproses. Harap konfirmasi tindakan Anda.</p>
        <div className="flex justify-end gap-4">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-sm transition-colors duration-300"
          >
            Batal
          </button>
          <button 
            onClick={() => {
              alert('Terima kasih atas pra-pemesanan Anda!');
              setIsModalOpen(false);
            }}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 px-6 rounded-sm shadow-md transition-colors duration-300"
          >
            Konfirmasi
          </button>
        </div>
      </Modal>
      <style>{`
        /* CSS Typewriter Effect */
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid #fbbf24; /* Kursor typewriter */
          animation: 
            typing ${typingDuration}s steps(${fullText.length}, end) ${startDelay}s forwards, 
            blink 1s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #fbbf24; } /* amber-400 */
        }
        
        .animate-fade-in-up {
           animation: fade-in-up 0.5s ease-out forwards;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth Wind/Glint Effect */
        @keyframes smooth-glint {
          0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          20% { opacity: 0.6; }
          30% { opacity: 0.8; }
          40% { opacity: 0.9; }
          50% { opacity: 1; }
          60% { opacity: 0.9; }
          70% { opacity: 0.7; }
          80% { opacity: 0.4; }
          90% { opacity: 0.2; }
          100% {
            transform: translateX(200%) skewX(-15deg);
            opacity: 0;
          }
        }

        .smooth-glint-effect {
          position: relative;
          overflow: hidden;
        }

        .smooth-glint-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 20%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 80%,
            transparent 100%
          );
          animation: smooth-glint 8s ease-in-out infinite;
          z-index: 1;
          transform: translateX(-100%) skewX(-15deg);
        }

        button.smooth-glint-effect::before {
          animation: smooth-glint 12s ease-in-out infinite;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.2) 80%,
            transparent 100%
          );
        }

        button.smooth-glint-effect:hover::before {
          animation-duration: 6s;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 20%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.3) 80%,
            transparent 100%
          );
        }
      `}</style>
    </>
  );
};

export default HeroSection;
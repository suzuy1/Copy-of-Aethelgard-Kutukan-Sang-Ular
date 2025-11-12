
import React, { useState, useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import RainEffect from './RainEffect';

const LoreSection: React.FC = () => {
  const [bgOffsetY, setBgOffsetY] = useState(0);
  const [contentOffsetY, setContentOffsetY] = useState(0);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://picsum.photos/seed/darkcastle/1920/1080';
    img.onload = () => setIsBgLoaded(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const bgSpeed = 0.2;
          const contentSpeed = 0.1;
          setBgOffsetY(rect.top * -bgSpeed);
          setContentOffsetY(rect.top * -contentSpeed);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="lore" 
      ref={sectionRef} 
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in ${isBgLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/darkcastle/1920/1080')",
          backgroundPosition: `center ${bgOffsetY}px`
        }}
      />
      <div className="relative bg-black/70 py-20">
        <ParticleBackground />
        <RainEffect />
        <div 
          className="container relative z-10 mx-auto px-6 max-w-4xl text-center"
          style={{ transform: `translateY(${contentOffsetY}px)` }}
        >
          <h2 className="text-4xl font-bold font-cinzel mb-6 tracking-wider">Kisah Aethelgard</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-8"></div>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Dahulu kala, Aethelgard bermandikan kemuliaan para Dewa Kuno. Mereka menempa gunung dan mengukir sungai, memberikan kemakmuran bagi umat manusia. Namun, secara tiba-tiba, mereka lenyap dalam peristiwa yang dikenal sebagai 'Keheningan Ilahi,' meninggalkan dunia tanpa penjaga. Kekosongan kekuasaan memicu perang tanpa akhir antar kerajaan fana, melemahkan negeri ini dari generasi ke generasi.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Di tengah kekacauan inilah Kutukan Sang Ular lahir. Dikatakan berasal dari Ouroboros, dewa penjaga yang dikhianati dan dirusak oleh keserakahan manusia, kutukan itu bukanlah sekadar wabah. Ia merayap ke dalam tanah, meracuni sihir, dan memutarbalikkan makhluk menjadi monster-monster mengerikan. Para dewa diam, raja-raja lama telah tiada, dan kutukan ular mengencangkan lilitannya di jantung dunia.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Kini, hanya bisikan ramalan yang terlupakan yang bergema dalam bayang-bayang, berbicara tentang seorang pahlawan yang ditakdirkan untuk bangkit dari abu. Maukah Anda menjawab panggilan, menantang kegelapan yang mendekat, dan menulis ulang takdir kerajaan yang terlupakan?
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
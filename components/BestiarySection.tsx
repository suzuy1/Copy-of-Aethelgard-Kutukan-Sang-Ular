import React, { useState, useEffect, useRef } from 'react';
import ImageWithLoader from './ImageWithLoader';
import Tooltip from './Tooltip';
import { MonsterIcon } from './icons';

interface Monster {
  name: string;
  description: string;
  imageUrl: string;
  threat: string;
}

const monsters: Monster[] = [
  {
    name: 'Grave Wyrm',
    description: 'Naga kerangka raksasa yang dibangkitkan oleh sihir kutukan, menghantui reruntuhan kuno dan menjaga harta karun yang terlupakan.',
    imageUrl: 'https://picsum.photos/seed/monster1/400/600',
    threat: 'Legendaris',
  },
  {
    name: 'Shadow Stalker',
    description: 'Predator licik yang berburu dalam kegelapan. Mampu menyatu dengan bayangan, ia menyerang tanpa peringatan.',
    imageUrl: 'https://picsum.photos/seed/monster2/400/600',
    threat: 'Berbahaya',
  },
  {
    name: 'Bog Creeper',
    description: 'Makhluk rawa yang mengerikan, terbuat dari lumpur dan tanaman busuk. Menyeret korbannya ke bawah air untuk ditenggelamkan.',
    imageUrl: 'https://picsum.photos/seed/monster3/400/600',
    threat: 'Umum',
  },
  {
    name: 'Gorgon Basilisk',
    description: 'Ular raksasa dengan tatapan mematikan. Satu pandangan saja bisa mengubah makhluk hidup menjadi batu abadi.',
    imageUrl: 'https://picsum.photos/seed/monster4/400/600',
    threat: 'Mematikan',
  }
];

const MonsterCard: React.FC<{ monster: Monster }> = ({ monster }) => {
  const threatColors: { [key: string]: string } = {
    'Umum': 'text-green-400',
    'Berbahaya': 'text-yellow-400',
    'Mematikan': 'text-orange-500',
    'Legendaris': 'text-red-500',
  };

  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden group border border-slate-700 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg h-full">
      <div className="relative h-72">
        <ImageWithLoader
          src={monster.imageUrl}
          alt={monster.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-2xl font-bold font-cinzel text-white">{monster.name}</h3>
        </div>
         <div className="absolute top-4 right-4">
          <Tooltip content={`Tingkat Ancaman: ${monster.threat}`}>
            <div className={`bg-slate-900/80 p-2 rounded-full border border-slate-600 ${threatColors[monster.threat]}`}>
                <MonsterIcon className="w-5 h-5" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-400">{monster.description}</p>
      </div>
    </div>
  );
};

const BestiarySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="bestiary" ref={sectionRef} className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-cinzel tracking-wider">Hadapi Para Monster</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {monsters.map((monster, index) => (
             <div
              key={monster.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <MonsterCard monster={monster} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestiarySection;

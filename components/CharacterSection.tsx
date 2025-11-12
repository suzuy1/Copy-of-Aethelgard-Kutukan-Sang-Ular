import React, { useState, useEffect, useRef } from 'react';
import ImageWithLoader from './ImageWithLoader';
import Tooltip from './Tooltip';
import { DragonIcon, WorldIcon, BookIcon, HammerIcon } from './icons';
import StarryBackground from './StarryBackground';

interface Character {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  faction: string;
  icon: React.ReactNode;
}

const characters: Character[] = [
  {
    name: 'Kaelen',
    title: 'Sang Pelindung yang Gugur',
    description: 'Seorang ksatria yang dulunya mulia, kini terikat oleh sumpah gelap untuk melindungi sisa-sisa terakhir kerajaannya yang hancur.',
    imageUrl: 'https://picsum.photos/seed/character1/400/600',
    faction: 'Kerajaan Wyrmfall',
    icon: <DragonIcon className="w-5 h-5 text-red-400" />
  },
  {
    name: 'Lyra',
    title: 'Bisikan dari Hutan Belantara',
    description: 'Seorang pemanah misterius dari Hutan Sunyi. Bicaranya sedikit, tapi panahnya tidak pernah meleset. Ia bertarung untuk melindungi keseimbangan alam.',
    imageUrl: 'https://picsum.photos/seed/character2/400/600',
    faction: 'Penjaga Hutan',
    icon: <WorldIcon className="w-5 h-5 text-green-400" />
  },
  {
    name: 'Malakor',
    title: 'Penyihir Bayangan',
    description: 'Seorang penyihir yang haus akan pengetahuan terlarang. Dia memanipulasi sihir gelap untuk kepentingannya sendiri, motifnya tersembunyi dalam bayang-bayang.',
    imageUrl: 'https://picsum.photos/seed/character3/400/600',
    faction: 'Lingkaran Senja',
    icon: <BookIcon className="w-5 h-5 text-purple-400" />
  },
  {
    name: 'Borin',
    title: 'Si Penempa Gunung',
    description: 'Penguasa perkasa dari aula bawah tanah, Borin menggunakan kekuatan gunung dan api kuno untuk menempa senjata legendaris.',
    imageUrl: 'https://picsum.photos/seed/character4/400/600',
    faction: 'Klan Batu Dalam',
    icon: <HammerIcon className="w-5 h-5 text-slate-400" />
  }
];

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden group border border-slate-700 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg h-full">
      <div className="relative h-72">
        <ImageWithLoader
          src={character.imageUrl}
          alt={character.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-2xl font-bold font-cinzel text-white">{character.name}</h3>
            <p className="text-amber-400 tracking-wider text-sm">{character.title}</p>
        </div>
        <div className="absolute top-4 right-4">
          <Tooltip content={character.faction}>
            <div className="bg-slate-900/80 p-2 rounded-full border border-slate-600">
                {character.icon}
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-400">{character.description}</p>
      </div>
    </div>
  );
};


const CharacterSection: React.FC = () => {
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
    <section id="characters" ref={sectionRef} className="relative py-20 bg-slate-900 overflow-hidden">
      <StarryBackground />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-cinzel tracking-wider">Temui Para Pahlawan</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((char, index) => (
             <div
              key={char.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
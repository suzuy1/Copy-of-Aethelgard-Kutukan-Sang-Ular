import React, { useState, useEffect, useRef } from 'react';
import { WorldIcon, SwordIcon, BookIcon, ChoiceIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex justify-center mb-4">
      <div className="bg-slate-900 p-4 rounded-full border-2 border-slate-700">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold font-cinzel mb-2 text-amber-400">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <WorldIcon className="w-10 h-10 text-amber-500" />,
      title: "Dunia Terbuka yang Luas",
      description: "Jelajahi lanskap yang luas, dari hutan terkutuk hingga reruntuhan yang terlupakan, penuh dengan kehidupan dan bahaya."
    },
    {
      icon: <SwordIcon className="w-10 h-10 text-amber-500" />,
      title: "Pertarungan Dinamis",
      description: "Kuasai sistem pertarungan yang mendalam dan memuaskan. Gunakan senjata kuat dan sihir misterius."
    },
    {
      icon: <BookIcon className="w-10 h-10 text-amber-500" />,
      title: "Alur Cerita yang Kaya",
      description: "Ungkap narasi epik tentang pengkhianatan dan penebusan. Pilihan Anda akan membentuk takdir Aethelgard."
    },
    {
      icon: <ChoiceIcon className="w-10 h-10 text-amber-500" />,
      title: "Kustomisasi Karakter",
      description: "Ciptakan pahlawan Anda sendiri. Sesuaikan penampilan, keterampilan, dan perlengkapan agar sesuai dengan gaya bermain Anda."
    },
  ];
  
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const displacement = (window.innerHeight / 2) - (rect.top + rect.height / 2);
          setOffsetY(displacement * -0.1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section id="features" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="container mx-auto px-6" style={{ transform: `translateY(${offsetY}px)`}}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-cinzel tracking-wider">Fitur Utama</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
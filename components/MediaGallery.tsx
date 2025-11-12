import React, { useState, useEffect, useRef } from 'react';
import ImageWithLoader from './ImageWithLoader';

const GalleryImage: React.FC<{ src: string; alt: string; wide?: boolean; tall?: boolean }> = ({ src, alt, wide, tall }) => (
  <div className={`overflow-hidden rounded-lg shadow-lg group ${wide ? 'md:col-span-2' : ''} ${tall ? 'md:row-span-2' : ''}`}>
    <ImageWithLoader 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
  </div>
);

const allImages = [
    { src: "https://picsum.photos/seed/gallery1/800/600", alt: "Hutan mistis", tall: true },
    { src: "https://picsum.photos/seed/gallery2/800/600", alt: "Reruntuhan kuno", wide: true },
    { src: "https://picsum.photos/seed/gallery3/800/600", alt: "Monster menakutkan" },
    { src: "https://picsum.photos/seed/gallery4/800/600", alt: "Pahlawan memandang lembah", wide: true },
    { src: "https://picsum.photos/seed/gallery5/800/600", alt: "Gua bercahaya" },
    { src: "https://picsum.photos/seed/gallery6/800/600", alt: "Sarang Naga", wide: true },
    { src: "https://picsum.photos/seed/gallery7/800/600", alt: "Pedang Ajaib" },
    { src: "https://picsum.photos/seed/gallery8/800/600", alt: "Pengepungan Kastil", wide: true },
    { src: "https://picsum.photos/seed/gallery9/800/600", alt: "Desa Tersembunyi" },
    { src: "https://picsum.photos/seed/gallery10/800/600", alt: "Kota Tenggelam", tall: true },
    { src: "https://picsum.photos/seed/gallery11/800/600", alt: "Puncak Ular", wide: true },
    { src: "https://picsum.photos/seed/gallery12/800/600", alt: "Takhta Aethelgard" },
];

const IMAGES_PER_PAGE = 5;

const MediaGallery: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, IMAGES_PER_PAGE));
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://picsum.photos/seed/dungeon/1920/1080';
    img.onload = () => setIsBgLoaded(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const speed = 0.2;
          setOffsetY(rect.top * -speed);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
        const currentLength = visibleImages.length;
        const nextImages = allImages.slice(currentLength, currentLength + IMAGES_PER_PAGE);
        setVisibleImages(prevImages => [...prevImages, ...nextImages]);
        setIsLoadingMore(false);
    }, 500);
  };

  return (
    <section 
      id="media" 
      ref={sectionRef} 
      className="relative bg-slate-900"
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in ${isBgLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('https://picsum.photos/seed/dungeon/1920/1080')",
          backgroundPosition: `center ${offsetY}px`
        }}
      />
      <div className="relative bg-slate-900/80 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-cinzel tracking-wider">Sekilas tentang Dunia</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
             {visibleImages.map((image, index) => (
                <GalleryImage key={index} {...image} />
            ))}
          </div>
          {visibleImages.length < allImages.length && (
            <div className="text-center mt-12">
                <button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-sm shadow-md transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                    {isLoadingMore ? 'Memuat...' : 'Muat Lebih Banyak'}
                </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
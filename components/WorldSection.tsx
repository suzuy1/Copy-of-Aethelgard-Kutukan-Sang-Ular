import React from 'react';
import ImageWithLoader from './ImageWithLoader';
import ParticleBackground from './ParticleBackground';

const WorldSection: React.FC = () => {
  return (
    <section id="world" className="relative py-20 bg-slate-800 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-cinzel tracking-wider">Jelajahi Dunia</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-invert lg:prose-xl text-slate-300">
            <p>
              Aethelgard adalah negeri dengan kontras yang tajam, di mana keindahan yang menakjubkan menutupi kerusakan yang mendalam. Hutan purba, lebih tua dari kerajaan mana pun, kini berbisik dengan roh-roh jahat. Pegunungan yang dulu megah menyembunyikan sarang binatang buas yang menakutkan, dan dataran luas terluka oleh perang yang terlupakan.
            </p>
            <p>
              Dari puncak beku Gigi Naga hingga kedalaman keruh Rawa Ular, setiap sudut dunia ini menyimpan rahasia, bahaya, dan potensi untuk kejayaan yang tak tertandingi. Peradaban bangkit dan runtuh, meninggalkan reruntuhan misterius yang memanggil orang-orang pemberani dan bodoh. Udara itu sendiri berderak dengan sihir liar, kekuatan yang sama mungkinnya untuk menghancurkan seperti halnya untuk menyelamatkan.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
             <ImageWithLoader 
                src="https://picsum.photos/seed/worldmap/800/600"
                alt="Peta Aethelgard"
                className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;

import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-cinzel mb-4">Bergabunglah dengan Garda Depan</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Jadilah yang pertama menerima pembaruan eksklusif, konten di balik layar, dan akses ke beta awal. Perjalanan dimulai sekarang.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Masukkan alamat email Anda"
            className="w-full flex-grow bg-slate-900 text-white px-4 py-3 rounded-sm border border-slate-700 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow"
            required
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-sm shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Berlangganan
          </button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;
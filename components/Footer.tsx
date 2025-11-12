
import React from 'react';
import { TwitterIcon, TwitchIcon, YoutubeIcon, DiscordIcon, DragonIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <div className="flex justify-center items-center mb-6">
            <DragonIcon className="h-10 w-10 text-amber-400 mr-3" />
            <span className="text-2xl font-bold font-cinzel tracking-wider text-white">AETHELGARD</span>
        </div>
        <p className="max-w-md mx-auto mb-6">
          Ikuti perkembangan Aethelgard dan bergabunglah dengan komunitas kami di media sosial.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-amber-400 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
          <a href="#" className="hover:text-amber-400 transition-colors"><TwitchIcon className="w-6 h-6" /></a>
          <a href="#" className="hover:text-amber-400 transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
          <a href="#" className="hover:text-amber-400 transition-colors"><DiscordIcon className="w-6 h-6" /></a>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Mythic Forge Studios. Hak Cipta Dilindungi.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white mx-2">Kebijakan Privasi</a>
            <span>|</span>
            <a href="#" className="hover:text-white mx-2">Ketentuan Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
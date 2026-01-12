import React from 'react';
import { MailOpen, Heart } from 'lucide-react';
import { Gunungan, BatikPattern, CornerFloral } from './JavaneseDecor';

interface OpeningScreenProps {
  guestName: string;
  onOpen: () => void;
  isOpen: boolean;
}

const OpeningScreen: React.FC<OpeningScreenProps> = ({ guestName, onOpen, isOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-java-cream text-java-dark overflow-hidden transition-all duration-1000">
      <BatikPattern />
      <CornerFloral position="top-left" />
      <CornerFloral position="bottom-right" />
      
      {/* Background Gunungan Faded */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Gunungan className="w-full h-full max-w-sm text-java-brown" />
      </div>

      <div className="relative z-10 text-center space-y-8 p-8 animate-fade-up">
        <div className="space-y-2">
          <p className="font-cinzel tracking-widest text-sm text-java-brown uppercase">The Wedding Of</p>
          <h1 className="font-script text-6xl text-java-gold drop-shadow-sm">Diah & Miftah</h1>
        </div>

        {/* Decorative Circle with Photo */}
        <div className="w-48 h-48 mx-auto rounded-full border-4 border-java-gold/30 p-2 relative">
             <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-br from-java-cream via-java-gold/20 to-java-brown/10">
                <img 
                    src="./foto_prof/animepp.jpg" 
                    alt="Diah & Miftah" 
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay for soft effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-java-gold/10 to-transparent mix-blend-overlay"></div>
             </div>
             {/* Decorative orbit */}
             <div className="absolute inset-0 rounded-full border border-dashed border-java-brown/40 animate-spin-slow"></div>
        </div>

        <div className="space-y-3 bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-java-gold/20 shadow-lg max-w-xs mx-auto">
          <p className="font-sans text-java-brown text-sm">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <p className="font-serif text-2xl font-bold text-java-dark break-words">{guestName}</p>
          <div className="h-px w-16 bg-java-gold mx-auto my-2"></div>
          <p className="text-xs text-stone-500 italic leading-tight">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
        </div>

        <button 
          onClick={onOpen}
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-java-brown text-white rounded-full font-sans font-medium tracking-wide shadow-lg hover:bg-java-dark transition-all transform hover:scale-105 active:scale-95"
        >
          <MailOpen size={18} />
          <span>Buka Undangan</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-java-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-java-gold"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
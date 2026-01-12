import React from 'react';
import { COUPLE_NAME_BRIDE, COUPLE_NAME_GROOM, WEDDING_DATE } from '../../constants';
import { Gunungan } from '../JavaneseDecor';

const HomeSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative pt-10 pb-24 px-6 animate-fade-up">
      {/* Decorative Top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center opacity-20 pointer-events-none">
        <Gunungan className="w-64 h-64 text-java-gold" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8 z-10">
        
        <div className="text-center space-y-2">
          <p className="text-java-brown tracking-[0.3em] text-xs uppercase font-sans">The Wedding Celebration of</p>
        </div>

        {/* Decorative Frame with Photo */}
        <div className="relative w-64 h-80 rounded-t-full rounded-b-2xl border-[6px] border-white shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
           <img 
            src="./foto_prof/animepp2.jpg" 
            alt="Diah & Miftah" 
            className="w-full h-full object-cover"
           />
           {/* Overlay for soft effect */}
           <div className="absolute inset-0 bg-gradient-to-t from-java-brown/30 to-transparent mix-blend-overlay pointer-events-none" />
           
           {/* Illustration Badge */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow-lg border border-java-gold/30">
              <span className="text-xs font-cinzel text-java-dark font-bold">Illustration</span>
           </div>
        </div>

        {/* Typography */}
        <div className="text-center relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-java-gold/10 font-script whitespace-nowrap blur-[1px]">
                {COUPLE_NAME_BRIDE} {COUPLE_NAME_GROOM}
            </span>
            <h1 className="font-script text-6xl text-java-dark mb-2 drop-shadow-sm">
                {COUPLE_NAME_BRIDE} <span className="text-4xl text-java-gold">&</span> {COUPLE_NAME_GROOM}
            </h1>
            <p className="font-serif italic text-stone-600 mt-4 text-lg">
                {WEDDING_DATE}
            </p>
        </div>

        {/* Quran Verse or Quote */}
        <div className="max-w-xs text-center bg-white p-6 rounded-lg shadow-md border-t-4 border-java-gold mt-8">
            <p className="font-serif text-sm text-stone-600 leading-relaxed italic">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya..."
            </p>
            <p className="mt-3 text-xs font-bold text-java-brown uppercase tracking-widest">QS. Ar-Rum: 21</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
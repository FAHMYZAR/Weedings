import React from 'react';
import { COUPLE_NAME_BRIDE, COUPLE_NAME_GROOM } from '../../constants';
import { Instagram } from 'lucide-react';

const ProfileCard: React.FC<{ 
  name: string; 
  fullName: string; 
  role: string; 
  parents: string; 
  delay: string;
}> = ({ name, fullName, role, parents, delay }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-stone-100 flex flex-col items-center text-center animate-fade-up ${delay}`}>
    <div className="w-32 h-32 rounded-full border-4 border-java-cream overflow-hidden mb-4 shadow-md relative group bg-gradient-to-br from-java-cream via-java-gold/20 to-java-brown/10">
        {/* Decorative Initial */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-4xl font-script text-java-gold">{name.charAt(0)}</span>
        </div>
    </div>
    <h2 className="font-script text-4xl text-java-dark mb-1">{name}</h2>
    <p className="font-cinzel text-xs text-java-brown font-bold mb-3 uppercase tracking-wider">{fullName}</p>
    <p className="font-sans text-xs text-stone-500 mb-1">{role} dari pasangan</p>
    <p className="font-serif text-sm text-stone-700 italic mb-4">{parents}</p>
  </div>
);

const CoupleSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 flex flex-col items-center">
      <div className="text-center mb-10 animate-fade-up">
        <h2 className="font-cinzel text-2xl text-java-dark mb-2">Mempelai</h2>
        <div className="h-1 w-12 bg-java-gold mx-auto rounded-full"></div>
        <p className="font-sans text-sm text-stone-500 mt-4 max-w-xs mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>
      </div>

      <div className="space-y-8 w-full max-w-sm">
        <ProfileCard 
            name={COUPLE_NAME_BRIDE}
            fullName="Siti Mardliyah"
            role="Putri"
            parents="Bpk. Suparman & Ibu Siti Khoiriyah"
            delay="delay-100"
        />
        
        <div className="text-center font-script text-4xl text-java-gold animate-fade-up delay-200">&</div>

        <ProfileCard 
            name={COUPLE_NAME_GROOM}
            fullName="Miftakun Naim"
            role="Putra"
            parents="Bpk. Zaenuri & Ibu Siti Musyarofah"
            delay="delay-300"
        />
      </div>
    </div>
  );
};

export default CoupleSection;
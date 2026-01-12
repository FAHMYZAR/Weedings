import React from 'react';
import { Home, Heart, Calendar, MapPin, MessageCircleHeart } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: Tab.HOME, icon: Home, label: 'Home' },
    { id: Tab.COUPLE, icon: Heart, label: 'Pasangan' },
    { id: Tab.EVENT, icon: Calendar, label: 'Acara' },
    { id: Tab.LOCATION, icon: MapPin, label: 'Lokasi' },
    { id: Tab.WISHES, icon: MessageCircleHeart, label: 'Ucapan' },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/50 p-2 flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300 ${
                isActive ? 'text-java-brown scale-105 bg-java-cream' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <item.icon 
                size={20} 
                className={`mb-1 transition-transform ${isActive ? '-translate-y-1' : ''}`} 
                fill={isActive ? 'currentColor' : 'none'}
              />
              <span className={`text-[10px] font-sans font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
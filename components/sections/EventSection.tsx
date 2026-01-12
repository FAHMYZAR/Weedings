import React from 'react';
import { EVENTS } from '../../constants';
import { MapPin, Clock, CalendarCheck, Music } from 'lucide-react';
import { BatikPattern } from '../JavaneseDecor';

const EventSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 flex flex-col items-center relative">
       {/* Background accent */}
       <div className="absolute inset-0 bg-java-cream/50 -z-10"></div>
       <BatikPattern className="opacity-5" />

      <div className="text-center mb-10 animate-fade-up">
        <h2 className="font-cinzel text-2xl text-java-dark mb-2">Rangkaian Acara</h2>
        <div className="h-1 w-12 bg-java-gold mx-auto rounded-full"></div>
      </div>

      <div className="w-full max-w-sm space-y-6">
        {EVENTS.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
            {/* Header Stripe with Batik Pattern */}
            <div className="h-2 bg-java-brown w-full relative"></div>
            
            <div className="p-6 text-center">
              <h3 className="font-script text-4xl text-java-gold mb-2">{event.title}</h3>
              <div className="flex flex-col items-center gap-4 mt-6">
                
                <div className="flex items-center gap-3 text-stone-600 bg-stone-50 px-4 py-2 rounded-full w-full justify-center">
                  <CalendarCheck size={16} className="text-java-brown" />
                  <span className="font-sans font-medium text-sm">{event.date}</span>
                </div>

                <div className="flex items-center gap-3 text-stone-600 bg-stone-50 px-4 py-2 rounded-full w-full justify-center">
                  <Clock size={16} className="text-java-brown" />
                  <span className="font-sans font-medium text-sm">{event.time}</span>
                </div>

                <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-java-dark font-bold font-serif text-lg">
                        <MapPin size={20} />
                        <span>{event.location}</span>
                    </div>
                    <p className="text-xs text-stone-500 font-sans leading-relaxed px-4">
                        {event.address}
                    </p>
                </div>

                {event.entertainment && (
                  <div className="flex items-center gap-3 text-stone-600 bg-java-cream/50 px-4 py-2 rounded-full w-full justify-center">
                    <Music size={16} className="text-java-brown" />
                    <span className="font-sans text-sm">{event.entertainment}</span>
                  </div>
                )}

                {event.googleMapsUrl && (
                  <a 
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-6 py-2 bg-java-dark text-java-cream text-xs font-bold rounded-full hover:bg-java-brown transition-colors"
                  >
                    Lihat Lokasi (Google Maps)
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 bg-white/60 backdrop-blur rounded-xl border border-dashed border-java-gold text-center animate-fade-up delay-500">
            <p className="font-serif text-stone-700 italic text-sm">
                "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai."
            </p>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
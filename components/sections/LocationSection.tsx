import React from 'react';
import { EVENTS } from '../../constants';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { BatikPattern } from '../JavaneseDecor';

const LocationSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-6 flex flex-col items-center relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-stone-50 -z-10"></div>
      <BatikPattern className="opacity-3" />

      <div className="text-center mb-10 animate-fade-up">
        <h2 className="font-cinzel text-2xl text-java-dark mb-2">Lokasi Acara</h2>
        <div className="h-1 w-12 bg-java-gold mx-auto rounded-full"></div>
        <p className="text-xs text-stone-500 mt-2">Klik untuk membuka di Google Maps</p>
      </div>

      <div className="w-full max-w-sm space-y-6">
        {EVENTS.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
            {/* Header */}
            <div className="bg-java-brown text-white p-4 text-center">
              <h3 className="font-script text-2xl">{event.title}</h3>
              <p className="text-xs opacity-90 mt-1">{event.date}</p>
            </div>
            
            <div className="p-6">
              {/* Location Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-java-brown mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-java-dark">{event.location}</p>
                    <p className="text-sm text-stone-600">{event.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden mb-4 relative group cursor-pointer">
                {event.googleMapsUrl && (
                  <a 
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    {/* Map background image */}
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{
                        backgroundImage: `url('./foto_prof/lokasi/${event.googleMapsUrl.includes('-7.049036') ? 'maps_wanita.png' : 'maps_pria.png'}')`
                      }}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur font-mono">
                        {event.googleMapsUrl.includes('-7.049036') ? '-7.049036, 111.224052' : '-7.027723, 111.388412'}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-java-dark flex items-center gap-1">
                          <ExternalLink size={12} />
                          Buka Maps
                        </span>
                      </div>
                    </div>
                  </a>
                )}
              </div>

              {/* Action Button */}
              {event.googleMapsUrl && (
                <a 
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-java-dark text-white py-3 rounded-lg font-bold text-sm hover:bg-java-brown transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation size={16} />
                  Buka di Google Maps
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-white/60 backdrop-blur rounded-xl border border-dashed border-java-gold text-center animate-fade-up delay-500">
          <p className="font-serif text-stone-700 italic text-sm">
            "Untuk kemudahan perjalanan, silakan gunakan aplikasi navigasi dengan koordinat yang tersedia."
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
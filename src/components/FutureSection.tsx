import React from 'react';
import { FutureItem } from '../types';
import { Compass, Circle, Camera, MapPin, HeartHandshake } from 'lucide-react';

interface FutureSectionProps {
  items: FutureItem[];
}

export const FutureSection: React.FC<FutureSectionProps> = ({ items }) => {
  const places = items.filter((i) => i.category === 'places');
  const activities = items.filter((i) => i.category === 'activities');
  const photos = items.filter((i) => i.category === 'photos');

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-4 text-[#FAF7F2]">
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
          <Compass className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Gelecek Sayfalarımız</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          Henüz yazmadığımız sayfalar.
        </h2>

        <p className="font-handwriting text-xl text-[#F4C2C2]">
          "Burayı birlikte doldurucaz.."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
        {/* Places */}
        <div className="bg-[#251D20] p-4 rounded-xl border border-[#3D2C30] space-y-2">
          <div className="flex items-center gap-1.5 text-[#E8B4B4] border-b border-[#3D2C30] pb-2 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#E8B4B4]" />
            <h3 className="font-serif text-sm">Gideceğimiz Yerler</h3>
          </div>
          <ul className="space-y-2">
            {places.map((item) => (
              <li key={item.id} className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <Circle className="w-3 h-3 text-[#E8B4B4] shrink-0 mt-0.5" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="bg-[#251D20] p-4 rounded-xl border border-[#3D2C30] space-y-2">
          <div className="flex items-center gap-1.5 text-[#E8B4B4] border-b border-[#3D2C30] pb-2 font-semibold">
            <HeartHandshake className="w-3.5 h-3.5 text-[#E8B4B4]" />
            <h3 className="font-serif text-sm">Yapacaklarımız</h3>
          </div>
          <ul className="space-y-2">
            {activities.map((item) => (
              <li key={item.id} className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <Circle className="w-3 h-3 text-[#E8B4B4] shrink-0 mt-0.5" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photos */}
        <div className="bg-[#251D20] p-4 rounded-xl border border-[#3D2C30] space-y-2">
          <div className="flex items-center gap-1.5 text-[#E8B4B4] border-b border-[#3D2C30] pb-2 font-semibold">
            <Camera className="w-3.5 h-3.5 text-[#E8B4B4]" />
            <h3 className="font-serif text-sm">Çekeceğimiz Kareler</h3>
          </div>
          <ul className="space-y-2">
            {photos.map((item) => (
              <li key={item.id} className="flex items-start gap-2 text-xs font-sans text-[#FAF7F2]/90">
                <Circle className="w-3 h-3 text-[#E8B4B4] shrink-0 mt-0.5" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

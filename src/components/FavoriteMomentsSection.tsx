import React from 'react';
import { Memory } from '../types';
import { Star, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface FavoriteMomentsSectionProps {
  favorites: Memory[];
  onSelectPhoto: (photoUrl: string, caption?: string, title?: string, date?: string, location?: string) => void;
}

export const FavoriteMomentsSection: React.FC<FavoriteMomentsSectionProps> = ({
  favorites,
  onSelectPhoto,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-4 text-[#FAF7F2]">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/40 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
          <Star className="w-3.5 h-3.5 text-[#E8B4B4] fill-[#E8B4B4]" />
          <span>Favorilerim</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          Tekrar tekrar yaşamak isteyeceğim günler.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="bg-[#251D20] rounded-xl overflow-hidden shadow-md border border-[#3D2C30] flex flex-col group hover:shadow-lg transition-all"
          >
            <div
              onClick={() => onSelectPhoto(item.photos[0], item.caption, item.title, item.date, item.location)}
              className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer"
            >
              <ImageWithFallback
                src={item.photos[0]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-sans text-[#E8B4B4] font-semibold">
                <Calendar className="w-3 h-3 text-[#E8B4B4]" />
                <span>{item.date}</span>
                {item.location && (
                  <span className="flex items-center gap-1 text-[#FAF7F2]/70 font-normal">
                    <MapPin className="w-3 h-3 text-[#E8B4B4]" />
                    {item.location}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg text-[#FAF7F2] font-semibold">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-[#FAF7F2]/80 font-light leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

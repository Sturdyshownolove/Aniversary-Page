import React from 'react';
import { Memory } from '../types';
import { Calendar, MapPin, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface MemoryBookSectionProps {
  memories: Memory[];
  onSelectPhoto: (photoUrl: string, caption?: string, title?: string, date?: string, location?: string) => void;
}

export const MemoryBookSection: React.FC<MemoryBookSectionProps> = ({
  memories,
  onSelectPhoto,
}) => {
  return (
    <div className="w-full h-full flex flex-col py-2 space-y-4 text-[#FAF7F2]">
      {/* Header */}
      <div className="text-center space-y-1 pb-2 border-b border-[#3D2C30]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
          <BookOpen className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Bölüm 02 — Dijital Anı Defterimiz</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          Özel Anlarımız
        </h2>
      </div>

      {/* Dynamic Memories List (Renders ALL memories: mem-1, mem-2, mem-3, mem-4, mem-5, etc.) */}
      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1 my-auto">
        {memories.map((mem) => (
          <div key={mem.id} className="p-4 bg-[#251D20] border border-[#3D2C30] rounded-xl shadow-lg space-y-3">
            {/* Header Tag */}
            <div className="flex items-center justify-between text-xs font-sans text-[#E8B4B4] font-semibold border-b border-[#3D2C30] pb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E8B4B4]" />
                {mem.date}
              </span>
              {mem.location && (
                <span className="flex items-center gap-1 text-[#FAF7F2]/70 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#E8B4B4]" />
                  {mem.location}
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-semibold">
              {mem.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/90 font-light leading-relaxed">
              {mem.description}
            </p>

            {/* Photo Display based on layout type */}
            {mem.photos && mem.photos.length > 0 && (
              <>
                {mem.layoutType === 'editorial-duo' || mem.photos.length === 2 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {mem.photos.map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => onSelectPhoto(imgUrl, mem.caption, mem.title, mem.date, mem.location)}
                        className="group cursor-pointer relative overflow-hidden rounded-lg bg-black aspect-[4/3] border border-[#3D2C30]"
                      >
                        <ImageWithFallback
                          src={imgUrl}
                          alt={`${mem.title} ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : mem.layoutType === 'scrapbook-trio' || mem.photos.length >= 3 ? (
                  <div className="grid grid-cols-3 gap-2">
                    {mem.photos.map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => onSelectPhoto(imgUrl, mem.caption, mem.title, mem.date, mem.location)}
                        className="cursor-pointer bg-[#1C1719] p-1.5 shadow rounded border border-[#3D2C30] transform transition-transform hover:scale-105"
                      >
                        <div className="aspect-square overflow-hidden rounded bg-black">
                          <ImageWithFallback src={imgUrl} alt={`${mem.title} ${i}`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    onClick={() => onSelectPhoto(mem.photos[0], mem.caption, mem.title, mem.date, mem.location)}
                    className="group cursor-pointer relative overflow-hidden rounded-lg bg-black aspect-[16/9] border border-[#3D2C30]"
                  >
                    <ImageWithFallback
                      src={mem.photos[0]}
                      alt={mem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </>
            )}

            {mem.caption && (
              <div className="pt-1 text-center border-t border-[#3D2C30]">
                <p className="font-handwriting text-lg text-[#E8B4B4]">
                  "{mem.caption}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

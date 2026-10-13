import React from 'react';
import { Memory } from '../types';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface BeginningTimelineProps {
  timeline: Memory[];
  onSelectPhoto: (photoUrl: string, caption?: string) => void;
}

export const BeginningTimeline: React.FC<BeginningTimelineProps> = ({
  timeline,
  onSelectPhoto,
}) => {
  return (
    <div className="w-full flex flex-col py-2 space-y-5 text-[#FAF7F2]">
      {/* Header */}
      <div className="text-center space-y-1 pb-2 border-b border-[#3D2C30]">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans tracking-widest uppercase font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Bölüm 01 — Başlangıç Timeline</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          Her şeyin başladığı yer.
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/80 font-light max-w-md mx-auto">
          İlk adımlar, ilk bakışlar ve hikâyemizin temellerinin atıldığı o özel anlar ({timeline.length} Hatıra).
        </p>
      </div>

      {/* Timeline Items Dynamic List (Renders ALL items without 3-item limitation) */}
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {timeline.map((item, index) => (
          <div
            key={item.id || index}
            className="p-4 sm:p-5 bg-[#251D20] border border-[#3D2C30] rounded-xl shadow-lg space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#E8B4B4] font-semibold">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E8B4B4]" />
                {item.date}
              </span>
              {item.location && (
                <span className="flex items-center gap-1 text-[#FAF7F2]/70 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#E8B4B4]" />
                  {item.location}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className={`${item.photos && item.photos.length > 0 ? 'sm:col-span-7' : 'sm:col-span-12'} space-y-2`}>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-semibold">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/90 font-light leading-relaxed">
                  {item.description}
                </p>
                {item.note && (
                  <p className="font-handwriting text-lg text-[#E8B4B4] pt-1">
                    "{item.note}"
                  </p>
                )}
              </div>

              {item.photos && item.photos.length > 0 && (
                <div className="sm:col-span-5">
                  <div
                    onClick={() => onSelectPhoto(item.photos[0], item.caption || item.title)}
                    className="group cursor-pointer p-2 bg-[#171214] rounded-lg shadow border border-[#3D2C30] overflow-hidden"
                  >
                    <div className="aspect-[4/3] rounded overflow-hidden bg-[#251D20]">
                      <ImageWithFallback
                        src={item.photos[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {item.caption && (
                      <p className="mt-1.5 font-handwriting text-sm text-center text-[#E8B4B4]">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LivePhotosSectionData, LivePhotoItem } from '../types';
import { Video, Play, Sparkles, X, Volume2, VolumeX, Film } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface LivePhotosSectionProps {
  data: LivePhotosSectionData;
}

export const LivePhotosSection: React.FC<LivePhotosSectionProps> = ({ data }) => {
  const [activeVideoModal, setActiveVideoModal] = useState<LivePhotoItem | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-3 text-[#FAF7F2] relative select-none">
      {/* Header */}
      <div className="text-center space-y-1 pb-2 border-b border-[#3D2C30] shrink-0">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-[11px] font-sans uppercase font-medium">
          <Film className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Bölüm 03 — Canlı Anılar</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          {data.title || 'Hareket Eden Anılarımız'}
        </h2>
      </div>

      {/* MAIN GALLERY CONTAINER */}
      <div className="my-auto space-y-4 max-h-[64vh] overflow-y-auto pr-1">
        {/* FEATURED CENTER MAIN PHOTO */}
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative p-2 bg-[#251D20] border-2 border-[#E8B4B4]/50 rounded-2xl shadow-2xl max-w-xs sm:max-w-sm w-full overflow-hidden group"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative">
              <ImageWithFallback
                src={data.centerPhoto}
                alt="Ortadaki Ana Fotoğraf"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* 7 LIVE PHOTO VIDEOS (Sleek Modern Gallery Grid) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-sans text-[#E8B4B4] font-semibold border-b border-[#3D2C30] pb-1">
            <span className="flex items-center gap-1.5">
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {data.livePhotos.map((item, index) => (
              <motion.div
                key={item.id || index}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveVideoModal(item)}
                className="cursor-pointer bg-[#251D20] p-1.5 rounded-xl border border-[#3D2C30] hover:border-[#E8B4B4] shadow-md group relative overflow-hidden flex flex-col items-center"
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-black relative flex items-center justify-center">
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                  />

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="p-1.5 rounded-full bg-[#4A121A]/80 border border-[#E8B4B4]/60 text-[#E8B4B4] group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-[#E8B4B4]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center pt-1 shrink-0">
        <p className="font-sans text-[11px] text-[#E8B4B4]/80 flex items-center justify-center gap-1">
        </p>
      </div>

      {/* FULLSCREEN LIVE VIDEO MODAL */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoModal(null)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-xl w-full bg-[#1C1719] rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#E8B4B4]/40 space-y-4 text-[#FAF7F2]"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-[#3D2C30] pb-2">
                <span className="font-serif text-lg text-[#E8B4B4] font-semibold">
                  Canlı Anı Videomuz
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-[#251D20] text-[#E8B4B4] border border-[#3D2C30] hover:bg-[#3D2C30]"
                    title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setActiveVideoModal(null)}
                    className="p-2 rounded-full bg-[#251D20] text-[#E8B4B4] border border-[#3D2C30] hover:bg-[#3D2C30]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black relative border border-[#3D2C30] shadow-lg">
                <video
                  src={activeVideoModal.src}
                  poster={activeVideoModal.poster}
                  autoPlay
                  controls
                  playsInline
                  loop
                  muted={isMuted}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

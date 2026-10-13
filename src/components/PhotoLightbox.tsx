import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Heart } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface PhotoLightboxProps {
  photoUrl: string | null;
  caption?: string;
  location?: string;
  date?: string;
  title?: string;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photoUrl,
  caption,
  location,
  date,
  title,
  onClose,
}) => {
  // Handle ESC key press to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photoUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#251D20] hover:bg-[#3D2C30] text-[#E8B4B4] transition-colors border border-[#E8B4B4]/30 shadow-lg"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Lightbox Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl w-full bg-[#1C1719] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#E8B4B4]/40 max-h-[90vh] text-[#FAF7F2]"
        >
          {/* Image Side */}
          <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden group min-h-[300px] md:min-h-[500px]">
            <ImageWithFallback
              src={photoUrl}
              alt={title || caption || 'Fotoğraf Detayı'}
              className="w-full h-full object-contain max-h-[75vh]"
            />
          </div>

          {/* Story & Details Side */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#1C1719] overflow-y-auto">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-semibold mb-4">
                <Heart className="w-3.5 h-3.5 fill-[#E8B4B4]" />
                <span>Anı Detayı</span>
              </div>

              {title && (
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-semibold mb-3">
                  {title}
                </h3>
              )}

              <div className="flex flex-wrap gap-4 text-xs font-sans text-[#FAF7F2]/80 mb-6 font-medium">
                {date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E8B4B4]" />
                    {date}
                  </span>
                )}
                {location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E8B4B4]" />
                    {location}
                  </span>
                )}
              </div>

              {caption && (
                <div className="p-4 rounded-xl bg-[#251D20] border border-[#3D2C30] mb-4">
                  <p className="font-handwriting text-2xl text-[#E8B4B4] leading-snug">
                    "{caption}"
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#3D2C30] flex items-center justify-between">
              <span className="font-serif italic text-xs text-[#E8B4B4]">
                Sadece bizim hikâyemiz
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#4A121A] text-[#E8B4B4] text-xs font-semibold hover:bg-[#6B1F2D] border border-[#E8B4B4]/40 transition-colors shadow-md"
              >
                Kapat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

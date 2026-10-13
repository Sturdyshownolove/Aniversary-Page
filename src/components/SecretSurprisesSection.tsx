import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SecretItem } from '../types';
import { KeyRound, Sparkles, X, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageWithFallback } from './ImageWithFallback';

interface SecretSurprisesSectionProps {
  secrets: SecretItem[];
}

export const SecretSurprisesSection: React.FC<SecretSurprisesSectionProps> = ({ secrets }) => {
  const [activeSecret, setActiveSecret] = useState<SecretItem | null>(null);

  const handleOpenSecret = (secret: SecretItem) => {
    setActiveSecret(secret);
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E8B4B4', '#F4C2C2', '#FAF7F2'],
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-4 text-[#FAF7F2]">
      <div className="text-center space-y-3 my-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/40 text-[#E8B4B4] text-xs font-sans tracking-widest uppercase">
          <KeyRound className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Keşfedilebilir Sürprizler</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-semibold">
          Gizli Hatıralar & Sözler
        </h2>

        <p className="font-serif italic text-sm text-[#FAF7F2]/80 font-light">
          "Sayfaların arasına gizlenmiş küçük mesajlar..."
        </p>

        {/* Interactive Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {secrets.map((secret) => (
            <motion.button
              key={secret.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpenSecret(secret)}
              className="px-4 py-2 rounded-full bg-[#251D20] border border-[#E8B4B4]/40 text-[#E8B4B4] text-xs font-sans font-medium shadow-md hover:border-[#E8B4B4] hover:bg-[#302528] transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8B4B4] group-hover:rotate-12 transition-transform" />
              <span>{secret.triggerLabel}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Secret Modal */}
      <AnimatePresence>
        {activeSecret && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSecret(null)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-md w-full bg-[#1C1719] rounded-2xl p-6 text-center shadow-2xl border border-[#E8B4B4]/40 space-y-5 text-[#FAF7F2]"
            >
              <button
                onClick={() => setActiveSecret(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#251D20] text-[#FAF7F2]/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#4A121A] text-[#E8B4B4]">
                <Heart className="w-6 h-6 fill-[#E8B4B4]" />
              </div>

              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#E8B4B4] font-semibold">
                  Gizli Mesaj Keşfedildi
                </span>
                <h3 className="font-serif text-2xl text-[#FAF7F2] font-semibold mt-1">
                  {activeSecret.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[#251D20] border border-[#3D2C30]">
                <p className="font-handwriting text-2xl text-[#E8B4B4] leading-relaxed">
                  "{activeSecret.secretMessage}"
                </p>
              </div>

              {activeSecret.unlockedPhoto && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-md border border-[#3D2C30]">
                  <ImageWithFallback
                    src={activeSecret.unlockedPhoto}
                    alt={activeSecret.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <button
                onClick={() => setActiveSecret(null)}
                className="w-full py-2.5 rounded-full bg-[#4A121A] text-[#E8B4B4] border border-[#E8B4B4]/30 font-sans text-xs uppercase tracking-wider font-medium hover:bg-[#6B1F2D] transition-colors"
              >
                Kalbimde Saklı Kalacak
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

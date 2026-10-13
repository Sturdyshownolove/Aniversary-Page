import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

interface HeroSectionProps {
  startDateIso: string;
  tagline: string;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  startDateIso,
  tagline,
  onExploreClick,
}) => {
  const [daysCount, setDaysCount] = useState<number>(0);

  useEffect(() => {
    const calculateDays = () => {
      const start = new Date(startDateIso).getTime();
      const now = new Date().getTime();
      const diffTime = Math.max(0, now - start);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysCount(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, [startDateIso]);

  // Format date range string e.g. "18 EYLÜL 2023 — bugüne"
  const startDateFormatted = new Date(startDateIso).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).toUpperCase();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#1C1917]">
      {/* Background Dimmed & Blurred Cinematic Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=2000&q=85"
          alt="Bizim Hikâyemiz Background"
          className="w-full h-full object-cover object-center filter blur-sm scale-105 opacity-40 brightness-75 transition-transform duration-1000"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/80 via-[#1C1917]/50 to-[#1C1917]" />
      </div>

      {/* Main Emotional Reveal Content */}
      <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
        {/* Subtle decorative heart icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 inline-flex items-center justify-center p-3 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/20"
        >
          <Heart className="w-5 h-5 text-[#C48B8B] fill-[#C48B8B]/40 animate-pulse" />
        </motion.div>

        {/* Main Title: "Bizim hikâyemiz." */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#FAF7F2] font-normal tracking-tight leading-none mb-6"
        >
          Bizim hikâyemiz<span className="text-[#C48B8B]">.</span>
        </motion.h1>

        {/* Date Subtitle: "[BAŞLANGIÇ TARİHİ] — bugün" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#FAF7F2]/70 uppercase mb-4 font-light"
        >
          {startDateFormatted} — BUGÜN
        </motion.p>

        {/* Live Counter Badge: "Birlikte geçen X gün" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="my-4 px-6 py-2.5 rounded-full bg-[#4A121A]/80 border border-[#D4AF37]/30 text-[#FAF7F2] shadow-2xl backdrop-blur-md flex items-center gap-2"
        >
          <span className="font-sans text-sm font-light text-[#FAF7F2]/80">Birlikte geçen</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] tracking-wider">
            {daysCount}
          </span>
          <span className="font-sans text-sm font-light text-[#FAF7F2]/80">gün</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="font-serif italic text-base sm:text-lg text-[#FAF7F2]/80 max-w-xl mt-4 font-light leading-relaxed"
        >
          "{tagline}"
        </motion.p>
      </div>

      {/* "Hikâyeyi Aç" Scroll Interaction Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 z-10 flex flex-col items-center cursor-pointer group"
        onClick={onExploreClick}
      >
        <button
          className="font-sans text-xs uppercase tracking-[0.3em] text-[#FAF7F2]/70 group-hover:text-[#FAF7F2] transition-colors mb-3"
        >
          Hikâyeyi Aç
        </button>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-[#FAF7F2]/20 group-hover:border-[#FAF7F2]/50 bg-[#FAF7F2]/5 backdrop-blur-sm"
        >
          <ChevronDown className="w-4 h-4 text-[#FAF7F2]/80 group-hover:text-[#FAF7F2]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

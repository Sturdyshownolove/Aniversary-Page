import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MailOpen } from 'lucide-react';

interface FinalSectionProps {
  heading: string;
  subheading: string;
  letter?: string;
  footerDate: string;
  note: string;
}

export const FinalSection: React.FC<FinalSectionProps> = ({
  heading,
  subheading,
  letter,
  footerDate,
  note,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-4 text-[#FAF7F2]">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
          <MailOpen className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Sana Özel NOT</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#E8B4B4] font-normal tracking-tight">
          {heading}
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-[#FAF7F2]/80 font-light">
          {subheading}
        </p>
      </div>

      {/* Long Personal Letter Box (Renders user's full letter with scroll support) */}
      {letter && (
        <div className="my-auto p-5 sm:p-7 bg-[#251D20] border border-[#3D2C30] rounded-2xl shadow-xl space-y-4 max-h-[55vh] overflow-y-auto">
          <div className="flex items-center gap-2 border-b border-[#3D2C30] pb-2 text-[#E8B4B4]">
            <Heart className="w-4 h-4 fill-[#E8B4B4]" />
          </div>

          <div className="space-y-3 font-handwriting text-xl sm:text-2xl text-[#FAF7F2] leading-relaxed whitespace-pre-line">
            {letter}
          </div>
        </div>
      )}

      {/* Footer info */}
      <div className="text-center pt-2 border-t border-[#3D2C30] space-y-1">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#E8B4B4] font-semibold">
          {footerDate}
        </p>
        <p className="font-handwriting text-lg text-[#E8B4B4]/90">
          {note}
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { anniversaryData } from '../data/anniversaryData';
import { Heart, Sparkles, BookOpen } from 'lucide-react';
import { BeginningTimeline } from './BeginningTimeline';
import { MemoryBookSection } from './MemoryBookSection';
import { LivePhotosSection } from './LivePhotosSection';
import { LiveCounterSection } from './LiveCounterSection';
import { FutureSection } from './FutureSection';
import { FinalSection } from './FinalSection';

interface BookPagesProps {
  pageIndex: number;
  onSelectPhoto: (url: string, caption?: string, title?: string, date?: string, location?: string) => void;
  onTurnNext: () => void;
}

export const BOOK_PAGE_TITLES = [
  'Dış Kapak',
  'Önsöz & Zaman Sayacı',
  'Başlangıç Timeline',
  'Anı Defteri — Özel Anlarımız',
  'Bölüm 3 — Canlı Anılar (Live Photos)',
  'Henüz Yazmadığımız Sayfalar',
  'Kapanış — Sana Özel Mektubum',
  'Arka Kapak',
];

export const BookPages: React.FC<BookPagesProps> = ({
  pageIndex,
  onSelectPhoto,
  onTurnNext,
}) => {
  switch (pageIndex) {
    /* ==========================================
       PAGE 0: OUTSIDE FRONT COVER
       ========================================== */
    case 0:
      return (
        <div className="h-full flex flex-col items-center justify-between text-center bg-[#2A0B12] text-[#FAF7F2] p-8 sm:p-12 rounded-lg border-4 border-[#160407] shadow-2xl relative overflow-hidden my-auto">
          <div className="absolute inset-4 border border-[#E8B4B4]/40 rounded pointer-events-none" />
          <div className="absolute inset-6 border border-[#E8B4B4]/20 rounded pointer-events-none" />

          <div className="pt-6">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#E8B4B4] font-semibold">
             Sevgu Eseri
            </span>
          </div>

          <div className="space-y-4 my-auto">
            <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#E8B4B4] tracking-tight drop-shadow-md">
              Bizim Hikâyemiz
            </h1>
            <div className="w-16 h-0.5 bg-[#E8B4B4] mx-auto opacity-80" />
            <p className="font-serif italic text-lg sm:text-xl text-[#FAF7F2]/90 font-light">
              "{anniversaryData.heroTagline}"
            </p>
          </div>

          <div className="pb-4 space-y-3">
            <p className="font-sans text-xs uppercase tracking-widest text-[#E8B4B4] font-semibold">
              {anniversaryData.coupleNames.partnerName} & {anniversaryData.coupleNames.userName}
            </p>
            <button
              onClick={onTurnNext}
              className="px-6 py-2.5 rounded-full bg-[#E8B4B4] text-[#2A0B12] font-sans text-xs uppercase font-bold tracking-wider hover:bg-[#F4C2C2] transition-all shadow-lg"
            >
              Kitabı Aç
            </button>
          </div>
        </div>
      );

    /* ==========================================
       PAGE 1: FOREWORD & LIVE RELATIONSHIP COUNTER
       ========================================== */
    case 1:
      return (
        <div className="h-full flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans font-medium uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#E8B4B4]" />
              <span>Önsöz</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#E8B4B4] font-semibold">
              Birlikte Geçen Her Anın Anısına...
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#FAF7F2]/90 leading-relaxed font-light">
              Bu kitap, sıradan bir web sitesi veya fotoğraf albümü değil. İlk konuşmamızdan bu ana kadar yaşadığımız en kıymetli anıların, fotoğraflara sığmayan duyguların dijital bir anı defteridir.
            </p>

            <p className="font-handwriting text-2xl text-[#E8B4B4] pt-2">
              "İyi ki hayatımdasın sevgilim..."
            </p>
          </div>

          <div className="mt-auto">
            <LiveCounterSection startDateIso={anniversaryData.startDate} />
          </div>
        </div>
      );

    /* ==========================================
       PAGE 2: TIMELINE - ALL INITIAL CONVERSATIONS & DATES
       ========================================== */
    case 2:
      return (
        <div className="h-full flex flex-col justify-between">
          <BeginningTimeline
            timeline={anniversaryData.timeline}
            onSelectPhoto={onSelectPhoto}
          />
        </div>
      );

    /* ==========================================
       PAGE 3: MEMORY BOOK - ALL EDITORIAL MEMORIES
       ========================================== */
    case 3:
      return (
        <MemoryBookSection
          memories={anniversaryData.memories}
          onSelectPhoto={onSelectPhoto}
        />
      );

    /* ==========================================
       PAGE 4: BÖLÜM 3 — CANLI ANILAR (LIVE PHOTOS - .MOV VIDEOS)
       ========================================== */
    case 4:
      return (
        anniversaryData.livePhotosSection ? (
          <LivePhotosSection data={anniversaryData.livePhotosSection} />
        ) : null
      );

    /* ==========================================
       PAGE 5: HENÜZ YAZMADIĞIMIZ SAYFALAR (FUTURE)
       ========================================== */
    case 5:
      return <FutureSection items={anniversaryData.futureBucketList} />;

    /* ==========================================
       PAGE 6: FINAL / KAPANIŞ - SANA ÖZEL MEKTUBUM
       ========================================== */
    case 6:
      return <FinalSection {...anniversaryData.finalMessage} />;

    /* ==========================================
       PAGE 7: ARKA KAPAK (BACK COVER)
       ========================================== */
    case 7:
      return (
        <div className="h-full flex flex-col items-center justify-center text-center bg-[#2A0B12] text-[#FAF7F2] p-8 sm:p-12 rounded-lg border-4 border-[#160407] shadow-2xl relative overflow-hidden my-auto space-y-6">
          <div className="absolute inset-4 border border-[#E8B4B4]/40 rounded pointer-events-none" />

          <Heart className="w-10 h-10 text-[#E8B4B4] fill-[#E8B4B4]/30" />

          <h2 className="font-serif text-3xl sm:text-4xl text-[#E8B4B4]">
            Bizim Hikâyemiz
          </h2>

          <p className="font-serif italic text-base text-[#FAF7F2]/90">
            Sonsuza dek sürecek bir aşkın sayfaları...
          </p>

          <span className="font-sans text-xs uppercase tracking-widest text-[#E8B4B4] pt-4 font-semibold">
            {anniversaryData.anniversaryDateText}
          </span>
        </div>
      );

    default:
      return null;
  }
};

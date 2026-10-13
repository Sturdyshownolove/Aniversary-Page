import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, List, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface BookContainerProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageTitles: string[];
  children: (pageIndex: number) => React.ReactNode;
}

export const BookContainer: React.FC<BookContainerProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  pageTitles,
  children,
}) => {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Play subtle paper flip audio effect
  const playPageTurnSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/24/audio_349d9e689d.mp3?filename=paper-flip-1.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch {
      // ignore
    }
  }, [soundEnabled]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setFlipDirection('next');
      playPageTurnSound();
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange, playPageTurnSound]);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 0) {
      setFlipDirection('prev');
      playPageTurnSound();
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange, playPageTurnSound]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  // Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      goToNextPage();
    } else if (diff < -50) {
      goToPrevPage();
    }
    setTouchStart(null);
  };

  const isCover = currentPage === 0;
  const isBackCover = currentPage === totalPages - 1;

  return (
    <div
      className="min-h-screen w-full bg-[#141012] flex flex-col items-center justify-between py-4 px-3 sm:px-6 relative overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 bg-radial from-[#4A121A]/30 via-[#141012] to-[#141012] pointer-events-none" />

      {/* Top Header Bar */}
      <header className="w-full max-w-5xl flex items-center justify-between z-30 py-2 border-b border-[#E8B4B4]/20 text-[#FAF7F2]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#E8B4B4]" />
          <span className="font-serif text-base sm:text-lg font-semibold text-[#E8B4B4] tracking-wide">
            Bizim Hikâyemiz
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-sans">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#281F22] hover:bg-[#382B2F] border border-[#E8B4B4]/30 text-[#FAF7F2] font-medium transition-all"
          >
            <List className="w-3.5 h-3.5 text-[#E8B4B4]" />
            <span>İçindekiler</span>
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-[#281F22] hover:bg-[#382B2F] border border-[#E8B4B4]/30 text-[#FAF7F2] transition-all"
            title={soundEnabled ? 'Sayfa Sesini Kapat' : 'Sayfa Sesini Aç'}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#E8B4B4]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-gray-400" />
            )}
          </button>
        </div>
      </header>

      {/* Main 3D Book Frame Container */}
      <div className="relative w-full max-w-4xl flex-1 flex items-center justify-center my-3 z-20">
        {/* Book Outer Shell */}
        <div
          className={`relative w-full h-[78vh] sm:h-[82vh] bg-[#2A0B12] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border-4 border-[#160407] p-2 sm:p-4 transition-all duration-700 flex flex-col justify-between ${
            isCover ? 'max-w-lg' : ''
          }`}
        >
          {/* Left Spine Fold Shadow */}
          {!isCover && !isBackCover && (
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/50 to-transparent z-30 pointer-events-none rounded-l-xl" />
          )}

          {/* Rose Gold Ribbon Bookmark */}
          <div className="absolute right-8 -top-3 w-4 h-20 bg-[#E8B4B4] shadow-md z-40 rounded-b-md" />

          {/* Inner Paper Page Viewport */}
          <div className="relative w-full h-full bg-[#1C1719] rounded-xl overflow-hidden shadow-2xl flex border border-[#382A2E]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{
                  rotateY: flipDirection === 'next' ? 45 : -45,
                  opacity: 0.4,
                  scale: 0.98,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotateY: flipDirection === 'next' ? -45 : 45,
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex flex-col justify-between p-4 sm:p-8 overflow-y-auto text-[#FAF7F2]"
                style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
              >
                {children(currentPage)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <footer className="w-full max-w-md z-30 bg-[#281F22]/90 backdrop-blur-md border border-[#E8B4B4]/30 rounded-full px-4 py-2 flex items-center justify-between shadow-2xl text-[#FAF7F2]">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
            currentPage === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'bg-[#4A121A] text-[#FAF7F2] hover:bg-[#6B1F2D]'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Önceki Sayfa</span>
        </button>

        {/* Page Progress Indicator */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-xs text-[#E8B4B4] font-semibold tracking-wide">
            {currentPage === 0
              ? 'Dış Kapak'
              : currentPage === totalPages - 1
              ? 'Arka Kapak'
              : `Sayfa ${currentPage} / ${totalPages - 2}`}
          </span>
          <div className="w-20 sm:w-28 h-1 bg-[#FAF7F2]/20 rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-[#E8B4B4] transition-all duration-300"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
            currentPage === totalPages - 1
              ? 'opacity-40 cursor-not-allowed'
              : 'bg-[#4A121A] text-[#FAF7F2] hover:bg-[#6B1F2D]'
          }`}
        >
          <span className="hidden sm:inline">Sonraki Sayfa</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </footer>

      {/* Table of Contents Drawer */}
      <AnimatePresence>
        {isTocOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-[#1C1719] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#E8B4B4]/40 space-y-4 text-[#FAF7F2]"
            >
              <div className="flex items-center justify-between border-b border-[#382A2E] pb-3">
                <div className="flex items-center gap-2 text-[#E8B4B4]">
                  <Sparkles className="w-4 h-4 text-[#E8B4B4]" />
                  <h3 className="font-serif text-xl font-bold">Kitap İçindekiler</h3>
                </div>
                <button
                  onClick={() => setIsTocOpen(false)}
                  className="px-3 py-1 bg-[#281F22] rounded-full text-xs font-sans hover:bg-[#382B2F] text-[#E8B4B4]"
                >
                  Kapat
                </button>
              </div>

              <div className="space-y-1.5 max-h-[55vh] overflow-y-auto pr-1">
                {pageTitles.map((title, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFlipDirection(idx > currentPage ? 'next' : 'prev');
                      playPageTurnSound();
                      onPageChange(idx);
                      setIsTocOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all text-xs sm:text-sm font-sans ${
                      currentPage === idx
                        ? 'bg-[#4A121A] text-[#E8B4B4] font-semibold border border-[#E8B4B4]/30'
                        : 'bg-[#281F22] text-[#FAF7F2]/90 hover:bg-[#382B2F]'
                    }`}
                  >
                    <span>{title}</span>
                    <span className="text-xs opacity-60">
                      {idx === 0 ? 'Kapak' : idx === totalPages - 1 ? 'Arka' : `Sayfa ${idx}`}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

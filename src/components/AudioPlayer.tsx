import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerProps {
  track: {
    title: string;
    artist: string;
    src: string;
  };
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(track.src);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [track.src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback prevented:', err));
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mr-3 px-3 py-1.5 bg-[#FAF7F2]/90 backdrop-blur-md border border-[#C48B8B]/30 rounded-full shadow-lg text-xs font-sans text-[#1C1917] flex items-center gap-2"
          >
            <Music className="w-3.5 h-3.5 text-[#4A121A] animate-pulse" />
            <span className="font-medium text-[#4A121A]">{track.title}</span>
            <span className="text-gray-400">•</span>
            <span className="text-[#1C1917]/70 font-light">{isPlaying ? 'Çalıyor' : 'Ortam Müziği'}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Müziği Duraklat' : 'Müziği Başlat'}
        className={`relative group p-3.5 rounded-full backdrop-blur-md border transition-all duration-500 shadow-xl ${
          isPlaying
            ? 'bg-[#4A121A] text-[#FAF7F2] border-[#4A121A] shadow-[#4A121A]/20 scale-105'
            : 'bg-[#FAF7F2]/80 text-[#4A121A] border-[#C48B8B]/40 hover:border-[#4A121A] hover:bg-[#FAF7F2]'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center justify-center gap-0.5 w-5 h-5">
            <span className="w-0.5 h-3 bg-[#FAF7F2] rounded-full animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-4 bg-[#FAF7F2] rounded-full animate-[bounce_1s_infinite_300ms]" />
            <span className="w-0.5 h-2 bg-[#FAF7F2] rounded-full animate-[bounce_1s_infinite_200ms]" />
            <span className="w-0.5 h-4.5 bg-[#FAF7F2] rounded-full animate-[bounce_1s_infinite_400ms]" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-[#4A121A]" />
        )}

        {/* Pulse ring when not playing to subtly invite user */}
        {!isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#4A121A]/20 animate-ping pointer-events-none opacity-40" />
        )}
      </button>
    </div>
  );
};

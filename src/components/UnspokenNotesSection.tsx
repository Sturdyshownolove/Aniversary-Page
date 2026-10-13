import React from 'react';
import { NoteItem } from '../types';
import { FileText, Pin } from 'lucide-react';

interface UnspokenNotesSectionProps {
  notes: NoteItem[];
}

export const UnspokenNotesSection: React.FC<UnspokenNotesSectionProps> = ({ notes }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2 space-y-4 text-[#FAF7F2]">
      {/* Header */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
          <FileText className="w-3.5 h-3.5 text-[#E8B4B4]" />
          <span>Kişisel Notlar</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#E8B4B4] font-semibold tracking-tight">
          Fotoğraflara sığmayan şeyler.
        </h2>

        <p className="font-sans text-xs text-[#FAF7F2]/80 font-light">
          Hiçbir kadraja girmeyen ama aklımdan hiç çıkmayan küçük, tatlı ayrıntılar...
        </p>
      </div>

      {/* Grid of Notes (Renders ALL notes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto max-h-[60vh] overflow-y-auto pr-1">
        {notes.map((note, index) => {
          const deg = note.rotationDegree || (index % 2 === 0 ? -1.5 : 1.5);
          return (
            <div
              key={note.id || index}
              style={{ transform: `rotate(${deg}deg)` }}
              className="relative p-4 bg-[#2C2124] rounded-xl shadow-lg border border-[#4D353B] flex flex-col justify-between space-y-2 hover:scale-105 transition-transform"
            >
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[#E8B4B4]">
                <Pin className="w-4 h-4 fill-[#E8B4B4]" />
              </div>

              <p className="font-handwriting text-lg sm:text-xl text-[#FAF7F2] leading-snug pt-1">
                "{note.text}"
              </p>

              {note.date && (
                <span className="font-serif italic text-xs text-[#E8B4B4] text-right block">
                  — {note.date}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

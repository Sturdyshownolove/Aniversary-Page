import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface LiveCounterSectionProps {
  startDateIso: string;
}

interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const LiveCounterSection: React.FC<LiveCounterSectionProps> = ({ startDateIso }) => {
  const [timeDiff, setTimeDiff] = useState<TimeDifference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDateIso);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthLastDay;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeDiff({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDateIso]);

  const units = [
    { label: 'Yıl', value: timeDiff.years },
    { label: 'Ay', value: timeDiff.months },
    { label: 'Gün', value: timeDiff.days },
    { label: 'Saat', value: timeDiff.hours },
    { label: 'Dakika', value: timeDiff.minutes },
    { label: 'Saniye', value: timeDiff.seconds },
  ];

  return (
    <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#251D20] border border-[#E8B4B4]/30 shadow-md text-center space-y-3 text-[#FAF7F2]">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A121A] border border-[#E8B4B4]/30 text-[#E8B4B4] text-xs font-sans uppercase font-medium">
        <Clock className="w-3.5 h-3.5 text-[#E8B4B4]" />
        <span>Zaman Sayacı</span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-[#E8B4B4] font-semibold">
        Birlikte Geçirdiğimiz Her An
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
        {units.map((unit, i) => (
          <div
            key={i}
            className="p-2 rounded-lg bg-[#171214] border border-[#3D2C30] flex flex-col items-center justify-center"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#E8B4B4]">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-[#FAF7F2]/70 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

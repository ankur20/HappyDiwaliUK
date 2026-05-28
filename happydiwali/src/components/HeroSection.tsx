import React, { useEffect, useState } from 'react';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

export const HeroSection: React.FC = () => {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    // Diwali 2026 is on November 8, 2026
    const targetDate = new Date('November 8, 2026 00:00:00 GMT').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds, isOver: false });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between items-center pt-32 pb-12 px-4 select-none z-10"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none z-0"></div>

      <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto text-center relative z-10">
        
        {/* Floating Diya Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/15 bg-amber-500/5 text-amber-900 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.02)]">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Celebrating the Triumph of Light Over Darkness</span>
        </div>

        {/* Main Title */}
        <h1 className="font-decorative text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider leading-none mb-6">
          <span className="block text-stone-800">HAPPY</span>
          <span className="block bg-gradient-to-r from-amber-600 via-amber-800 to-amber-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            DIWALI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-700 font-light text-base sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bringing the warmth, joy, and magical glow of the{' '}
          <span className="text-amber-700 font-medium">Festival of Lights</span>{' '}
          to the United Kingdom.
        </p>

        {/* Giant Glowing Diya Hero Image / SVG Component */}
        <div className="relative w-44 h-44 mb-10 flex items-center justify-center">
          {/* Pulsing light rings */}
          <div className="absolute w-40 h-40 rounded-full bg-amber-500/5 blur-xl animate-pulse"></div>
          <div className="absolute w-28 h-28 rounded-full bg-amber-600/10 blur-lg pulse-glow-gold"></div>

          <svg 
            className="w-36 h-36 drop-shadow-[0_10px_20px_rgba(139,92,26,0.15)]" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Clay Diya Body */}
            <path 
              d="M15 55C15 76 30 82 50 82C70 82 85 76 85 55C85 55 85 48 50 51.5C15 48 15 55 15 55Z" 
              fill="url(#diyaClayGrad)"
              stroke="#5c2007"
              strokeWidth="0.8"
            />
            {/* Decorative gold pattern on Diya */}
            <path 
              d="M20 54.5C26 59 38 61.5 50 61.5C62 61.5 74 59 80 54.5" 
              stroke="#f59e0b" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeDasharray="1 3"
              opacity="0.8"
            />
            <circle cx="50" cy="72" r="3" fill="#f59e0b" opacity="0.8" />
            <circle cx="35" cy="69" r="2" fill="#d97706" opacity="0.8" />
            <circle cx="65" cy="69" r="2" fill="#d97706" opacity="0.8" />

            {/* Glowing Wick */}
            <path d="M50 48L50 52" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />

            {/* Flickering Flame */}
            <path 
              className="diya-flame-flicker origin-bottom"
              d="M50 18C55.5 28.5 59.5 35 59.5 41C59.5 46.5 55.5 51 50 51C44.5 51 40.5 46.5 40.5 41C40.5 35 44.5 28.5 50 18Z" 
              fill="url(#diyaFlameGrad)"
            />
            <defs>
              <linearGradient id="diyaClayGrad" x1="15" y1="55" x2="85" y2="82" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="25%" stopColor="#78350f" />
                <stop offset="50%" stopColor="#92400e" />
                <stop offset="75%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
              <linearGradient id="diyaFlameGrad" x1="50" y1="18" x2="50" y2="51" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffde" />
                <stop offset="20%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="85%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Countdown Timer Widget */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-amber-600/15 px-6 py-4 max-w-md w-full mx-auto shadow-[0_4px_25px_rgba(139,92,26,0.05)]">
          <div className="flex items-center justify-center gap-2 text-amber-900 text-xs sm:text-sm font-semibold mb-3">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>Countdown to Diwali 2026 (Nov 8)</span>
          </div>

          {countdown.isOver ? (
            <span className="text-xl font-bold text-amber-800 animate-pulse">
              🪔 Shubh Diwali! The celebrations are here! 🪔
            </span>
          ) : (
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-700">{countdown.days}</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Days</div>
              </div>
              <div className="border-l border-stone-200">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700">{String(countdown.hours).padStart(2, '0')}</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Hours</div>
              </div>
              <div className="border-l border-stone-200">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700">{String(countdown.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Mins</div>
              </div>
              <div className="border-l border-stone-200">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700">{String(countdown.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Secs</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Down arrow scroll button */}
      <button 
        onClick={scrollToAbout}
        className="relative z-10 flex flex-col items-center gap-1.5 text-stone-500 hover:text-amber-800 transition-colors duration-300 mt-8 animate-bounce cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Explore Diwali</span>
        <ChevronDown className="w-5 h-5 group-hover:scale-110" />
      </button>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { FirecrackerCanvas } from './FirecrackerCanvas';

interface GreetingOverlayProps {
  onClose: () => void;
}

export const GreetingOverlay: React.FC<GreetingOverlayProps> = ({ onClose }) => {
  const [to, setTo] = useState('Loved One');
  const [from, setFrom] = useState('A Dear Friend');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState({
    bgGradient: "from-red-950 via-rose-900 to-red-950",
    borderColor: "border-amber-400/50",
    textColor: "text-amber-200"
  });

  const messages = [
    "May the divine light of Diwali spread peace, prosperity, happiness, and good health in your life. Wishing you a truly magical year ahead!",
    "Wishing you a year filled with sweet treats, sparkling laughter, and beautiful memories. May your home be blessed with warmth and light. Happy Diwali!",
    "As we light diyas on this dark night, may your life be filled with hope, success, and infinite joy. Sending warmest wishes from across the miles!",
    "May this festival of lights illuminate your path toward success and bring a glowing smile to your face. Have an auspicious and safe Diwali!"
  ];

  const designs = {
    "crimson-gold": {
      bgGradient: "from-red-950 via-rose-900 to-red-950",
      borderColor: "border-amber-400/50",
      textColor: "text-amber-200"
    },
    "midnight-indigo": {
      bgGradient: "from-indigo-950 via-purple-950 to-slate-950",
      borderColor: "border-purple-400/40",
      textColor: "text-purple-200"
    },
    "emerald-teal": {
      bgGradient: "from-teal-950 via-emerald-900 to-teal-950",
      borderColor: "border-amber-400/30",
      textColor: "text-teal-200"
    },
    "amber-glow": {
      bgGradient: "from-amber-950 via-orange-950 to-stone-900",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-200"
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const toParam = params.get('to');
    const fromParam = params.get('from');
    const msgIndexParam = params.get('msg');
    const bgParam = params.get('bg');

    if (toParam) setTo(toParam);
    if (fromParam) setFrom(fromParam);

    if (msgIndexParam) {
      const index = parseInt(msgIndexParam, 10);
      if (index >= 0 && index < messages.length) {
        setMessage(messages[index]);
      } else {
        setMessage(messages[0]);
      }
    } else {
      setMessage(messages[0]);
    }

    if (bgParam && bgParam in designs) {
      setTheme(designs[bgParam as keyof typeof designs]);
    }
  }, []);

  const handleBuildOwn = () => {
    onClose();
    // Smooth scroll to greetings editor section
    setTimeout(() => {
      const element = document.getElementById('greetings');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-[#fbf8f3]/95 backdrop-blur-md animate-in fade-in duration-500">
      {/* Full screen canvas firecrackers for greeting card backdrop */}
      <FirecrackerCanvas />

      {/* Overlay Content Block */}
      <div className="relative z-10 w-full max-w-md mx-4 select-none animate-in zoom-in-95 duration-500 flex flex-col items-center">
        
        {/* Floating congratulations banner */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-600/20 bg-amber-600/10 text-amber-950 text-xs font-bold uppercase tracking-widest animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-amber-750 animate-spin" />
          <span>You received a greeting!</span>
        </div>

        {/* Greeting Card Box */}
        <div 
          className={`w-full aspect-[3/4.2] rounded-3xl border-2 ${theme.borderColor} bg-gradient-to-b ${theme.bgGradient} p-6 sm:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.3)] relative overflow-hidden`}
        >
          {/* Card background glowing rings */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)] pointer-events-none"></div>

          {/* Sparkles */}
          <div className="absolute top-10 left-10 w-1.5 h-1.5 rounded-full bg-amber-200 animate-ping"></div>
          <div className="absolute top-32 right-12 w-2 h-2 rounded-full bg-amber-300 animate-pulse"></div>
          <div className="absolute bottom-24 left-16 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></div>

          {/* Top border decoration */}
          <div className="flex justify-center items-center gap-1 opacity-70">
            <span className="w-2.5 h-2.5 rounded-full border border-amber-500/40 flex items-center justify-center"><span className="w-1 h-1 bg-amber-400 rounded-full"></span></span>
            <div className="h-[1px] w-12 bg-amber-500/30"></div>
            {/* Little Diya */}
            <svg className="w-8 h-8 text-amber-400" viewBox="0 0 100 100" fill="none">
              <path d="M20 60C20 72 35 77 50 77C65 77 80 72 80 60C80 60 80 54 50 57C20 54 20 60 20 60Z" fill="#78350f" />
              <path className="diya-flame-flicker origin-bottom" d="M50 25C54 33 56 37 56 42C56 46 53 49 50 49C47 49 44 46 44 42C44 37 46 33 50 25Z" fill="#f59e0b" />
            </svg>
            <div className="h-[1px] w-12 bg-amber-500/30"></div>
            <span className="w-2.5 h-2.5 rounded-full border border-amber-500/40 flex items-center justify-center"><span className="w-1 h-1 bg-amber-400 rounded-full"></span></span>
          </div>

          {/* Main Content */}
          <div className="text-center my-auto space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-amber-500/80 uppercase block">Dear</span>
              <h4 className="font-decorative text-2xl sm:text-3xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {to}
              </h4>
            </div>

            {/* Dividers */}
            <div className="flex justify-center text-amber-400 gap-1.5 opacity-60">
              <span>✦</span>
              <span className="text-lg">✦</span>
              <span>✦</span>
            </div>

            {/* Message */}
            <p className={`text-sm sm:text-base font-light leading-relaxed italic ${theme.textColor}`}>
              "{message}"
            </p>

            {/* Dividers */}
            <div className="flex justify-center text-amber-400 gap-1.5 opacity-60">
              <span>✦</span>
              <span className="text-lg">✦</span>
              <span>✦</span>
            </div>

            {/* From signature */}
            <div className="space-y-1">
              <span className="text-[9px] font-medium tracking-widest text-amber-500/80 uppercase block">With Warm Regards,</span>
              <h5 className="font-display text-xl font-bold text-gray-200">
                {from}
              </h5>
            </div>
          </div>

          {/* Bottom Card border decoration */}
          <div className="text-center text-[9px] uppercase tracking-widest text-amber-500/40">
            ✦ HappyDiwali.co.uk ✦
          </div>
        </div>

        {/* Action buttons outside card */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            onClick={handleBuildOwn}
            className="flex-1 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Create Your Own Card</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border border-stone-200 hover:border-stone-300 bg-white/80 hover:bg-white text-stone-700 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm"
          >
            <span>Enter Site</span>
          </button>
        </div>

      </div>
    </div>
  );
};

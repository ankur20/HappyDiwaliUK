import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

interface CardDesign {
  id: string;
  name: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
}

export const GreetingsCreator: React.FC = () => {
  const [to, setTo] = useState('My Loved Ones');
  const [from, setFrom] = useState('Your Name');
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(0);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const messages = [
    "May the divine light of Diwali spread peace, prosperity, happiness, and good health in your life. Wishing you a truly magical year ahead!",
    "Wishing you a year filled with sweet treats, sparkling laughter, and beautiful memories. May your home be blessed with warmth and light. Happy Diwali!",
    "As we light diyas on this dark night, may your life be filled with hope, success, and infinite joy. Sending warmest wishes from across the miles!",
    "May this festival of lights illuminate your path toward success and bring a glowing smile to your face. Have an auspicious and safe Diwali!"
  ];

  const designs: CardDesign[] = [
    {
      id: "crimson-gold",
      name: "Crimson & Gold",
      bgGradient: "from-red-950 via-rose-900 to-red-950",
      borderColor: "border-amber-400/50",
      textColor: "text-amber-200",
      accentColor: "text-amber-400"
    },
    {
      id: "midnight-indigo",
      name: "Midnight Indigo",
      bgGradient: "from-indigo-950 via-purple-950 to-slate-950",
      borderColor: "border-purple-400/40",
      textColor: "text-purple-200",
      accentColor: "text-amber-400"
    },
    {
      id: "emerald-teal",
      name: "Emerald Peacock",
      bgGradient: "from-teal-950 via-emerald-900 to-teal-950",
      borderColor: "border-amber-400/30",
      textColor: "text-teal-200",
      accentColor: "text-amber-400"
    },
    {
      id: "amber-glow",
      name: "Amber Warmth",
      bgGradient: "from-amber-950 via-orange-950 to-stone-900",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-200",
      accentColor: "text-amber-400"
    }
  ];

  const getShareLink = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams();
    params.set('to', to);
    params.set('from', from);
    params.set('msg', String(selectedMessageIndex));
    params.set('bg', designs[selectedDesignIndex].id);
    return `${baseUrl}?card=true&${params.toString()}`;
  };

  const handleCopyLink = () => {
    const link = getShareLink();
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section 
      id="greetings" 
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none z-10"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-600/15 bg-purple-600/5 text-purple-900 text-xs font-semibold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span>Interactive Greeting Builder</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent mb-4">
          Send a Magical Greeting Link
        </h2>
        <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6"></div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
          Create a personalized, animated digital greeting card. You can configure names, select sweet wishes, choose themes, and generate a unique link to send to your friends and family over WhatsApp, Messenger, or email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Editor Form Panel */}
        <div className="lg:col-span-5 bg-white/60 backdrop-blur-xl rounded-3xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-800 mb-2">Configure Card</h3>

            {/* Recipient Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">To (Recipient's Name)</label>
              <input 
                type="text" 
                maxLength={30}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="E.g., Grandma or Smith Family"
                className="w-full bg-white/90 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-amber-600/50 transition-all font-medium"
              />
            </div>

            {/* Sender Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">From (Your Name)</label>
              <input 
                type="text" 
                maxLength={30}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="E.g., Sophia & Ankur"
                className="w-full bg-white/90 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:border-amber-600/50 transition-all font-medium"
              />
            </div>

            {/* Message Choice */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Choose Wish Message</label>
              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1 select-none">
                {messages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMessageIndex(index)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs leading-normal transition-all cursor-pointer ${
                      selectedMessageIndex === index 
                        ? 'bg-amber-600/10 text-amber-900 border border-amber-600/30 font-semibold' 
                        : 'bg-white/95 text-stone-500 border border-stone-150 hover:text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    "{msg.substring(0, 75)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Design theme Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">Select Card Design</label>
              <div className="grid grid-cols-2 gap-2">
                {designs.map((design, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDesignIndex(index)}
                    className={`px-3 py-2 rounded-xl text-[11px] font-semibold tracking-wider uppercase border text-center transition-all cursor-pointer ${
                      selectedDesignIndex === index 
                        ? 'border-amber-600 bg-amber-600/10 text-amber-950 font-bold' 
                        : 'border-stone-200 hover:border-stone-300 text-stone-500 hover:text-stone-700 bg-white/90'
                    }`}
                  >
                    {design.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Link Generator */}
          <div className="pt-4 border-t border-stone-205 space-y-3">
            <button
              onClick={handleCopyLink}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Shareable Link</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-stone-500 text-center">
              Anyone who clicks the copied link will see your personalized greeting card with animations!
            </p>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="lg:col-span-7 flex items-center justify-center p-2">
          {/* Greeting Card Frame */}
          <div 
            className={`w-full max-w-md aspect-[3/4.2] rounded-3xl border-2 ${designs[selectedDesignIndex].borderColor} bg-gradient-to-b ${designs[selectedDesignIndex].bgGradient} p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden`}
          >
            {/* Background design accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            {/* Sparkles effect */}
            <div className="absolute top-8 left-8 w-1.5 h-1.5 rounded-full bg-amber-200 animate-ping"></div>
            <div className="absolute top-24 right-10 w-2 h-2 rounded-full bg-amber-300 animate-pulse"></div>
            <div className="absolute bottom-20 left-12 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></div>

            {/* Top Border Ornament */}
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

            {/* Card Content */}
            <div className="text-center my-auto space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-amber-500/80 uppercase block">Dear</span>
                <h4 className="font-decorative text-xl sm:text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {to || "Loved Ones"}
                </h4>
              </div>

              {/* Glowing star dividers */}
              <div className="flex justify-center text-amber-400 gap-1.5 opacity-60">
                <span>✦</span>
                <span className="text-lg">✦</span>
                <span>✦</span>
              </div>

              {/* Main message */}
              <p className={`text-xs sm:text-sm font-light leading-relaxed italic ${designs[selectedDesignIndex].textColor}`}>
                "{messages[selectedMessageIndex]}"
              </p>

              {/* Glowing star dividers */}
              <div className="flex justify-center text-amber-400 gap-1.5 opacity-60">
                <span>✦</span>
                <span className="text-lg">✦</span>
                <span>✦</span>
              </div>

              {/* Sender signature */}
              <div className="space-y-1">
                <span className="text-[9px] font-medium tracking-widest text-amber-500/80 uppercase block">With Warm Regards,</span>
                <h5 className="font-display text-lg font-bold text-gray-200">
                  {from || "Your Friend"}
                </h5>
              </div>
            </div>

            {/* Bottom Border Ornament */}
            <div className="text-center text-[8px] uppercase tracking-widest text-amber-500/40 select-none">
              ✦ HappyDiwali.co.uk ✦
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

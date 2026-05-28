import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#341d11] border-t border-amber-950/20 py-12 px-4 sm:px-6 lg:px-8 select-none z-10">
      {/* Decorative center glowing point */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Decorative Diya and Title */}
        <div className="flex flex-col items-center space-y-2">
          <svg className="w-10 h-10 text-amber-400" viewBox="0 0 100 100" fill="none">
            <path d="M20 60C20 72 35 77 50 77C65 77 80 72 80 60C80 60 80 54 50 57C20 54 20 60 20 60Z" fill="#5c2007" />
            <path className="diya-flame-flicker origin-bottom" d="M50 25C54 33 56 37 56 42C56 46 53 49 50 49C47 49 44 46 44 42C44 37 46 33 50 25Z" fill="#fbbf24" />
          </svg>
          <span className="font-decorative text-lg font-bold tracking-widest text-amber-300">
            SHUBH DEEPAWALI
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-amber-100/70">
          <button onClick={() => scrollToSection('hero')} className="hover:text-amber-300 transition-colors cursor-pointer">Home</button>
          <span className="text-amber-950/60 hidden sm:inline">|</span>
          <button onClick={() => scrollToSection('about')} className="hover:text-amber-300 transition-colors cursor-pointer">Why Celebrate?</button>
          <span className="text-amber-950/60 hidden sm:inline">|</span>
          <button onClick={() => scrollToSection('uk-diwali')} className="hover:text-amber-300 transition-colors cursor-pointer">Diwali in the UK</button>
          <span className="text-amber-950/60 hidden sm:inline">|</span>
          <button onClick={() => scrollToSection('affiliate')} className="hover:text-amber-300 transition-colors cursor-pointer">Lights & Decor</button>
          <span className="text-amber-950/60 hidden sm:inline">|</span>
          <button onClick={() => scrollToSection('greetings')} className="hover:text-amber-300 transition-colors cursor-pointer">Greetings Card</button>
        </div>

        {/* Affiliate Disclosure */}
        <div className="max-w-3xl text-[10px] sm:text-xs text-amber-200/50 leading-relaxed font-light px-4">
          <strong>Affiliate Link Disclosure:</strong> HappyDiwali.co.uk is a participant in various affiliate marketing programs. Some links on this site (specifically in our "Lights & Home Decorations" section) may contain tracking codes which generate a small referral commission for us on purchases made on Amazon.co.uk, at absolutely no additional cost to you. This support allows us to maintain our educational guides. All products featured are hand-curated based on customer ratings and festive appeal.
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 text-[10px] text-amber-200/40 font-medium">
          <span>&copy; {currentYear} HappyDiwali.co.uk. All rights reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> in the UK
          </span>
        </div>

      </div>
    </footer>
  );
};

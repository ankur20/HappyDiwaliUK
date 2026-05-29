import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'Why Diwali?' },
    { id: 'uk-diwali', name: 'Diwali in the UK' },
    { id: 'affiliate', name: 'Decorations & Lights' },
    { id: 'greetings', name: 'Greetings Card' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-amber-600/15 bg-white/70 backdrop-blur-xl shadow-[0_4px_25px_rgba(139,92,26,0.06)]">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* SVG Diya Logo */}
            <svg 
              className="w-7 h-7 text-amber-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Diya Base */}
              <path 
                d="M3 13C3 17.5 7.5 19 12 19C16.5 19 21 17.5 21 13C21 13 21 11.5 12 12.5C3 11.5 3 13 3 13Z" 
                fill="url(#diyaGrad)"
                stroke="#d97706"
                strokeWidth="1"
              />
              {/* Flame */}
              <path 
                className="diya-flame-flicker origin-bottom"
                d="M12 4C13.5 6.5 14.5 8 14.5 9.5C14.5 11 13.5 12.2 12 12.2C10.5 12.2 9.5 11 9.5 9.5C9.5 8 10.5 6.5 12 4Z" 
                fill="url(#flameGrad)"
              />
              <defs>
                <linearGradient id="diyaGrad" x1="3" y1="13" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="50%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
                <linearGradient id="flameGrad" x1="12" y1="4" x2="12" y2="12.2" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-decorative text-base sm:text-lg font-bold tracking-wider bg-gradient-to-r from-amber-700 via-amber-900 to-amber-700 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-amber-800 transition-all duration-300">
              Happy Diwali UK
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-amber-900 font-semibold' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-amber-700 rounded-full shadow-[0_0_6px_rgba(217,119,6,0.3)]"></span>
                )}
              </button>
            ))}
            <a
              href="/calculator/"
              className="px-3 py-1.5 text-sm font-medium tracking-wide text-stone-600 hover:text-amber-700 transition-all duration-300 flex items-center gap-1 cursor-pointer font-bold bg-amber-500/10 hover:bg-amber-500/20 rounded-full border border-amber-500/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Calculators</span>
            </a>
          </div>

          {/* Right CTA Button (Send Greetings) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('greetings')}
              className="relative group px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full overflow-hidden border border-amber-500/20 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.05)] hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:animate-spin" />
              <span>Send Greeting</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 hover:border-stone-400 transition-all cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-2 px-4 py-4 rounded-3xl border border-amber-600/10 bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(139,92,26,0.15)] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id 
                      ? 'bg-amber-500/10 text-amber-800 border-l-2 border-amber-500' 
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/calculator/"
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-amber-950 bg-amber-500/10 hover:bg-amber-500/20 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>Interactive Calculators</span>
              </a>
              <button
                onClick={() => handleNavClick('greetings')}
                className="w-full mt-1 py-3 rounded-xl bg-amber-600 text-center text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Send Greeting Card
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

import React from 'react';
import { MapPin, Snowflake, Gift, Info } from 'lucide-react';
import { affiliateConfig } from '../config/affiliateLinks';

interface UKEvent {
  location: string;
  landmark: string;
  description: React.ReactNode;
  highlight: string;
  badge: string;
}

export const UKDiwaliSection: React.FC = () => {
  const events: UKEvent[] = [
    {
      location: "Leicester",
      landmark: "The Golden Mile (Belgrave Road)",
      description: (
        <span>
          Leicester hosts one of the largest Diwali celebrations outside of India. Belgrave Road is illuminated by tens of thousands of{' '}
          <a 
            href={affiliateConfig.contextual.candleUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            sparkling lights and candles
          </a>. The celebration includes massive street bazaars, a spectacular main stage with performances, a giant Ferris wheel (the 'Diwali Wheel of Light'), and a huge fireworks display at Abbey Park.
        </span>
      ),
      highlight: "Over 40,000 people gather annually for the switch-on ceremony.",
      badge: "Largest in the UK"
    },
    {
      location: "London",
      landmark: "Trafalgar Square",
      description: (
        <span>
          A grand public celebration organized by the Mayor of London and the Diwali in London Committee. The heart of the capital transforms with live dance, music performances (from classical Indian to Bollywood), delicious{' '}
          <a 
            href={affiliateConfig.contextual.mithaiUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            street food stalls and sweets
          </a>, yoga workshops, Henna art, and beautiful decorations.
        </span>
      ),
      highlight: "A vibrant interfaith event celebrating diversity in the capital.",
      badge: "Capital Celebration"
    },
    {
      location: "Birmingham",
      landmark: "Soho Road (Handsworth) & City Centre",
      description: (
        <span>
          Birmingham's multicultural community organizes spectacular street lighting ceremonies on Soho Road. The event is filled with live music, Bhangra and Giddha dancing, dhol drummers, and mouth-watering local{' '}
          <a 
            href={affiliateConfig.contextual.mithaiUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            Indian sweets (Mithai)
          </a>{' '}
          shared among residents of all backgrounds.
        </span>
      ),
      highlight: "Combines local business food festivals with live music stages.",
      badge: "Midlands Hub"
    }
  ];

  return (
    <section 
      id="uk-diwali" 
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none z-10"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-600/15 bg-purple-500/5 text-purple-900 text-xs font-semibold tracking-wider uppercase">
            <Info className="w-3.5 h-3.5" />
            <span>Autumn in Great Britain</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-amber-900 to-purple-900 bg-clip-text text-transparent">
            Diwali in the United Kingdom
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            In the UK, Diwali occurs during late October or early November, coinciding with the crisp British autumn. As the evenings draw in early and the weather turns cold, the vibrant, warm glow of Diwali brings a unique comfort and magic.
          </p>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            It has become a significant multicultural event on the British calendar, where community centers, temples, and city councils collaborate to host spectacular light switch-ons, feasts, and public firework displays.
          </p>

          {/* Key UK Diwali Trademarks grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800">
                <Snowflake className="w-4 h-4 text-amber-705" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">Autumn Cozy</h4>
              </div>
              <p className="text-[11px] text-stone-500 leading-normal font-light">
                Early dark British nights create the perfect backdrop for glowing{' '}
                <a 
                  href={affiliateConfig.contextual.diyaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
                >
                  Diyas and candles
                </a>{' '}
                and warm indoor gatherings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800">
                <Gift className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">Mithai Sharing</h4>
              </div>
              <p className="text-[11px] text-stone-500 leading-normal font-light">
                Sharing{' '}
                <a 
                  href={affiliateConfig.contextual.mithaiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
                >
                  sweet boxes (Kaju Katli, Barfi, Jalebi)
                </a>{' '}
                with British neighbors is a beloved UK tradition.
              </p>
            </div>
          </div>
        </div>

        {/* UK Celebrations Timeline/Cards Column */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-2">
            Major Public Diwali Celebrations
          </h3>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div 
                key={index}
                className="relative group rounded-3xl border border-stone-200 bg-white/50 hover:bg-white/80 hover:border-amber-600/25 p-6 transition-all duration-500 shadow-md hover:shadow-[0_10px_25px_rgba(139,92,26,0.04)]"
              >
                {/* Glow dot */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-500/20">
                    {event.badge}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Pin Icon */}
                  <div className="p-3 rounded-2xl bg-amber-50/60 text-amber-800 border border-amber-600/10 group-hover:bg-amber-500/10 group-hover:text-amber-900 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h4 className="text-lg font-bold text-stone-900">{event.location}</h4>
                      <p className="text-xs text-amber-700 font-semibold">{event.landmark}</p>
                    </div>

                    <div className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {event.description}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-purple-905 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                      <span>{event.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

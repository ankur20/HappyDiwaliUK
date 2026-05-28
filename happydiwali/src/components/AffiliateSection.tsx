import React, { useState } from 'react';
import { ShoppingBag, Star, ExternalLink, Gift, Sparkles } from 'lucide-react';
import { affiliateConfig } from '../config/affiliateLinks';

interface Product {
  id: number;
  title: string;
  category: 'lights' | 'diyas' | 'decor';
  description: string;
  price: string;
  rating: number;
  reviews: number;
  amazonUrl: string;
  badge?: string;
  renderGraphic: () => React.ReactNode;
}

export const AffiliateSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'lights' | 'diyas' | 'decor'>('all');

  const products: Product[] = [
    {
      id: 1,
      title: "Hand-Painted Clay Diyas (12 Pack)",
      category: 'diyas',
      description: "Authentic, eco-friendly terracotta clay diyas, hand-painted by local artisans. Perfect for cotton wicks and mustard oil.",
      price: "12.99",
      rating: 4.8,
      reviews: 142,
      amazonUrl: affiliateConfig.products.clayDiyas,
      badge: "Best Seller",
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-amber-500 mx-auto filter drop-shadow-[0_4px_10px_rgba(245,158,11,0.2)]">
          <path d="M20 60C20 75 35 80 50 80C65 80 80 75 80 60C80 60 80 54 50 57C20 54 20 60 20 60Z" fill="#92400e" />
          <path d="M25 59.5C33 63 41 64.5 50 64.5C59 64.5 67 63 75 59.5" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1 2" />
          <path className="diya-flame-flicker origin-bottom" d="M50 25C54 33 57 38 57 43C57 47 54 51 50 51C46 51 43 47 43 43C43 38 46 33 50 25Z" fill="url(#prodFlame1)" />
          <defs>
            <linearGradient id="prodFlame1" x1="50" y1="25" x2="50" y2="51">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 2,
      title: "Warm LED Curtain Lights (3m x 3m)",
      category: 'lights',
      description: "USB-powered fairy waterfall lights with 8 flashing modes and remote control. Ideal for indoor walls and window frames.",
      price: "15.99",
      rating: 4.7,
      reviews: 328,
      amazonUrl: affiliateConfig.products.curtainLights,
      badge: "Popular",
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto text-amber-300">
          <line x1="10" y1="20" x2="90" y2="20" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
          {[25, 50, 75].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="20" x2={x} y2="80" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx={x} cy="35" r="4" fill="#fef08a" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              <circle cx={x} cy="55" r="4" fill="#fef08a" className="animate-pulse" style={{ animationDelay: `${(i + 1) * 0.3}s` }} />
              <circle cx={x} cy="75" r="4" fill="#fef08a" className="animate-pulse" style={{ animationDelay: `${(i + 2) * 0.3}s` }} />
              <circle cx={x} cy="35" r="8" fill="#fef08a" opacity="0.2" />
              <circle cx={x} cy="55" r="8" fill="#fef08a" opacity="0.2" />
              <circle cx={x} cy="75" r="8" fill="#fef08a" opacity="0.2" />
            </g>
          ))}
        </svg>
      )
    },
    {
      id: 3,
      title: "Crystal Lotus Tealight Holders (Set of 2)",
      category: 'diyas',
      description: "Thick, high-quality crystal glass candle holders shaped like a lotus blossom. Reflects gorgeous colorful light trails.",
      price: "10.49",
      rating: 4.9,
      reviews: 87,
      amazonUrl: affiliateConfig.products.lotusHolders,
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto text-purple-400">
          <path d="M50 75 C40 60, 20 65, 30 75 C40 75, 45 75, 50 75" fill="#db2777" opacity="0.4" />
          <path d="M50 75 C60 60, 80 65, 70 75 C60 75, 55 75, 50 75" fill="#db2777" opacity="0.4" />
          <path d="M50 75 C30 50, 15 55, 25 70 C35 75, 45 75, 50 75" fill="#be185d" opacity="0.6" />
          <path d="M50 75 C70 50, 85 55, 75 70 C65 75, 55 75, 50 75" fill="#be185d" opacity="0.6" />
          <rect x="42" y="65" width="16" height="10" fill="#f3f4f6" rx="2" />
          <path className="diya-flame-flicker origin-bottom" d="M50 48C52 53, 54 56, 54 60C54 63, 52 65, 50 65C48 65, 46 63, 46 60C46 56, 48 53, 50 48Z" fill="#f59e0b" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Colorful Rangoli Stencils Kit",
      category: 'decor',
      description: "Includes 4 round reusable plastic stencils and 10 squeeze bottles of vibrant, non-toxic colored rangoli powder.",
      price: "14.99",
      rating: 4.6,
      reviews: 215,
      amazonUrl: affiliateConfig.products.rangoliKit,
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto text-pink-500">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#db2777" strokeWidth="2" strokeDasharray="3 3" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const x = 50 + Math.cos(angle) * 20;
            const y = 50 + Math.sin(angle) * 20;
            return <circle key={i} cx={x} cy={y} r="5" fill="#e11d48" opacity="0.7" />;
          })}
          <circle cx="50" cy="50" r="10" fill="#fef08a" opacity="0.9" />
          <circle cx="50" cy="50" r="5" fill="#f97316" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Brass Hanging Diya with Bells",
      category: 'diyas',
      description: "Heavy antique-finished brass oil lamp with a hanging chain and traditional bells. Great for home entrances and puja rooms.",
      price: "22.50",
      rating: 4.9,
      reviews: 64,
      amazonUrl: affiliateConfig.products.hangingDiya,
      badge: "Premium Choice",
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
          <line x1="50" y1="5" x2="50" y2="55" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M30 65C30 75 40 80 50 80C60 80 70 75 70 65H30Z" fill="#b45309" stroke="#78350f" strokeWidth="1" />
          <circle cx="35" cy="85" r="3" fill="#d97706" />
          <circle cx="50" cy="88" r="3" fill="#d97706" />
          <circle cx="65" cy="85" r="3" fill="#d97706" />
          <path className="diya-flame-flicker origin-bottom" d="M50 53C51.5 56, 52.5 58, 52.5 60C52.5 62, 51.5 63, 50 63C48.5 63, 47.5 62, 47.5 60C47.5 58, 48.5 56, 50 53Z" fill="#fbbf24" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Diya-Shaped LED String Lights (4.5m)",
      category: 'lights',
      description: "40 LED colorful diya string lights. Battery operated with warm gold, red, and blue glow configurations.",
      price: "11.99",
      rating: 4.5,
      reviews: 194,
      amazonUrl: affiliateConfig.products.stringLights,
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto">
          <path d="M10 50 Q 50 20, 90 50" fill="none" stroke="#6b7280" strokeWidth="1.5" />
          {[25, 50, 75].map((x, i) => {
            const colors = ['#f43f5e', '#eab308', '#3b82f6'];
            return (
              <g key={i} transform={`translate(${x - 10}, 35) scale(0.25)`}>
                <path d="M10 50C10 70, 25 75, 40 75C55 75, 70 70, 70 50Z" fill={colors[i]} />
                <path className="diya-flame-flicker" d="M40 20C44 30, 46 35, 46 40C46 44, 43 46, 40 46C37 46, 34 44, 34 40C34 35, 36 30, 40 20Z" fill="#fbbf24" />
              </g>
            );
          })}
        </svg>
      )
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section 
      id="affiliate" 
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none z-10"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/15 bg-amber-600/5 text-amber-900 text-xs font-semibold tracking-wider uppercase mb-4">
          <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
          <span>Curated Festive Essentials</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent mb-4">
          Lights & Home Decorations
        </h2>
        <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6"></div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
          Prepare your home for the celebrations. We have hand-selected some of the highest-rated traditional oil lamps, ambient lighting, and colorful decor available on Amazon UK to bring the magic of Diwali into your household.
        </p>

        {/* Affiliate Disclosure Badge */}
        <div className="mt-4 inline-block bg-white/70 border border-amber-900/10 rounded-2xl px-4 py-2 text-[10px] sm:text-xs text-amber-900/80 leading-normal max-w-2xl shadow-sm">
          💡 <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn a small commission from qualifying purchases made through our links, at no extra cost to you. This helps support our educational guide.
        </div>
      </div>

      {/* Filter Menu */}
      <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {(['all', 'lights', 'diyas', 'decor'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === cat 
                ? 'bg-amber-700 text-white shadow-md' 
                : 'bg-white/60 text-stone-600 hover:text-stone-900 hover:bg-white border border-stone-200'
            }`}
          >
            {cat === 'all' ? 'Show All' : cat === 'lights' ? 'Lights' : cat === 'diyas' ? 'Diyas & Holders' : 'Decorations'}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="group relative flex flex-col justify-between rounded-3xl border border-stone-200 bg-white/60 hover:bg-white/90 hover:border-amber-600/30 p-6 transition-all duration-500 shadow-md hover:shadow-[0_15px_30px_rgba(139,92,26,0.04)]"
          >
            {/* Tag Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-700 text-white shadow-sm">
                {product.badge}
              </span>
            )}

            <div>
              {/* Graphic Display Area */}
              <div className="h-40 rounded-2xl bg-gradient-to-b from-amber-50/40 to-stone-50/40 border border-stone-200 flex items-center justify-center mb-6 overflow-hidden relative group-hover:from-amber-50/60 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_60%)]"></div>
                {product.renderGraphic()}
              </div>

              {/* Title & Rating */}
              <div className="space-y-1 mb-3">
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors duration-300">
                  {product.title}
                </h3>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-semibold text-stone-700 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-[10px] text-stone-500">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-stone-600 leading-relaxed mb-6 font-light">
                {product.description}
              </p>
            </div>

            {/* Price & Action Button */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200 mt-auto">
              <div>
                <span className="text-[10px] text-stone-500 block uppercase tracking-wider">Price</span>
                <span className="text-xl font-black text-stone-900">£{product.price}</span>
              </div>

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Buy on Amazon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Gift Cards Sub-section */}
      <div className="mt-24 pt-16 border-t border-amber-950/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-600/15 bg-amber-600/5 text-amber-900 text-xs font-semibold tracking-wider uppercase mb-4">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span>Festive Gifting Made Simple</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
            Festive Retail Gift Cards
          </h3>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Can't decide on the perfect gift? Sending a digital gift voucher from top UK retailers is a popular way to spread festive cheer, letting your friends and family select exactly what they need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliateConfig.giftCards.map((card) => (
            <div 
              key={card.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-stone-200 bg-white/60 p-5 hover:bg-white hover:border-amber-600/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="space-y-4">
                {/* Gift Card visual mockup */}
                <div className={`h-32 rounded-2xl bg-gradient-to-tr ${card.bgGradient} p-4 flex flex-col justify-between text-white shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-black/20 px-2 py-0.5 rounded">
                      Gift Card
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-semibold tracking-wider text-white/70 uppercase">Festive eGift Voucher</div>
                    <div className="font-display text-sm sm:text-base font-extrabold tracking-wide drop-shadow-sm">
                      {card.brand}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-stone-800">
                    {card.name}
                  </h4>
                  <p className="text-xs text-stone-500 leading-normal font-light">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-150 flex items-center justify-between">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">eDelivery</span>
                <a
                  href={card.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>Get Voucher</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

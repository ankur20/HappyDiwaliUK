import React, { useState } from 'react';
import { BookOpen, Sparkles, Shield, Compass, Heart, Flame } from 'lucide-react';
import { affiliateConfig } from '../config/affiliateLinks';

interface DiwaliStory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  summary: string;
  story: React.ReactNode;
  significance: string;
  themeColor: string; // for border/glow accent
}

export const InfoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stories: DiwaliStory[] = [
    {
      title: "Return of Lord Rama",
      subtitle: "The Victory of Light Over Darkness",
      icon: <Shield className="w-5 h-5" />,
      summary: "Lord Rama, along with his wife Sita and brother Lakshmana, returns to Ayodhya after 14 years of exile and defeating the demon king Ravana.",
      story: (
        <span>
          The epic Ramayana tells of Prince Rama's banishment to the forest and his ultimate battle against the ten-headed demon king Ravana of Lanka, who had kidnapped Princess Sita. Upon his victory and completion of exile, the citizens of Ayodhya were overjoyed. To guide their beloved prince home on a dark, moonless night (Amavasya), the entire kingdom was illuminated with millions of{' '}
          <a 
            href={affiliateConfig.contextual.diyaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            clay lamps (diyas)
          </a>. This event forms the core historical celebration of Deepavali.
        </span>
      ),
      significance: "Lamps represent illuminating the mind and heart, signifying the destruction of ignorance, ego, and evil forces.",
      themeColor: "from-amber-500 to-orange-600"
    },
    {
      title: "Goddess Lakshmi Pooja",
      subtitle: "Welcoming Prosperity and Good Fortune",
      icon: <Sparkles className="w-5 h-5" />,
      summary: "Worship of the Goddess of Wealth and Prosperity to invite auspiciousness, gratitude, and abundance into homes and businesses.",
      story: (
        <span>
          According to Hindu legends, Goddess Lakshmi (the goddess of wealth, prosperity, and beauty) was born during the Samudra Manthan (churning of the cosmic ocean) on the auspicious night of Diwali. She chose Lord Vishnu as her husband, and they were wed. On this evening, people clean, decorate, and illuminate their homes, leaving doors and windows open, and lighting{' '}
          <a 
            href={affiliateConfig.contextual.diyaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            traditional oil diyas
          </a>{' '}
          and{' '}
          <a 
            href={affiliateConfig.contextual.candleUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            candles
          </a>{' '}
          to welcome Lakshmi. They pray for success, wisdom, and the removal of financial and spiritual obstacles.
        </span>
      ),
      significance: "Lakshmi symbolizes not just material wealth, but spiritual abundance, health, peace, and righteous living.",
      themeColor: "from-pink-500 to-rose-600"
    },
    {
      title: "Bandi Chhor Divas",
      subtitle: "Sikh Tradition: Freedom and Justice",
      icon: <Compass className="w-5 h-5" />,
      summary: "Celebrating the release of Guru Hargobind Ji, the sixth Sikh Guru, along with 52 political prisoners from Gwalior Fort in 1619.",
      story: (
        <span>
          Guru Hargobind Sahib was imprisoned by Mughal Emperor Jahangir. When offered release, the Guru refused to leave unless the 52 Hindu kings imprisoned with him were set free too. The Emperor agreed, but declared that only those who could hold onto the Guru's cloak could leave. Guru Hargobind had a special cloak made with 52 tassels, allowing every king to hold on and walk out to freedom. Upon his arrival at Amritsar (the Golden Temple) on Diwali day, the temple was lit up with thousands of{' '}
          <a 
            href={affiliateConfig.contextual.candleUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            glowing lights and candles
          </a>{' '}
          to celebrate his return.
        </span>
      ),
      significance: "It honors the struggle against oppression, the pursuit of justice, and standing up for the freedom of others.",
      themeColor: "from-yellow-500 to-amber-600"
    },
    {
      title: "Lord Mahavira's Nirvana",
      subtitle: "Jain Tradition: The Light of Knowledge",
      icon: <Flame className="w-5 h-5" />,
      summary: "Jains celebrate the day Lord Mahavira, the 24th Tirthankara, attained spiritual liberation (Nirvana) in 527 BCE.",
      story: (
        <span>
          On the night of Diwali, at Pavapuri, Lord Mahavira achieved liberation from the cycle of birth and death, entering Moksha. To mark the physical departure of the Great Light of Wisdom, his chief disciple Ganadhara Gautama Swami also attained omniscience on the next day. The local kings and citizens declared that since the light of Mahavira's physical presence had gone, they would light{' '}
          <a 
            href={affiliateConfig.contextual.diyaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            lamps and candles
          </a>{' '}
          to represent the eternal light of his teachings and wisdom.
        </span>
      ),
      significance: "Lamps symbolize keeping the light of Mahavira's moral teachings (truth, non-violence, purity) burning in our hearts.",
      themeColor: "from-emerald-500 to-teal-600"
    },
    {
      title: "Defeat of Narakasura",
      subtitle: "Conquering Fear and Ego",
      icon: <Heart className="w-5 h-5" />,
      summary: "In Southern and Western India, Diwali commemorates Lord Krishna and Satyabhama vanquishing the demon Narakasura.",
      story: (
        <span>
          The demon king Narakasura ruled with terror, kidnapping thousands of women and stealing the earrings of Aditi, the mother goddess. Lord Krishna, accompanied by his consort Satyabhama, fought a fierce battle and defeated Narakasura. Before dying, Narakasura repented and requested that his death be celebrated as a day of joy rather than mourning. In Southern India, this is Naraka Chaturdashi. People wake up before dawn, bathe with fragrant oils, and light{' '}
          <a 
            href={affiliateConfig.contextual.diyaUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-700 hover:text-amber-900 font-semibold underline decoration-dashed hover:decoration-solid transition-all cursor-pointer"
          >
            sparkling oil diyas
          </a>{' '}
          to mark the end of evil.
        </span>
      ),
      significance: "Represents washing away sins, conquering ego and greed, and starting afresh with purity.",
      themeColor: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none z-10"
    >
      {/* Decorative Diwali lights on top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent mb-4">
          Why is Diwali Celebrated?
        </h2>
        <div className="w-24 h-[1px] bg-amber-500/50 mx-auto mb-6"></div>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
          Diwali, or Deepavali, meaning "row of lighted lamps" in Sanskrit, is a festival representing the victory of good over evil, knowledge over ignorance, and hope over despair. It is celebrated by millions of people across different cultures and traditions worldwide, each adding a unique spiritual dimension.
        </p>
      </div>

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Navigation Tabs (left column) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none snap-x">
          {stories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 snap-align-start flex items-center gap-3.5 px-5 py-4 rounded-2xl border transition-all duration-300 text-left w-64 lg:w-full cursor-pointer ${
                activeTab === index
                  ? `bg-gradient-to-r ${story.themeColor} text-black border-transparent shadow-[0_10px_20px_rgba(180,83,9,0.15)] font-semibold scale-[1.02]`
                  : 'bg-white/60 hover:bg-white text-stone-650 hover:text-stone-900 border-stone-200'
              }`}
            >
              <div className={`p-2 rounded-xl transition-colors ${
                activeTab === index ? 'bg-black/10 text-black' : 'bg-amber-50 text-amber-700'
              }`}>
                {story.icon}
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide leading-tight">{story.title}</div>
                <div className={`text-[10px] ${activeTab === index ? 'text-black/85' : 'text-stone-500'} font-medium truncate w-40 lg:w-56`}>
                  {story.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Card (right column) */}
        <div className="lg:col-span-8">
          <div className="relative group rounded-3xl border border-amber-600/10 bg-white/70 backdrop-blur-xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(139,92,26,0.05)] overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Absolute decorative gradient glow */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${stories[activeTab].themeColor} opacity-5 blur-[90px] pointer-events-none`}></div>
            
            {/* Top Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-800">
                  Featured Tradition
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-wide mb-2 transition-all duration-300">
                {stories[activeTab].title}
              </h3>
              
              <p className="text-amber-800/90 text-xs sm:text-sm font-semibold tracking-wide italic mb-6">
                "{stories[activeTab].subtitle}"
              </p>

              <div className="space-y-4">
                {/* Brief Summary */}
                <div className="flex gap-3 bg-amber-50/50 p-4 rounded-xl border border-amber-600/10">
                  <div className="text-amber-700 font-bold text-lg select-none">✦</div>
                  <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
                    {stories[activeTab].summary}
                  </p>
                </div>

                {/* Narrative */}
                <div className="text-stone-650 text-xs sm:text-sm leading-relaxed indent-4 font-light">
                  {stories[activeTab].story}
                </div>
              </div>
            </div>

            {/* Bottom/Significance section */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <h4 className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-2">
                Spiritual Significance
              </h4>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                {stories[activeTab].significance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

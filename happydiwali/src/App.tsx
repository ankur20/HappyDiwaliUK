import { useState, useEffect } from 'react';
import { FirecrackerCanvas } from './components/FirecrackerCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { UKDiwaliSection } from './components/UKDiwaliSection';
import { AffiliateSection } from './components/AffiliateSection';
import { GreetingsCreator } from './components/GreetingsCreator';
import { GreetingOverlay } from './components/GreetingOverlay';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showGreeting, setShowGreeting] = useState(false);

  // Parse URL query parameter for personalized greeting card
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('card') === 'true') {
      setShowGreeting(true);
    }
  }, []);

  // Update active section in navbar based on scroll position
  useEffect(() => {
    const sections = ['hero', 'about', 'uk-diwali', 'affiliate', 'greetings'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fbf8f3] text-[#3f281b] overflow-x-hidden font-sans selection:bg-amber-600/20 selection:text-amber-900">
      
      {/* Background Interactive Firecrackers */}
      <FirecrackerCanvas />

      {/* Floating Header Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Personalized Greeting Card Pop-up Overlay */}
      {showGreeting && (
        <GreetingOverlay onClose={() => setShowGreeting(false)} />
      )}

      {/* Content Sections */}
      <main className="relative z-10 w-full">
        {/* Hero Landing */}
        <HeroSection />

        {/* Why Diwali is Celebrated */}
        <InfoSection />

        {/* UK Aspect of Diwali */}
        <UKDiwaliSection />

        {/* Shopping / Affiliate products */}
        <AffiliateSection />

        {/* Greeting Creator Widget */}
        <GreetingsCreator />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;

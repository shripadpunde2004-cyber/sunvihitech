import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Industries from './components/Industries/Industries';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';

import AboutUs from './pages/AboutUs/AboutUs';
import OurMission from './pages/OurMission/OurMission';
import OurVision from './pages/OurVision/OurVision';
import OurLeaders from './pages/OurLeaders/OurLeaders';
import Jobs from './pages/Jobs/Jobs';
import Construction from './pages/Construction/Construction';
import Shipping from './pages/Shipping/Shipping';
import OilGas from './pages/OilGas/OilGas';
import Tourism from './pages/Tourism/Tourism';
import Aviation from './pages/Aviation/Aviation';
import RenewableEnergy from './pages/RenewableEnergy/RenewableEnergy';
import Healthcare from './pages/Healthcare/Healthcare';
import Contact from './pages/Contact/Contact';

/**
 * Normalizes URL hash to a recognized route key
 */
function getRouteFromHash(hash) {
  const clean = (hash || window.location.hash || '').replace('#', '').toLowerCase();
  if (clean === 'about' || clean === 'about-us') return 'about';
  if (clean === 'mission' || clean === 'our-mission') return 'mission';
  if (clean === 'vision' || clean === 'our-vision') return 'vision';
  if (clean === 'leaders' || clean === 'our-leaders' || clean === 'team') return 'leaders';
  if (clean === 'jobs' || clean === 'careers' || clean === 'vacancies' || clean === 'opportunities') return 'jobs';
  if (clean === 'construction' || clean === 'construction-real-estate' || clean === 'real-estate') return 'construction';
  if (clean === 'shipping' || clean === 'shipping-logistics' || clean === 'logistics') return 'shipping';
  if (clean === 'oil-gas' || clean === 'oil' || clean === 'gas' || clean === 'oil-and-gas') return 'oil-gas';
  if (clean === 'tourism' || clean === 'hospitality' || clean === 'tourism-hospitality') return 'tourism';
  if (clean === 'aviation' || clean === 'aerospace' || clean === 'aviation-aerospace') return 'aviation';
  if (clean === 'energy' || clean === 'renewable-energy' || clean === 'solar') return 'energy';
  if (clean === 'healthcare' || clean === 'health-care' || clean === 'medical') return 'healthcare';
  if (clean === 'contact' || clean === 'contact-us' || clean === 'get-in-touch') return 'contact';
  return 'home';
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState(() => getRouteFromHash(window.location.hash));

  // Sync state when URL hash changes (back/forward navigation or anchor clicks)
  useEffect(() => {
    function onHashChange() {
      const nextRoute = getRouteFromHash(window.location.hash);
      setActiveRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function handleNavigate(href) {
    const nextRoute = getRouteFromHash(href);
    window.location.hash = href;
    setActiveRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPage() {
    switch (activeRoute) {
      case 'about':
        return <AboutUs onNavigate={handleNavigate} onBackToHome={() => handleNavigate('#home')} />;
      case 'mission':
        return <OurMission onNavigate={handleNavigate} onBackToHome={() => handleNavigate('#home')} />;
      case 'vision':
        return <OurVision onNavigate={handleNavigate} onBackToHome={() => handleNavigate('#home')} />;
      case 'leaders':
        return <OurLeaders onNavigate={handleNavigate} onBackToHome={() => handleNavigate('#home')} />;
      case 'jobs':
        return <Jobs onNavigate={handleNavigate} />;
      case 'construction':
        return <Construction onNavigate={handleNavigate} />;
      case 'shipping':
        return <Shipping onNavigate={handleNavigate} />;
      case 'oil-gas':
        return <OilGas onNavigate={handleNavigate} />;
      case 'tourism':
        return <Tourism onNavigate={handleNavigate} />;
      case 'aviation':
        return <Aviation onNavigate={handleNavigate} />;
      case 'energy':
        return <RenewableEnergy onNavigate={handleNavigate} />;
      case 'healthcare':
        return <Healthcare onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero />
            <WhoWeAre onLearnMore={() => handleNavigate('#about')} />
            <Industries onNavigate={handleNavigate} />
            <WhyChooseUs />
          </>
        );
    }
  }

  return (
    <>
      <Navbar activeRoute={activeRoute} onNavigate={handleNavigate} />

      <main id="main-content">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingButtons onNavigate={handleNavigate} />
    </>
  );
}

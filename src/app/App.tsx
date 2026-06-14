import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Dataset } from './components/Dataset';
import { Model } from './components/Model';
import { Results } from './components/Results';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" richColors />
      <Header />
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Dataset />
        <Model />
        <Results />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
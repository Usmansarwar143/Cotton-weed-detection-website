import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Increased Overlay Opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1761069183877-fe29a212e5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2Nzg1NTEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <div className="inline-block px-8 py-10 rounded-2xl bg-[#1B5E20]/10 backdrop-blur-[2px] border border-white/5 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
              CottonCare – Smart Weed Detection
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 mb-8">
              AI-driven decision support for cotton farming
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-based weed detection system trained on the CottonWeeds dataset, designed
              to identify Horse Purslane and Purple Nutsedge—two major weeds affecting cotton crops in Pakistan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollToNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B5E20] font-bold rounded-full hover:shadow-2xl transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>Explore Project</span>
              <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}

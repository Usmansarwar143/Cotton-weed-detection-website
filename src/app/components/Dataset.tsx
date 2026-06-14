import { useEffect, useRef, useState } from 'react';
import { ImageIcon, Tag, Sprout, ExternalLink, Leaf } from 'lucide-react';

export function Dataset() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { icon: ImageIcon, label: 'Total Images', value: '7,578' },
    { icon: Tag, label: 'Avg Precision', value: '98.5%' },
    { icon: Sprout, label: 'Target Classes', value: '3' },
  ];

  return (
    <section
      id="dataset"
      ref={sectionRef}
      className="py-16 md:py-24 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Dataset & Classification
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            The system is trained on a specialized dataset featuring key species found in cotton agriculture.
            The classification model distinguishes between healthy cotton plants and major weeds
            that compete for resources in the field.
          </p>
          <a
            href="https://www.kaggle.com/datasets/puneetsaini11/cottonweeds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <span>View Source on Kaggle</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Grid - Centered and Spaced Evenly */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 text-center transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 w-full sm:w-64 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cotton Card */}
          <div
            className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                src="/assets/crop/cotton.png"
                alt="Cotton Crop"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary fill-primary/20" />
                  CottonCare
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Healthy cotton plants (Gossypium). High precision detection ensures that crops are not
                misidentified as weeds, preventing accidental herbicide application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Primary Crop</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">High Accuracy</span>
              </div>
            </div>
          </div>

          {/* Black Pigweed Card */}
          <div
            className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                src="/assets/weeds/black-pigweed.png"
                alt="Black Pigweed"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">Black Pigweed</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A common broadleaf weed (Trianthema portulacastrum) that competes heavily for
                nutrients and moisture in Pakistani cotton fields.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Broadleaf</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">High Impact</span>
              </div>
            </div>
          </div>

          {/* Nutgrass Card */}
          <div
            className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="h-48 md:h-56 overflow-hidden">
              <img
                src="/assets/weeds/nutgrass.png"
                alt="Nutgrass"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">Nutgrass</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A persistent perennial sedge (Cyperus rotundus) with deep roots. One of the
                most difficult weeds to control in cotton agriculture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Perennial</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Resilient</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Brain, Layers, Zap, CheckCircle } from 'lucide-react';

export function Model() {
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

  // Workflow data removed

  return (
    <section
      id="model"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Model & Architecture
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our end-to-end deep learning pipeline for accurate and efficient weed detection
          </p>
        </div>

        {/* Model Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/model-architecture.png"
                alt="Neural Network Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-bold rounded-full mb-3">
                  Neural Network
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Classification Architecture
                </h3>
                <p className="text-white/90">
                  An optimized YOLOv8 classification (YOLOv8-cls) model trained for fast and reliable image-based weed detection.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Technical Features
            </h3>
            <div className="space-y-4">
              {[
                { icon: Brain, text: 'YOLOv8 classification architecture' },
                { icon: Layers, text: 'RGB image input with standardized preprocessing' },
                { icon: Zap, text: 'Efficient feature extraction at 224 × 224 resolution' },
                { icon: Zap, text: 'Near real-time inference suitable for field applications' },
                { icon: CheckCircle, text: 'Custom trained on the CottonWeeds image dataset' },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground pt-2">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

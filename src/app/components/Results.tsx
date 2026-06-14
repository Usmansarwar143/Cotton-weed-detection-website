import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export function Results() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const detections = [
    {
      label: 'Cotton Crop',
      confidence: '99.9%',
      image: '/assets/results/detection-cotton.jpg',
      alt: 'Cotton detection'
    },
    {
      label: 'Nutgrass',
      confidence: '100%',
      image: '/assets/results/detection-nutgrass-1.jpg',
      alt: 'Nutgrass detection 1'
    },
    {
      label: 'Black Pigweed',
      confidence: '99.0%',
      image: '/assets/results/detection-pigweed.jpg',
      alt: 'Pigweed detection 1'
    },
    {
      label: 'Nutgrass',
      confidence: '100%',
      image: '/assets/results/detection-nutgrass-2.jpg',
      alt: 'Nutgrass detection 2'
    },
    {
      label: 'Black Pigweed',
      confidence: '100%',
      image: '/assets/results/detection-pigweed-2.jpg',
      alt: 'Pigweed detection 2'
    },
    {
      label: 'Cotton Crop',
      confidence: '100%',
      image: '/assets/results/detection-cotton-2.jpg',
      alt: 'Cotton detection 2'
    }
  ];

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-muted to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Detection Results
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time identification examples showing model confidence and classification
          </p>
        </div>

        {/* 3-Column Grid of Detection Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {detections.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-1000 cursor-pointer hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="p-4 bg-muted/30 border-b border-muted flex justify-between items-center">
                <h3 className="text-base font-bold text-primary">{item.label}</h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">{item.confidence} Conf.</span>
              </div>
              <div className="aspect-square relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-md" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div
          className={`bg-gradient-to-r from-primary to-accent rounded-xl p-8 md:p-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Key Findings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h4 className="font-semibold text-lg mb-2">✓ High Classification Accuracy</h4>
              <p className="text-white/90">
                Achieved over 98% accuracy in classifying Horse Purslane and Purple Nutsedge from cotton field images.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">✓ Robust Performance</h4>
              <p className="text-white/90">
                Demonstrated consistent classification performance across varying lighting conditions and different weed growth stages.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">✓ Fast Inference</h4>
              <p className="text-white/90">
                Efficient model inference enables near real-time image classification, suitable for practical field and mobile applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">✓ Scalable Framework</h4>
              <p className="text-white/90">
                The classification pipeline can be extended to include additional weed species through further data collection and retraining.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
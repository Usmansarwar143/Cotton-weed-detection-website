import { useEffect, useRef, useState } from 'react';
import { Target, Cpu, Sparkles, TrendingUp } from 'lucide-react';

export function About() {
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

  const features = [
    {
      icon: Target,
      title: 'Precision Detection',
      description: 'The system accurately classifies weed and non-weed conditions in cotton fields using a YOLOv8-based deep learning model, enabling reliable detection from captured images.',
    },
    {
      icon: Cpu,
      title: 'Deep Learning Powered',
      description: 'Built using the YOLOv8 classification architecture, the model is trained on thousands of labeled cotton field images, ensuring consistent and robust performance.',
    },
    {
      icon: Sparkles,
      title: 'Real-time Analysis',
      description: 'The lightweight model enables fast image processing, making it suitable for near real-time weed detection in practical field and mobile applications.',
    },
    {
      icon: TrendingUp,
      title: 'Improved Yield',
      description: 'By supporting early weed identification, the system helps farmers apply targeted control measures, reduce crop competition, and improve cotton yield.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            This project is an AI-based weed detection system developed to support
            cotton farming by identifying weed presence in field images using
            deep learning techniques. It aims to assist farmers in improving
            crop monitoring and management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-muted rounded-xl p-6 md:p-8 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-primary to-accent rounded-xl p-8 md:p-12 text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Challenge
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Weed infestation remains a major issue in cotton cultivation,
            directly affecting yield and crop quality. Manual weed identification
            is time-consuming, labor-intensive, and prone to errors. This project
            addresses the challenge by automating weed detection through deep
            learning, enabling more efficient crop monitoring and better use of
            agricultural resources.
          </p>
        </div>
      </div>
    </section>
  );
}

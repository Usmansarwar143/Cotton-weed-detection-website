import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, User, Globe } from 'lucide-react';

export function Team() {
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

  const teamMembers = [
    {
      name: 'Sibgha Mursaleen',
      role: 'Computer Systems Engineering Student',
      description: 'Computer Systems Engineering Student at Sukkur IBA University.',
      image: '/assets/team/sibgha.png',
      github: 'https://github.com/SibghaMursaleen',
      linkedin: 'https://www.linkedin.com/in/sibgha-mursaleen-4567aa253',
      email: 'mailto:sibghamursaleen.becsef22@iba-suk.edu.pk',
      portfolio: 'https://sibghamursaleen.vercel.app/'
    },
    {
      name: 'Muhammad Usman Sarwar',
      role: 'Computer Systems Engineering Student',
      description: 'Computer Systems Engineering Student at Sukkur IBA University.',
      image: '/assets/team/usman.jpeg',
      github: 'https://www.github.com/Usmansarwar143',
      linkedin: 'https://www.linkedin.com/in/muhammad-usman-018535253',
      email: 'mailto:muhammadusman.becsef22@iba-suk.edu.pk',
      portfolio: null
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary team of researchers, engineers, and agricultural experts
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-muted rounded-xl overflow-hidden transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden group">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.description}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.email}
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label="Portfolio"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

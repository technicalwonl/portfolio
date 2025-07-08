import React, { useEffect, useRef } from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={aboutRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-8 opacity-0 animate-slide-left animation-delay-200">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
                  <User size={120} className="text-blue-400" />
                </div>
                <div className="absolute inset-0 rounded-full animate-spin-slow border-2 border-dashed border-blue-400/30"></div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-blue-400">Darla Mahalaxmi</h3>
                <p className="text-lg text-purple-300">Electronics & Communication Engineering</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8 opacity-0 animate-slide-right animation-delay-400">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Profile</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Seeking a challenging position in a reputable organization to expand and utilize my learning, 
                  skills and knowledge. Possess excellent communication skills and have an eye for detail. 
                  Flexible to work in any environment as required.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Info</h3>
                
                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300">
                  <Phone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-300">+91 6302536172</span>
                </div>

                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300">
                  <Mail className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-300">ml2542028@gmail.com</span>
                </div>

                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300">
                  <MapPin className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span className="text-gray-300">Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {['Telugu', 'Hindi', 'English'].map((language, index) => (
                    <span
                      key={language}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
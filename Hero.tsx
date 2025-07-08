import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={heroRef} className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Animated Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold opacity-0 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Darla
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-light opacity-0 animate-slide-up animation-delay-200">
              Mahalaxmi
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-400">
            Electronics & Communication Engineering Student
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-600">
            Seeking a challenging position in a reputable organization to expand and utilize my learning, 
            skills and knowledge. Passionate about embedded systems and innovative technology solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 opacity-0 animate-fade-in animation-delay-800">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-slate-900 hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg animate-float opacity-20 transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-delayed opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg animate-float opacity-20 transform rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-float-delayed opacity-20"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown size={32} className="text-blue-400" />
      </button>
    </section>
  );
};
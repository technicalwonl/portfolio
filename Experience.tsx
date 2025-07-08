import React, { useEffect, useRef } from 'react';
import { Briefcase, Award, Users, BookOpen } from 'lucide-react';

export const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Industrial Training',
      company: 'TEAM ENGINEERS',
      period: '2023',
      description: 'Certified by the "TEAM ENGINEERS" Company in industrial training of duration 6 months.',
      icon: Briefcase,
      color: 'from-blue-400 to-blue-600',
      highlights: ['Human detection robot project', '6 months certification', 'Hands-on experience']
    },
    {
      title: 'Teaching Experience',
      company: 'Schools & Tuitions',
      period: '2022 - Present',
      description: 'Experience in teaching for schools and tuitions, developing communication and leadership skills.',
      icon: BookOpen,
      color: 'from-purple-400 to-purple-600',
      highlights: ['Student mentoring', 'Curriculum development', 'Communication skills']
    }
  ];

  const achievements = [
    {
      title: 'Cultural Activities',
      description: '3rd Prize in college cultural activities',
      year: '2024',
      icon: Award,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Sports Achievement',
      description: '3rd Prize in throw ball at district level',
      year: '2024',
      icon: Users,
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={experienceRef} className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-8 opacity-0 animate-slide-left animation-delay-200">
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 opacity-0 animate-slide-left"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <exp.icon className="w-full h-full text-white" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-400">{exp.period}</p>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs font-medium text-blue-300 border border-blue-400/30"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-purple-400 mb-8 opacity-0 animate-slide-right animation-delay-200">
                Achievements
              </h3>
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 opacity-0 animate-slide-right"
                    style={{ animationDelay: `${(index + 1) * 300}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="w-full h-full text-white" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-white">{achievement.title}</h4>
                          <span className="text-sm text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}

                {/* Hobbies */}
                <div className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 opacity-0 animate-slide-right animation-delay-600">
                  <h4 className="text-xl font-bold text-green-400 mb-4">Hobbies & Interests</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Reading Books', 'Dancing', 'Singing', 'Painting & Art'].map((hobby, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{hobby}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
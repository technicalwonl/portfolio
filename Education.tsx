import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Pallavi Engineering College',
      period: '2020 - Present',
      status: 'Currently pursuing 3rd year',
      description: 'Specializing in Electronics and Communication Engineering with focus on embedded systems, digital signal processing, and communication technologies.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600',
      achievements: ['Active participant in technical events', 'Strong academic performance', 'Project leadership experience']
    },
    {
      degree: 'Diploma Education',
      institution: 'Samskruti College of Engineering and Technology',
      period: '2020 - 2023',
      status: 'Completed',
      description: 'Diploma in engineering with foundation in mathematics, physics, and chemistry with excellent performance in technical subjects.',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
      achievements: ['Engineering diploma specialization', 'Mathematical excellence', 'Technical laboratory experience']
    },
    {
      degree: 'Secondary School Education',
      institution: 'Vidhyaranya Model High School',
      period: '2007 - 2020',
      status: 'Completed',
      description: 'Comprehensive secondary education with strong foundation in core subjects and extracurricular activities.',
      icon: GraduationCap,
      color: 'from-green-400 to-green-600',
      achievements: ['Well-rounded education', 'Active in cultural activities', 'Sports participation']
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={educationRef} className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="group relative opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-start">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-16 h-16 items-center justify-center mb-4 md:mb-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <edu.icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 md:ml-8">
                      <div className="group/card relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                        {/* Mobile Icon */}
                        <div className="md:hidden flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} p-3`}>
                            <edu.icon className="w-full h-full text-white" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                edu.status === 'Currently pursuing 3rd year' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                              <div className="flex items-center space-x-2">
                                <MapPin size={16} className="text-blue-400" />
                                <span className="text-sm">{edu.institution}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar size={16} className="text-purple-400" />
                                <span className="text-sm">{edu.period}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed">{edu.description}</p>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-blue-400">Key Highlights:</h4>
                            <div className="grid gap-2">
                              {edu.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                                  <span className="text-gray-300 text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 opacity-0 animate-fade-in animation-delay-600">
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-gray-300">Years of Engineering Study</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">13+</div>
              <div className="text-gray-300">Years of Academic Excellence</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">Multiple</div>
              <div className="text-gray-300">Awards & Achievements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
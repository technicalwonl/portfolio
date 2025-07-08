import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cpu, Monitor, Terminal, Zap } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'C/C++ Programming', level: 85, icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'Embedded Systems', level: 80, icon: Cpu, color: 'from-purple-400 to-purple-600' },
    { name: 'Verilog HDL', level: 75, icon: Terminal, color: 'from-green-400 to-green-600' },
    { name: 'MATLAB', level: 70, icon: Database, color: 'from-pink-400 to-pink-600' },
    { name: 'CAD LAB', level: 75, icon: Monitor, color: 'from-yellow-400 to-yellow-600' },
    { name: 'LabVIEW', level: 70, icon: Zap, color: 'from-indigo-400 to-indigo-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${skill.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>

                  {/* Progress Circle */}
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-700"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        className="text-blue-400"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={isVisible ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}` : `${2 * Math.PI * 40}`}
                        style={{
                          transition: 'stroke-dashoffset 2s ease-in-out',
                          transitionDelay: `${index * 200}ms`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center opacity-0 animate-fade-in animation-delay-600">
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Microsoft Office', 'Computer Basics', 'Project Management', 'Team Leadership', 'Problem Solving'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
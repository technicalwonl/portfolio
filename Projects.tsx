import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Notebook as Robot, Lightbulb, Cpu, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Human Detection Robot',
      description: 'An advanced robotics project using sensors and machine learning algorithms to detect and track human presence. Implemented during industrial training at TEAM ENGINEERS.',
      technologies: ['Arduino', 'Sensors', 'C++', 'Machine Learning', 'Robotics'],
      icon: Robot,
      color: 'from-blue-400 to-blue-600',
      category: 'Robotics',
      status: 'Completed',
      highlights: [
        'Real-time human detection using PIR sensors',
        'Autonomous navigation system',
        'Obstacle avoidance algorithm',
        'Remote monitoring capabilities'
      ]
    },
    {
      title: 'Smart Embedded System',
      description: 'IoT-based embedded system for smart home automation with sensor integration and remote control capabilities using microcontrollers.',
      technologies: ['Embedded C', 'IoT', 'Sensors', 'Microcontrollers', 'WiFi'],
      icon: Cpu,
      color: 'from-purple-400 to-purple-600',
      category: 'Embedded Systems',
      status: 'In Progress',
      highlights: [
        'Multiple sensor integration',
        'Real-time data monitoring',
        'Mobile app connectivity',
        'Energy-efficient design'
      ]
    },
    {
      title: 'Digital Signal Processing',
      description: 'MATLAB-based project for digital signal analysis and processing with various filtering techniques and frequency domain analysis.',
      technologies: ['MATLAB', 'Signal Processing', 'Algorithms', 'FFT', 'Filters'],
      icon: Zap,
      color: 'from-green-400 to-green-600',
      category: 'Signal Processing',
      status: 'Completed',
      highlights: [
        'Advanced filtering algorithms',
        'Frequency domain analysis',
        'Real-time signal processing',
        'Graphical user interface'
      ]
    },
    {
      title: 'VLSI Design Project',
      description: 'Verilog HDL implementation of digital circuits and FPGA programming for various logic designs and hardware optimization.',
      technologies: ['Verilog HDL', 'FPGA', 'Digital Design', 'VLSI', 'Hardware'],
      icon: Lightbulb,
      color: 'from-pink-400 to-pink-600',
      category: 'VLSI Design',
      status: 'Academic Project',
      highlights: [
        'Complex digital circuit design',
        'FPGA implementation',
        'Hardware optimization',
        'Timing analysis'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={projectsRef} className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects & Work
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-sm text-gray-400">{project.category}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : project.status === 'In Progress'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors">
                        <Github size={16} className="text-gray-400 hover:text-white" />
                      </button>
                      <button className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors">
                        <ExternalLink size={16} className="text-gray-400 hover:text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-xs font-medium text-gray-300 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in animation-delay-800">
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-blue-400/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">4+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-purple-400/20">
              <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
              <div className="text-gray-300 text-sm">Technologies Used</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-green-400/20">
              <div className="text-2xl font-bold text-green-400 mb-1">100+</div>
              <div className="text-gray-300 text-sm">Hours of Coding</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-pink-400/20">
              <div className="text-2xl font-bold text-pink-400 mb-1">6</div>
              <div className="text-gray-300 text-sm">Months Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
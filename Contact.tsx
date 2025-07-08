import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6302536172',
      href: 'tel:+916302536172',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ml2542028@gmail.com',
      href: 'mailto:ml2542028@gmail.com',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: '#',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={contactRef} className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 opacity-0 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 opacity-0 animate-slide-left animation-delay-200">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-400">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a conversation about technology and engineering. 
                  Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* 3D Floating Element */}
              <div className="relative mt-12">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mail size={48} className="text-blue-400 animate-float" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-slide-right animation-delay-400">
              <div className="relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-400/20">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-blue-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Enter your message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="text-green-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                )}

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-blue-400/20">
        <div className="container mx-auto px-6">
        </div>
      </footer>
    </section>
  );
};
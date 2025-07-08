import React from 'react';

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large rotating cube */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotateX(45deg) rotateY(45deg)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 animate-spin-slow transform-gpu perspective-1000 rotate-45"></div>
        </div>

        {/* Medium floating sphere */}
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-20 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 8}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Small hexagon */}
        <div 
          className="absolute bottom-40 left-20 w-16 h-16 opacity-15 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * -6}px) rotate(60deg)`,
            transition: 'transform 0.4s ease-out'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45"></div>
        </div>

        {/* Large diamond */}
        <div 
          className="absolute bottom-20 right-10 w-28 h-28 opacity-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * 7}px) rotate(45deg)`,
            transition: 'transform 0.6s ease-out'
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 transform rotate-45"></div>
        </div>

        {/* Small floating triangles */}
        <div 
          className="absolute top-60 left-1/2 w-12 h-12 opacity-20 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * -10}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-blue-400"></div>
        </div>

        {/* Medium circle */}
        <div 
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-15 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -7}px, ${mousePosition.y * 9}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px animate-pulse" style={{ top: '20%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px animate-pulse animation-delay-1000" style={{ top: '40%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent h-px animate-pulse animation-delay-2000" style={{ top: '60%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent h-px animate-pulse animation-delay-3000" style={{ top: '80%' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent w-px animate-pulse animation-delay-500" style={{ left: '20%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent w-px animate-pulse animation-delay-1500" style={{ left: '40%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent w-px animate-pulse animation-delay-2500" style={{ left: '60%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400 to-transparent w-px animate-pulse animation-delay-3500" style={{ left: '80%' }}></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
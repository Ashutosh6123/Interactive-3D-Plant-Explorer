
import { useEffect, useState } from 'react';

type GradientBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const GradientBackground = ({ children, className = "" }: GradientBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(123, 97, 255, 0.15) 0%, 
            rgba(0, 0, 0, 0) 50%
          )
        `
      }}
    >
      {/* Animated shapes */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;

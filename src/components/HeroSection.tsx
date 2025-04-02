'use client';

// HeroSection.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline = 'מכון כושר מוביל בישראל',
  subheadline = 'חווית לקוח מושלמת בכל ביקור',
  ctaText = 'קבע תור עכשיו',
  onCtaClick = () => console.log('CTA clicked'),
}) => {
  // State for animation
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="hero-headline"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute h-64 w-64 rounded-full bg-primary-500 blur-3xl -top-10 -right-10"></div>
        <div className="absolute h-64 w-64 rounded-full bg-secondary-500 blur-3xl -bottom-10 -left-10"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text content */}
          <div 
            className={`text-right order-2 lg:order-1 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 
              id="hero-headline"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight"
              style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
            >
              {headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {subheadline}
            </p>
            
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:ring-opacity-50"
              aria-label={ctaText}
            >
              {ctaText}
            </button>
          </div>
          
          {/* Image container */}
          <div 
            className={`relative order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Image
              src="/images/tech-gym.jpg" // Replace with your actual image path
              alt="מכון כושר מודרני עם אלמנטים טכנולוגיים"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
            
            {/* Image overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
            
            {/* Tech elements overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-800">טכנולוגיה מתקדמת</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
    </section>
  );
};

export default HeroSection;

// Add this to your globals.css or tailwind.config.js to define the custom colors
// primary-500: #4ECDC4
// secondary-500: #FF6B6B
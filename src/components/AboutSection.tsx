'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * AboutSection Component - Displays information about the fitness center
 * 
 * This component includes:
 * - Animated heading with playful typography
 * - Business description in Hebrew (RTL)
 * - Visual elements representing fitness and technology
 * - Responsive design for all device sizes
 */
const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation effect when section comes into view
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
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100 opacity-0 transition-opacity duration-1000"
      dir="rtl" // RTL direction for Hebrew
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 relative">
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 relative inline-block"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              <span className="relative z-10">אודות dddd</span>
              <span 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-primary opacity-30 transform -rotate-1"
                style={{ backgroundColor: '#4ECDC4' }}
              ></span>
            </h2>
            <div 
              className="w-12 h-1 rounded-full mb-6"
              style={{ backgroundColor: '#FF6B6B' }}
            ></div>
          </div>
          
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            אנחנו מכון כושר מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div 
              className="p-5 rounded-lg transform transition-transform hover:scale-105 duration-300"
              style={{ backgroundColor: 'rgba(78, 205, 196, 0.1)' }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: '#4ECDC4' }}>+15</div>
              <p className="text-gray-700">שנות ניסיון</p>
            </div>
            <div 
              className="p-5 rounded-lg transform transition-transform hover:scale-105 duration-300"
              style={{ backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: '#FF6B6B' }}>+1000</div>
              <p className="text-gray-700">לקוחות מרוצים</p>
            </div>
          </div>
          
          <button 
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#FF6B6B' }}
            aria-label="קרא עוד אודותינו"
          >
            קרא עוד
          </button>
        </div>
        
        {/* Visual Elements */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:rotate-1 duration-500">
            <Image
              src="/fitness-tech.jpg" // Replace with actual image path
              alt="מכון כושר בשילוב טכנולוגיה"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            />
            
            {/* Decorative elements */}
            <div 
              className="absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-80"
              style={{ backgroundColor: '#4ECDC4' }}
            ></div>
            <div 
              className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full opacity-80"
              style={{ backgroundColor: '#FF6B6B' }}
            ></div>
            
            {/* Tech overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">טכנולוגיה מתקדמת</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech icons */}
          <div className="absolute -bottom-6 right-6 bg-white p-3 rounded-full shadow-lg transform rotate-12 transition-transform hover:rotate-0 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#4ECDC4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute -top-6 left-6 bg-white p-3 rounded-full shadow-lg transform -rotate-12 transition-transform hover:rotate-0 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#FF6B6B">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Add custom styles for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
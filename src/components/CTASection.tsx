import React from 'react';
import Image from 'next/image';

/**
 * Interface for CTASection component props
 */
interface CTASectionProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  imageAlt?: string;
}

/**
 * CTASection - A call-to-action component for the fitness center
 * 
 * This component creates a high-contrast section with compelling text and a CTA button
 * designed specifically for RTL Hebrew layout with playful typography and moderate animations.
 */
const CTASection: React.FC<CTASectionProps> = ({
  headline = 'הצטרפו עכשיו וקבלו אימון ראשון בחינם!',
  description = 'אנחנו מכון כושר מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. הצטרפו אלינו עוד היום לחוויית אימון שלא הכרתם.',
  ctaText = 'קבע תור עכשיו',
  imageAlt = 'אימון טכנולוגי מתקדם במכון הכושר',
}) => {
  return (
    <section 
      dir="rtl" 
      className="bg-gradient-to-l from-[#4ECDC4] to-[#3DBDB5] text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="cta-headline"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <h2 
            id="cta-headline"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-right leading-tight"
            style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
          >
            {headline}
          </h2>
          
          <p className="text-lg md:text-xl text-right leading-relaxed max-w-lg">
            {description}
          </p>
          
          <div className="pt-4">
            <button 
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B6B]/50 focus:ring-opacity-50"
              aria-label="קבע תור לאימון במכון הכושר"
            >
              {ctaText}
              <span className="inline-block mr-2 transform transition-transform duration-300 group-hover:translate-x-1">←</span>
            </button>
          </div>
          
          {/* Urgency Message */}
          <p className="text-sm md:text-base text-white/90 font-medium mt-4">
            * המבצע בתוקף עד סוף החודש בלבד! מספר המקומות מוגבל.
          </p>
        </div>
        
        {/* Image */}
        <div className="order-1 md:order-2 relative h-64 md:h-full">
          <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-lg shadow-xl">
            <div className="absolute inset-0 bg-[#FF6B6B]/10 mix-blend-overlay rounded-lg z-10"></div>
            <Image
              src="/fitness-tech.jpg" // Replace with your actual image path
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center rounded-lg transform transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF6B6B] rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4ECDC4] rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  // Services data in Hebrew
  const services: Service[] = [
    {
      id: 1,
      title: 'אימון עם ציוד טכנולוגי מתקדם',
      description: 'התאמן עם הציוד החדשני והמתקדם ביותר בשוק, המשלב טכנולוגיה חכמה לניטור ביצועים בזמן אמת.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      id: 2,
      title: 'מעקב כושר דיגיטלי',
      description: 'נטר את התקדמותך באמצעות אפליקציה ייעודית המציגה נתונים מפורטים על האימונים, הקלוריות והביצועים שלך.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      id: 3,
      title: 'תוכניות אימון אישיות',
      description: 'קבל תוכנית אימונים מותאמת אישית המתעדכנת באופן דינמי בהתאם להתקדמותך ולמטרות הכושר שלך.',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      id: 4,
      title: 'אימוני וירטואל ריאליטי',
      description: 'חווה אימונים מרתקים בסביבות וירטואליות שונות, המשלבים משחקיות ואתגרים לשיפור המוטיבציה.',
      icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    },
    {
      id: 5,
      title: 'ניתוח ביומטרי מתקדם',
      description: 'קבל ניתוח מעמיק של תנועותיך ומבנה גופך באמצעות סורקים מתקדמים לשיפור הטכניקה ומניעת פציעות.',
      icon: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z',
    },
    {
      id: 6,
      title: 'אימוני קבוצות אינטראקטיביים',
      description: 'השתתף באימוני קבוצות עם מסכי LED אינטראקטיביים המציגים את הביצועים של כל משתתף בזמן אמת.',
      icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    }
  ];

  // Ref for intersection observer
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      dir="rtl" 
      className={`py-16 px-4 md:px-8 bg-gray-50 ${className}`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            השירותים המקצועיים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            אנחנו מציעים מגוון שירותים מתקדמים המשלבים טכנולוגיה וכושר ברמה הגבוהה ביותר
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#4ECDC4] bg-opacity-20 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-[#4ECDC4]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-right flex-grow">{service.description}</p>
                <div className="mt-4 text-center">
                  <button 
                    className="text-[#FF6B6B] font-medium hover:text-[#4ECDC4] transition-colors duration-300 inline-flex items-center group"
                    aria-label={`קרא עוד על ${service.title}`}
                  >
                    קרא עוד
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            aria-label="צור קשר לקבלת מידע נוסף"
          >
            צור קשר לקבלת מידע נוסף
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define types for our feature items
interface TechFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const TechFeatures: React.FC = () => {
  // Features data
  const features: TechFeature[] = [
    {
      id: 1,
      title: "מעקב כושר חכם",
      description: "עקוב אחר ההתקדמות שלך בזמן אמת באמצעות האפליקציה המתקדמת שלנו המסנכרנת עם כל מכשירי הכושר",
      icon: "📱",
    },
    {
      id: 2,
      title: "ציוד כושר דיגיטלי",
      description: "התאמן על מכשירים חכמים המתאימים את עצמם לביצועים שלך ומספקים משוב מיידי",
      icon: "🔄",
    },
    {
      id: 3,
      title: "אימונים וירטואליים",
      description: "השתתף באימונים וירטואליים עם מדריכים מקצועיים מהבית או מהמכון בכל זמן שנוח לך",
      icon: "🎮",
    },
    {
      id: 4,
      title: "ניתוח ביומטרי",
      description: "קבל תובנות מעמיקות על הביצועים שלך באמצעות טכנולוגיית סריקה ביומטרית מתקדמת",
      icon: "📊",
    },
    {
      id: 5,
      title: "קהילה דיגיטלית",
      description: "התחבר עם מתאמנים אחרים, שתף הישגים ותחרה באתגרים שבועיים דרך הפלטפורמה הקהילתית שלנו",
      icon: "👥",
    },
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // State to track if component is in viewport
  const [isInView, setIsInView] = useState(false);

  // Set isInView to true after component mounts to trigger animations
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dir-rtl" id="tech-features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            <span className="text-primary-500" style={{ color: '#4ECDC4' }}>טכנולוגיה</span> מתקדמת במכון הכושר שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנחנו משלבים את הטכנולוגיות החדשניות ביותר כדי להעניק לך חווית אימון מתקדמת ויעילה
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4"
              style={{ borderTopColor: feature.id % 2 === 0 ? '#FF6B6B' : '#4ECDC4' }}
              variants={itemVariants}
            >
              <div className="flex flex-col items-start">
                <div 
                  className="text-3xl mb-4 p-3 rounded-full"
                  style={{ 
                    backgroundColor: feature.id % 2 === 0 ? 'rgba(255, 107, 107, 0.1)' : 'rgba(78, 205, 196, 0.1)',
                    color: feature.id % 2 === 0 ? '#FF6B6B' : '#4ECDC4'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button 
            className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#4ECDC4' }}
          >
            הצטרפו עכשיו לחוויה טכנולוגית
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;
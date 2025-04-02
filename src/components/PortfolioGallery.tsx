'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define types for our gallery items
interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
  category: 'facilities' | 'equipment' | 'results';
  alt: string;
}

// Define the categories in Hebrew
const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'facilities', label: 'מתקנים' },
  { id: 'equipment', label: 'ציוד' },
  { id: 'results', label: 'הישגי מתאמנים' },
];

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '/images/gym-facility-1.jpg',
    caption: 'אולם האימונים המרכזי עם ציוד טכנולוגי מתקדם',
    category: 'facilities',
    alt: 'אולם אימונים מרכזי של מכון הכושר',
  },
  {
    id: 2,
    imageUrl: '/images/gym-equipment-1.jpg',
    caption: 'מכשירי כושר חכמים עם מעקב ביצועים דיגיטלי',
    category: 'equipment',
    alt: 'מכשירי כושר חכמים',
  },
  {
    id: 3,
    imageUrl: '/images/gym-results-1.jpg',
    caption: 'שרון - ירידה של 15 ק״ג ב-3 חודשים',
    category: 'results',
    alt: 'סיפור הצלחה של מתאמן',
  },
  {
    id: 4,
    imageUrl: '/images/gym-facility-2.jpg',
    caption: 'חדר היוגה והמדיטציה עם מערכת סאונד היקפית',
    category: 'facilities',
    alt: 'חדר יוגה ומדיטציה',
  },
  {
    id: 5,
    imageUrl: '/images/gym-equipment-2.jpg',
    caption: 'אזור האימון הפונקציונלי עם מסכי מעקב',
    category: 'equipment',
    alt: 'אזור אימון פונקציונלי',
  },
  {
    id: 6,
    imageUrl: '/images/gym-results-2.jpg',
    caption: 'דני - שיפור של 40% בביצועי ריצה תוך חודשיים',
    category: 'results',
    alt: 'סיפור הצלחה של מתאמן בריצה',
  },
  {
    id: 7,
    imageUrl: '/images/gym-facility-3.jpg',
    caption: 'בריכת השחייה עם מערכת ניטור דופק אלחוטית',
    category: 'facilities',
    alt: 'בריכת שחייה',
  },
  {
    id: 8,
    imageUrl: '/images/gym-equipment-3.jpg',
    caption: 'מכשירי הכוח החדשניים עם התאמה אישית',
    category: 'equipment',
    alt: 'מכשירי כוח חדשניים',
  },
];

const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filter items based on selected category
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredItems(galleryItems);
      } else {
        setFilteredItems(
          galleryItems.filter((item) => item.category === activeCategory)
        );
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-gray-50 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            הגלריה שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            צפו במתקנים המתקדמים, ציוד הטכנולוגי והישגי המתאמנים במכון הכושר המוביל בתחום הטכנולוגיה
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? '#4ECDC4' : '',
              }}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
            isLoading ? 'opacity-50' : 'opacity-100'
          }`}
        >
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Using Next.js Image component for optimization */}
                <div className="w-full h-full relative">
                  {/* In a real project, you'd use actual images */}
                  <div 
                    className="w-full h-full bg-gray-300 animate-pulse"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    aria-label={item.alt}
                  />
                </div>
                
                {/* Hover overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span 
                      className="inline-block px-3 py-1 text-xs rounded-full mb-2"
                      style={{ backgroundColor: '#FF6B6B', color: 'white' }}
                    >
                      {categories.find(cat => cat.id === item.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-800 font-medium text-right" style={{ fontFamily: 'var(--font-primary)' }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">לא נמצאו פריטים בקטגוריה זו</p>
          </div>
        )}
      </div>

      {/* Add CSS variables for the brand colors */}
      <style jsx global>{`
        :root {
          --primary-color: #4ECDC4;
          --secondary-color: #FF6B6B;
          --font-primary: 'Rubik', 'Heebo', sans-serif;
        }
        
        /* Add some playful typography styles */
        h2 {
          font-family: var(--font-primary);
          letter-spacing: -0.5px;
        }
        
        /* Ensure RTL support */
        [dir="rtl"] {
          text-align: right;
        }
        
        .bg-primary {
          background-color: var(--primary-color);
        }
        
        .text-primary {
          color: var(--primary-color);
        }
        
        .bg-secondary {
          background-color: var(--secondary-color);
        }
        
        .text-secondary {
          color: var(--secondary-color);
        }
      `}</style>
    </section>
  );
};

export default PortfolioGallery;
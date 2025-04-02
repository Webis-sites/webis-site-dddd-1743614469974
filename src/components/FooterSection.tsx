'use client';

import { useState, FormEvent } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  id: string;
  icon: JSX.Element;
  url: string;
  label: string;
}

interface NavLink {
  id: string;
  label: string;
  url: string;
}

const FooterSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  
  // Social media links data
  const socialLinks: SocialLink[] = [
    { id: 'facebook', icon: <FaFacebook className="text-xl" />, url: 'https://facebook.com', label: 'פייסבוק' },
    { id: 'instagram', icon: <FaInstagram className="text-xl" />, url: 'https://instagram.com', label: 'אינסטגרם' },
    { id: 'twitter', icon: <FaTwitter className="text-xl" />, url: 'https://twitter.com', label: 'טוויטר' },
    { id: 'linkedin', icon: <FaLinkedin className="text-xl" />, url: 'https://linkedin.com', label: 'לינקדאין' },
  ];
  
  // Navigation links data
  const navLinks: NavLink[] = [
    { id: 'home', label: 'דף הבית', url: '/' },
    { id: 'about', label: 'אודות', url: '/about' },
    { id: 'services', label: 'שירותים', url: '/services' },
    { id: 'trainers', label: 'מאמנים', url: '/trainers' },
    { id: 'schedule', label: 'לוח זמנים', url: '/schedule' },
    { id: 'membership', label: 'מנויים', url: '/membership' },
    { id: 'contact', label: 'צור קשר', url: '/contact' },
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 3000);
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white rtl" dir="rtl">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-500" style={{ color: '#4ECDC4' }}>
              מכון כושר dddd
            </h3>
            <p className="text-gray-300 mt-2">
              אנחנו מכון כושר מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaPhone className="text-secondary-500" style={{ color: '#FF6B6B' }} />
                <span>03-1234567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaEnvelope className="text-secondary-500" style={{ color: '#FF6B6B' }} />
                <span>info@dddd-fitness.co.il</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaMapMarkerAlt className="text-secondary-500" style={{ color: '#FF6B6B' }} />
                <span>רחוב הטכנולוגיה 123, תל אביב</span>
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>
              ניווט מהיר
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-secondary-500 transition-colors duration-300"
                    style={{ '--hover-color': '#FF6B6B' } as React.CSSProperties}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>
              עקבו אחרינו
            </h3>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-secondary-500 p-3 rounded-full transition-colors duration-300"
                  style={{ '--hover-bg': '#FF6B6B' } as React.CSSProperties}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>
                שעות פעילות
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>ראשון - חמישי: 06:00 - 23:00</li>
                <li>שישי: 06:00 - 19:00</li>
                <li>שבת: 08:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          {/* Column 4: Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>
              צור קשר
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  שם
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  style={{ '--focus-ring': '#4ECDC4' } as React.CSSProperties}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  style={{ '--focus-ring': '#4ECDC4' } as React.CSSProperties}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  style={{ '--focus-ring': '#4ECDC4' } as React.CSSProperties}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 rounded-md transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                style={{ backgroundColor: '#4ECDC4', '--hover-bg': '#3dbdb5', '--focus-ring': '#4ECDC4' } as React.CSSProperties}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
              
              {submitSuccess === true && (
                <p className="text-green-400 text-sm mt-2">ההודעה נשלחה בהצלחה!</p>
              )}
              
              {submitSuccess === false && (
                <p className="text-red-400 text-sm mt-2">אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} מכון כושר dddd. כל הזכויות שמורות.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 space-x-reverse text-sm text-gray-400">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors duration-300">
                    מדיניות פרטיות
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors duration-300">
                    תנאי שימוש
                  </a>
                </li>
                <li>
                  <a href="/accessibility" className="hover:text-white transition-colors duration-300">
                    נגישות
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
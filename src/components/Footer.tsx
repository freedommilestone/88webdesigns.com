import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Footer = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  return (
    <footer 
      ref={sectionRef}
      className="bg-gray-900 text-white py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div
            className={`transition-all duration-700 ease-in-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: animate ? '0ms' : '0ms' }}
          >
            <h3 className="text-2xl font-bold mb-4">FreeWebsiteService</h3>
            <p className="text-gray-400 mb-6">
              Professional websites for local businesses. No cost, no catch, just amazing results.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
          
          <div
            className={`transition-all duration-700 ease-in-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: animate ? '100ms' : '0ms' }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white py-1">Home</a></li>
              <li><a href="#" className="hover:text-white py-1">Portfolio</a></li>
              <li><a href="#" className="hover:text-white py-1">Services</a></li>
              <li><a href="#" className="hover:text-white py-1">About Us</a></li>
              <li><a href="#" className="hover:text-white py-1">Contact</a></li>
            </ul>
          </div>
          
          <div
            className={`transition-all duration-700 ease-in-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: animate ? '200ms' : '0ms' }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white py-1">Website Design</a></li>
              <li><a href="#" className="hover:text-white py-1">E-commerce</a></li>
              <li><a href="#" className="hover:text-white py-1">SEO Services</a></li>
              <li><a href="#" className="hover:text-white py-1">Hosting</a></li>
              <li><a href="#" className="hover:text-white py-1">Maintenance</a></li>
            </ul>
          </div>
          
          <div
            className={`transition-all duration-700 ease-in-out ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: animate ? '300ms' : '0ms' }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>hello@freewebsiteservice.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>123 Business St, City, State</span>
              </div>
            </div>
          </div>
        </div>
        
        <div
          className={`border-t border-gray-800 mt-12 pt-8 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: animate ? '400ms' : '0ms' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FreeWebsiteService. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm py-1">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm py-1">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm py-1">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

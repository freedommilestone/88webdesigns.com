import React, { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-20 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Transparent Pricing
        </h2>
        <p
          className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 ease-in-out delay-100 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          No hidden fees or surprise charges. Just straightforward pricing that makes sense for your business.
        </p>
        
        <div
          className={`bg-blue-600 rounded-2xl p-8 text-white max-w-6xl mx-auto mb-12 relative transition-all duration-700 ease-in-out delay-200 hover:-translate-y-1 hover:shadow-xl ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="absolute top-6 right-6">
            <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
          
          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold mb-4">Professional Business Website</h3>
            <div className="text-4xl sm:text-5xl font-bold mb-2">
              $0 <span className="text-xl font-normal">upfront cost</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Website Design & Development */}
          <div
            className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:shadow-xl ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Website Design & Development
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-gray-500 line-through">$1,500</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900">$0</span>
              </div>
            </div>
          </div>
          
          {/* Website Hosting & Support */}
          <div
            className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-700 ease-in-out delay-400 hover:-translate-y-1 hover:shadow-xl ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Website Hosting & Support
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900">$20/month</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-left">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Secure, reliable hosting</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Regular security updates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Technical support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Regular backups</span>
              </li>
            </ul>
          </div>
          
          {/* Website Updates & Changes */}
          <div
            className={`bg-white rounded-lg border border-gray-200 p-6 transition-all duration-700 ease-in-out delay-500 hover:-translate-y-1 hover:shadow-xl ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Website Updates & Changes
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Starting at $10 per</div>
                  <div className="text-lg font-bold text-gray-900">change</div>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 text-left">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Content updates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Design modifications</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Feature additions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">Quick turnaround</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div
          className={`mt-12 transition-all duration-700 ease-in-out delay-600 ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Link to="/claim-free-website">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors"
            >
              Claim Your Free Website Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

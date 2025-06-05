import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';

const Hero = () => {
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
      className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16 sm:pb-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 ease-in-out ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              We Build Your Business<br />
              Website For <span className="text-blue-600">FREE</span>
            </h1>
            <p
              className={`text-xl text-gray-600 mb-8 max-w-lg transition-all duration-700 ease-in-out delay-200 ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              Professional websites that convert visitors into customers. 
              No coding required, just fill out a form and we'll create your business website.
            </p>
            <Link to="/claim-free-website">
              <Button
                className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-700 ease-in-out delay-300 ${
                  animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                Get Your Free Website
              </Button>
            </Link>
          </div>
          
          <div
            className={`relative transition-all duration-700 ease-in-out delay-500 hover:-translate-y-1 hover:shadow-xl  ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-lg shadow-2xl p-6 border">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-20 bg-blue-500 rounded"></div>
                  <div className="h-8 w-20 bg-green-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

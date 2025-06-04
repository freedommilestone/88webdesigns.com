import React, { useState, useEffect, useRef } from 'react';
import { FileText, Palette, Rocket } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  const steps = [
    {
      icon: FileText,
      title: "1. Order Your Free Website",
      description: "Fill out our simple form with your business information and tell us what you need."
    },
    {
      icon: Palette,
      title: "2. We Build Your Custom Website",
      description: "Our expert team designs and builds your professional website within 48 hours."
    },
    {
      icon: Rocket,
      title: "3. Launch & Ongoing Support",
      description: "We launch your website and provide ongoing support to help your business grow online."
    }
  ];

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
          How It Works
        </h2>
        <p
          className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 ease-in-out delay-100 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Getting your professional website is simple. Just follow these 3 easy steps and you'll be online in no time.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-in-out hover:-translate-y-1 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: animate ? `${200 + index * 100}ms` : '0ms' }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div
          className={`mt-12 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: animate ? `${200 + steps.length * 100}ms` : '0ms' }}
        >
          <Link to="/claim-free-website">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Your Free Website
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

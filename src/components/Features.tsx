import React, { useState, useEffect, useRef } from 'react';
import { Shield, Smartphone, Search, BarChart } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Features = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  const features = [
    {
      icon: Shield,
      title: "Secure Hosting",
      description: "Your website is hosted on secure servers with SSL certificates and daily backups to keep your data safe."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description: "All our websites are fully responsive and look great on phones, tablets, and desktop computers."
    },
    {
      icon: Search,
      title: "Search Optimized",
      description: "Built with SEO best practices to help your customers find you on Google and other search engines."
    },
    {
      icon: BarChart,
      title: "Analytics Included",
      description: "Track your website performance with built-in analytics to understand your visitors and grow your business."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-20 px-4 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Features & Benefits
        </h2>
        <p
          className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 ease-in-out delay-100 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our websites come loaded with everything you need to succeed online, all included at no extra cost.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 md:p-8 shadow-lg text-center transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-xl ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: animate ? `${200 + index * 100}ms` : '0ms' }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div
          className={`mt-12 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: animate ? `${200 + features.length * 100}ms` : '0ms' }}
        >
          <Link to="/claim-free-website">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Claim Your Free Website
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

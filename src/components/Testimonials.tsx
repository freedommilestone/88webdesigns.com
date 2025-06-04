import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Testimonials = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  const testimonials = [
    {
      name: "John Martinez",
      business: "Taste of Italy Restaurant",
      text: "Our new website has increased reservations by 32%. The online menu and reservation system have been game-changers for our business.",
      avatar: "JM",
      avatarColor: "bg-blue-100",
      beforeImage: {
        title: "Basic Text Page",
        content: ["Hours: Mon-Fri 9-5", "Call: 555-0123", "Pizza • Pasta • Wine"]
      },
      afterImage: {
        title: "Professional Restaurant Site",
        content: ["Online Menu", "Reservations", "Photo Gallery"]
      }
    },
    {
      name: "Sarah Wilson",
      business: "Elite Plumbing Services",
      text: "The online booking system has completely transformed how we schedule appointments. We're getting more leads with less effort.",
      avatar: "SW",
      avatarColor: "bg-green-100",
      beforeImage: {
        title: "Phone Only Bookings",
        content: ["Call for Service", "Emergency: 555-0456", "Licensed Plumber"]
      },
      afterImage: {
        title: "Online Booking System",
        content: ["24/7 Scheduling", "Service Areas", "Instant Quotes"]
      }
    },
    {
      name: "Robert Lee",
      business: "Urban Threads Boutique",
      text: "Our product showcase looks amazing and customers love browsing our collection online. Best investment we've made this year.",
      avatar: "RL",
      avatarColor: "bg-yellow-100",
      beforeImage: {
        title: "Store Location Only",
        content: ["Visit Our Store", "123 Main St", "Fashion • Accessories"]
      },
      afterImage: {
        title: "Online Store & Gallery",
        content: ["Product Catalog", "Online Shopping", "Style Guide"]
      }
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
          Real Results from Real Businesses
        </h2>
        <p
          className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 ease-in-out delay-100 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Join the <span className="text-blue-600 font-semibold">237 local businesses</span> that have already claimed their free website
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-2xl ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: animate ? `${200 + index * 150}ms` : '0ms' }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-gray-700 font-bold mr-4 flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-left h-24 overflow-hidden">
                "{testimonial.text}"
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div>
                  <div className="text-center text-sm text-gray-600 mb-2 font-medium">Before</div>
                  <div className="bg-gray-300 rounded-lg h-32 p-3 flex flex-col justify-between">
                    <div className="bg-gray-400 h-2 w-16 rounded mb-2"></div>
                    <div className="space-y-1 flex-grow">
                      {testimonial.beforeImage.content.map((line, i) => (
                        <div key={i} className="bg-gray-500 h-1.5 rounded" style={{width: `${60 + i * 15}%`}}></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{testimonial.beforeImage.title}</div>
                  </div>
                </div>
                <div>
                  <div className="text-center text-sm text-gray-600 mb-2 font-medium">After</div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg h-32 p-3 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-blue-400 h-2 w-20 rounded"></div>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded"></div>
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded"></div>
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-1 flex-grow">
                      {testimonial.afterImage.content.map((line, i) => (
                        <div key={i} className="bg-blue-300 h-1.5 rounded" style={{width: `${70 + i * 10}%`}}></div>
                      ))}
                    </div>
                    <div className="text-xs text-blue-700 font-medium">{testimonial.afterImage.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

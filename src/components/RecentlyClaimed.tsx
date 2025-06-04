import React, { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RecentlyClaimed = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 }, true);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000, 
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
  }, [isIntersecting]);

  const claimedWebsites = [
    {
      id: 1,
      businessName: "Harmony Dental Care",
      location: "Denver, CO",
      businessType: "Healthcare",
      template: "Medical Practice",
      status: "Claimed",
      hours: "5 hours",
      avatar: "H",
      avatarColor: "bg-green-500"
    },
    {
      id: 2,
      businessName: "Luxe Hair Lounge", 
      location: "Miami, FL",
      businessType: "Beauty",
      template: "Salon & Spa",
      status: "Claimed",
      hours: "8 hours",
      avatar: "L",
      avatarColor: "bg-pink-500"
    },
    {
      id: 3,
      businessName: "Metro Fitness Studio",
      location: "New York, NY", 
      businessType: "Fitness",
      template: "Professional Services",
      status: "Claimed",
      hours: "12 hours",
      avatar: "M",
      avatarColor: "bg-purple-500"
    },
    {
      id: 4,
      businessName: "Urban Grind Cafe",
      location: "Austin, TX",
      businessType: "Restaurant/Cafe",
      template: "Modern Cafe",
      status: "Claimed",
      hours: "15 hours",
      avatar: "U",
      avatarColor: "bg-yellow-500"
    },
    {
      id: 5,
      businessName: "Oakwood Legal",
      location: "Chicago, IL",
      businessType: "Professional Services",
      template: "Law Firm Classic",
      status: "Claimed",
      hours: "18 hours",
      avatar: "O",
      avatarColor: "bg-blue-500"
    },
    {
      id: 6,
      businessName: "Peak Performance Auto",
      location: "Seattle, WA",
      businessType: "Automotive",
      template: "Mechanic Shop",
      status: "Claimed",
      hours: "21 hours",
      avatar: "P",
      avatarColor: "bg-red-500"
    },
    {
      id: 7,
      businessName: "Sunset Realty Group",
      location: "Los Angeles, CA",
      businessType: "Real Estate",
      template: "Modern Real Estate",
      status: "Claimed",
      hours: "23 hours",
      avatar: "S",
      avatarColor: "bg-indigo-500"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 sm:py-20 px-4 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Limited Availability Notice */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-in-out ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Limited Monthly Availability
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Only <span className="text-black">10 spots</span> available this month
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We limit our free website program to ensure each business receives personalized attention and exceptional quality.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-700 ease-in-out delay-100 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">7</div>
            <div className="text-gray-600">Spots Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">48h</div>
            <div className="text-gray-600">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Recently Claimed Websites Title*/}
        <div
          className={`text-center mb-8 transition-all duration-700 ease-in-out delay-200 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Recently Claimed Websites</h3>
          <p className="text-gray-600">See what other businesses have chosen in the past 24 hours</p>
        </div>

        {/* Carousel Wrapper for Fades */}
        <div 
          className={`relative transition-all duration-700 ease-in-out delay-300 ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {/* Left Fade */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel 
            className="w-full max-w-5xl mx-auto" 
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current as any]}
          >
            <CarouselContent className="-ml-1">
              {claimedWebsites.map((website, index) => (
                <CarouselItem key={website.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between">
                      <div>
                        {/* Website Preview Mockup */}
                        <div className="bg-gray-100 rounded-lg p-4 mb-4 h-32 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-12 h-12 ${website.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2`}>
                              {website.avatar}
                            </div>
                            <div className="text-xs text-gray-500">Website Preview</div>
                          </div>
                        </div>
                        {/* Business Info */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Business Type:</span>
                            <span className="text-sm font-medium">{website.businessType}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Template:</span>
                            <span className="text-sm font-medium">{website.template}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Status:</span>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                              <span className="text-sm font-medium text-green-600">{website.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Business Name and Location */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900">{website.businessName}</h4>
                        <p className="text-sm text-gray-500">{website.location}</p>
                        <p className="text-xs text-gray-400 mt-1">{website.hours} ago</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Right Fade */}
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Bottom Notice */}
        <div
          className={`text-center mt-8 transition-all duration-700 ease-in-out delay-400 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center text-sm text-orange-600 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Only 7 spots remaining this month
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 ease-in-out delay-500 ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Link to="/claim-free-website">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Claim Your Free Website
            </Button>
          </Link>
          
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 mt-6 text-sm text-gray-500">
            <span>No credit card required</span>
            <span>60-day guarantee</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyClaimed;

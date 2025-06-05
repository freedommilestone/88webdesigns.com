import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { websiteDesigns, designCategories, WebsiteDesign, DesignCategory } from '@/data/websiteDesigns';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Check, Eye, Image as ImageIcon, Settings } from 'lucide-react'; // Added Settings for a generic placeholder
import Navbar from '@/components/Navbar'; // Import Navbar

const BrowseDesigns = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.05 }, true);

  const [activeCategory, setActiveCategory] = useState<DesignCategory>('All');

  useEffect(() => {
    if (isIntersecting) {
      setAnimate(true);
    }
    // Scroll to top when component mounts, as it's a new page
    window.scrollTo(0, 0);
  }, [isIntersecting]);

  // Basic filtering logic
  const filteredDesigns = activeCategory === 'All'
    ? websiteDesigns
    : websiteDesigns.filter(design => design.category === activeCategory);

  // Animations for elements
  const titleClass = animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  const subtitleClass = animate ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10';
  const filtersClass = animate ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10';
  const cardDelay = (index: number) => (animate ? `delay-${300 + index * 100}ms` : 'delay-0');

  return (
    <>
      <Navbar minimal={true} /> {/* Pass minimal prop here */}
      <div 
        ref={sectionRef} 
        className="min-h-screen bg-gray-50 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden" /* Adjusted top padding */
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */} 
          <div className="text-center mb-12 sm:mb-16">
            <span
              className={`inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 transition-all duration-700 ease-in-out ${titleClass}`}
            >
              Professional Templates
            </span>
            <h1 
              className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ease-in-out ${titleClass}`}
            >
              Choose Your Perfect Website Design
            </h1>
            <p 
              className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ease-in-out ${subtitleClass}`}
            >
              Browse our collection of professionally designed websites, each tailored for specific business types. Find your perfect match and claim it for free.
            </p>
          </div>

          {/* Filter Buttons */} 
          <div 
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-700 ease-in-out ${filtersClass}`}
          >
            {designCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base rounded-full font-medium transition-colors duration-200 
                  ${activeCategory === category 
                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Design Cards Grid */} 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDesigns.map((design, index) => (
              <div 
                key={design.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 
                  ${animate ? `opacity-100 translate-y-0 ${cardDelay(index)}` : 'opacity-0 translate-y-10'}
                `}
              >
                {/* Image Placeholder */} 
                <div className="relative bg-gray-100 aspect-[16/10] flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-300" />
                  <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow">
                    {design.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2.5 py-1 rounded-full shadow font-semibold">
                    {design.claimedCount}+ claimed
                  </span>
                   {/* Preview button as in the image for "Professional Services" */}
                  {design.title === 'Professional Services' && (
                      <Button variant="outline" className="absolute bg-white/80 hover:bg-white text-gray-700 border-gray-300 hover:border-gray-400 backdrop-blur-sm px-3 py-1.5 h-auto text-xs rounded-md">
                          <Eye className="w-3.5 h-3.5 mr-1.5" /> Preview
                      </Button>
                  )}
                </div>

                {/* Content */} 
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{design.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{design.description}</p>
                  
                  <ul className="space-y-2 mb-6 text-sm">
                    {design.features.slice(0, 4).map(feature => (
                      <li key={feature.name} className="flex items-center text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2.5 flex-shrink-0" />
                        {feature.name}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2">
                    <Link to="/claim-free-website" className="flex-grow">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 text-sm font-medium">
                        Claim Free
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700 flex-shrink-0">
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredDesigns.length === 0 && activeCategory !== 'All' && (
               <div 
                  className={`text-center py-12 transition-all duration-700 ease-in-out 
                  ${animate ? `opacity-100 ${cardDelay(0)}` : 'opacity-0'}
                  `}
              >
                  <Settings size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No designs found for "{activeCategory}"</h3>
                  <p className="text-gray-500">Try selecting another category or check back soon!</p>
               </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BrowseDesigns; 
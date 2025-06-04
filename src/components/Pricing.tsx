
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          No hidden fees, no surprises. Get your professional website completely free, with optional premium features available.
        </p>
        
        <div className="bg-blue-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Professional Business Website</h3>
            <div className="text-6xl font-bold mb-4">
              $0 <span className="text-2xl font-normal">startup cost</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Website Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Custom Design</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Mobile Responsive</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Contact Forms</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> SEO Optimized</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Optional Hosting & Support:</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Secure Hosting</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> SSL Certificate</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Daily Backups</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> 24/7 Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Advanced Features Available:</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> E-commerce Integration</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Online Booking</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Custom Functionality</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2" /> Marketing Tools</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Now - It's Free!
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <strong>Limited Availability:</strong> We're Only Creating 10 Free Websites Per Month In Your Area
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Apply now to secure your spot before they're all taken. Average wait time for new areas is 2-3 weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

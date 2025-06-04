
import React from 'react';
import { FileText, Palette, Rocket } from 'lucide-react';

const HowItWorks = () => {
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Getting your professional website is simple. Just follow these 3 easy steps and you'll be online in no time.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-blue-600" />
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
        
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Your Free Website
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

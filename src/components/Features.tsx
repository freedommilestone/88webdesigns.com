
import React from 'react';
import { Shield, Smartphone, Search, BarChart } from 'lucide-react';

const Features = () => {
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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Features & Benefits
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Our websites come loaded with everything you need to succeed online, all included at no extra cost.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
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
        
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Claim Your Free Website
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;


import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Miller",
      business: "Miller's Bakery",
      rating: 5,
      text: "Amazing service! They created our bakery website in just 2 days and it looks absolutely professional. Our online orders have increased by 300%.",
      avatar: "SM"
    },
    {
      name: "John Davis",
      business: "Davis Law Firm",
      rating: 5,
      text: "Professional website that perfectly represents our law firm. The team understood our needs and delivered exactly what we wanted.",
      avatar: "JD"
    },
    {
      name: "Maria Garcia",
      business: "Garcia Restaurant",
      rating: 5,
      text: "Excellent work! Our restaurant website is beautiful and our customers love the online reservation system. Highly recommended!",
      avatar: "MG"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Local Businesses Like Yours
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Join over 1000+ local businesses who have transformed their online presence with our free website service.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

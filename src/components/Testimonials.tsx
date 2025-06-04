
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Martinez",
      business: "Taste of Italy Restaurant",
      text: "Our new website has increased reservations by 32%. The online menu and reservation system have been game-changers for our business.",
      avatar: "JM",
      avatarColor: "bg-blue-100"
    },
    {
      name: "Sarah Wilson",
      business: "Elite Plumbing Services",
      text: "The online booking system has completely transformed how we schedule appointments. We're getting more leads with less effort.",
      avatar: "SW",
      avatarColor: "bg-green-100"
    },
    {
      name: "Robert Lee",
      business: "Urban Threads Boutique",
      text: "Our product showcase looks amazing and customers love browsing our collection online. Best investment we've made this year.",
      avatar: "RL",
      avatarColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Local Businesses Like Yours
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Join the <span className="text-blue-600 font-semibold">237 local businesses</span> that have already claimed their free website
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-gray-700 font-bold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-left">"{testimonial.text}"</p>
              
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-center text-sm text-gray-600 mb-2 font-medium">Before</div>
                  <div className="bg-gray-300 rounded-lg h-24 flex items-center justify-center">
                    <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <div className="text-center text-sm text-gray-600 mb-2 font-medium">After</div>
                  <div className="bg-blue-200 rounded-lg h-24 flex items-center justify-center">
                    <div className="w-full h-full bg-blue-200 rounded-lg"></div>
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


import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecentlyClaimed = () => {
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
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Limited Availability Notice */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Limited Monthly Availability
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Only <span className="text-black">10 spots</span> available this month
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We limit our free website program to ensure each business receives personalized attention and exceptional quality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">7</div>
            <div className="text-gray-600">Spots Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">48h</div>
            <div className="text-gray-600">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Recently Claimed Websites */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Recently Claimed Websites</h3>
          <p className="text-gray-600">See what other businesses have chosen in the past 24 hours</p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {claimedWebsites.map((website) => (
                <CarouselItem key={website.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mx-2">
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

                    {/* Business Name and Location */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900">{website.businessName}</h4>
                      <p className="text-sm text-gray-500">{website.location}</p>
                      <p className="text-xs text-gray-400 mt-1">{website.hours} ago</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center text-sm text-orange-600 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            Only 7 spots remaining this month
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Check Availability
          </button>
          
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
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

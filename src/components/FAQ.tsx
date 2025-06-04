
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why are you building websites for free?",
      answer: "We're building our portfolio and establishing our reputation in your local market. By creating amazing websites for free, we can showcase our work and earn referrals from satisfied customers."
    },
    {
      question: "What if I don't like the website?",
      answer: "We work closely with you throughout the process and offer revisions to ensure you're completely happy with the result. Our goal is to create a website you absolutely love."
    },
    {
      question: "Do I need to provide content for the website?",
      answer: "We can work with whatever content you have, or help you create professional content. Just provide your business information and any specific requirements you have."
    },
    {
      question: "Can I make changes to the website later?",
      answer: "Yes! We provide training on how to make basic updates, and we're always available for more complex changes or additions."
    },
    {
      question: "Is there really no catch?",
      answer: "No catch! The website creation is completely free. Optional hosting and support services are available for a small monthly fee, but there's no obligation."
    },
    {
      question: "How long does it take to build the website?",
      answer: "Most websites are completed within 48-72 hours after we receive all your business information and requirements."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer optional hosting and domain services. You can also host the website anywhere you prefer - we'll help you get it set up."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to the most common questions about our free website service.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift, Users, CalendarPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl max-w-2xl w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Submission Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for claiming your free website. We've received your information and are excited to get started!
        </p>

        <div className="text-left space-y-4 border-t border-b border-gray-200 py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Next Steps:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Our team will review your requirements.</li>
            <li>We will begin designing your custom website.</li>
            <li>Expect to hear from us within <strong>24-48 hours</strong> with a preview link.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Want to speed things up or discuss specifics?</h3>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* Replace # with actual calendar link */}
              <CalendarPlus className="w-5 h-5 mr-2" />
              Schedule a Brief Consultation Call
            </a>
          </Button>
          <p className="text-xs text-gray-500 mt-2">Optional, but recommended for a personalized touch!</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <Gift className="w-10 h-10 text-blue-500 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Refer a Friend, Get a Free Month!</h3>
          <p className="text-sm text-blue-600 mb-4">
            Know another business owner who could use a free professional website? Refer them and get one month of hosting free if they sign up!
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-700 w-full sm:w-auto">
            <Users className="w-5 h-5 mr-2" />
            Refer a Business Owner
          </Button>
        </div>

        <div className="mt-10">
          <Link to="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              &larr; Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 
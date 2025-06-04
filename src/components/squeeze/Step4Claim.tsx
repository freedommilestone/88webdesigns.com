import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ShieldCheck, CalendarPlus, ExternalLink } from 'lucide-react';

interface Step4ClaimProps {
  formData: {
    businessName: string;
    ownerFirstName: string;
    ownerLastName: string;
    email: string;
    industryType: string;
    primaryGoal: string;
    termsAccepted: boolean;
  };
  handleBooleanChange: (input: string, value: boolean) => void;
}

const Step4Claim: React.FC<Step4ClaimProps> = ({ formData, handleBooleanChange }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Claim Your Free Website!</h2>
        <p className="text-sm text-gray-500">You're almost there. Please review the information and agree to the terms.</p>
      </div>

      {/* Information Summary - Basic Example */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Summary:</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Business Name:</span> {formData.businessName || 'Not provided'}</p>
          <p><span className="font-medium">Contact:</span> {formData.ownerFirstName} {formData.ownerLastName} ({formData.email || 'Not provided'})</p>
          <p><span className="font-medium">Industry:</span> {formData.industryType || 'Not specified'}</p>
          <p><span className="font-medium">Primary Goal:</span> {formData.primaryGoal || 'Not specified'}</p>
        </div>
        <p className="text-xs text-gray-500 mt-3">A full summary will be sent to your email upon submission.</p>
      </div>

      {/* Hosting and Support Fee */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-md font-semibold text-blue-700 mb-2">Important: Hosting & Support</h3>
        <p className="text-sm text-blue-600">
          Your website design and development are <strong>100% FREE</strong>. 
          To keep your website live, secure, and supported, a <strong className="underline">$20/month fee</strong> applies for our premium hosting and ongoing technical support. 
          This includes regular backups, security updates, and access to our support team. 
          You can cancel anytime.
        </p>
      </div>

      {/* Consultation Call Option */}
      <div className="pt-4">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Optional: Schedule a Quick Chat</h3>
        <p className="text-sm text-gray-600 mb-3">Have questions? Want to discuss your project in more detail? Schedule a free, no-obligation 15-minute call with our team.</p>
        <Button variant="outline" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer"> {/* Replace # with actual calendar link */}
            <CalendarPlus className="w-4 h-4 mr-2" />
            Schedule Consultation <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
          </a>
        </Button>
      </div>

      {/* Urgency and Reassurance */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 p-3 bg-orange-50 border border-orange-200 rounded-md flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-xs text-orange-700">Limited Time Offer: We can only accept <strong className="font-semibold">3 more free website claims</strong> this month!</p>
        </div>
        <div className="flex-1 p-3 bg-green-50 border border-green-200 rounded-md flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-xs text-green-700"><strong className="font-semibold">100% Satisfaction Guarantee.</strong> We'll work with you until you love your new website.</p>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="termsAccepted" 
            checked={formData.termsAccepted}
            onCheckedChange={(checkedState) => handleBooleanChange('termsAccepted', !!checkedState)}
            className="mt-0.5"
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="termsAccepted" className="text-sm font-medium text-gray-700 cursor-pointer">
              I have read and agree to the <a href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">Terms and Conditions</a> and acknowledge the $20/month hosting and support fee after the free website build.
            </Label>
            {/* <p className="text-xs text-gray-500">You must accept the terms to proceed.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Claim; 
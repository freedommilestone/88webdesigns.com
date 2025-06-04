import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from 'lucide-react';

interface Step1BasicInfoProps {
  formData: {
    businessName: string;
    ownerFirstName: string;
    ownerLastName: string;
    email: string;
    phone: string;
  };
  handleChange: (input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => void;
}

const Step1BasicInfo: React.FC<Step1BasicInfoProps> = ({ formData, handleChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Basic Information</h2>
        <p className="text-sm text-gray-500">Let's start with the essentials to understand your business.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <Label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</Label>
          <Input 
            type="text" 
            name="businessName" 
            id="businessName"
            value={formData.businessName}
            onChange={handleChange('businessName')}
            placeholder="e.g., Mike's Plumbing Co."
            className="w-full"
          />
          {/* Autocomplete functionality to be added later if possible */}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="ownerFirstName" className="block text-sm font-medium text-gray-700 mb-1">Owner's First Name</Label>
            <Input 
              type="text" 
              name="ownerFirstName" 
              id="ownerFirstName"
              value={formData.ownerFirstName}
              onChange={handleChange('ownerFirstName')}
              placeholder="John"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="ownerLastName" className="block text-sm font-medium text-gray-700 mb-1">Owner's Last Name</Label>
            <Input 
              type="text" 
              name="ownerLastName" 
              id="ownerLastName"
              value={formData.ownerLastName}
              onChange={handleChange('ownerLastName')}
              placeholder="Doe"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</Label>
          <Input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</Label>
          <Input 
            type="tel" 
            name="phone" 
            id="phone"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="(555) 123-4567"
            className="w-full"
          />
          <p className="mt-1 text-xs text-gray-500">We'll use this to contact you about your website. No spam, ever.</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 flex items-center space-x-2 text-xs text-gray-500">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span>We respect your privacy and will never share your information with third parties.</span>
      </div>
    </div>
  );
};

export default Step1BasicInfo; 
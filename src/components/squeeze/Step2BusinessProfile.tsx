import React from 'react';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface Step2BusinessProfileProps {
  formData: {
    industryType: string;
    yearsInBusiness: string;
    currentWebsiteStatus: string;
    numberOfEmployees: string;
    currentWebsiteURL?: string;
  };
  handleChange: (input: string) => (valueOrEvent: string | React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioChange: (name: string, value: string) => void;
}

const industryTypes = [
  "Restaurant/Cafe", "Retail Store", "Professional Services (e.g., Law, Accounting)", 
  "Healthcare (e.g., Clinic, Dentist)", "Home Services (e.g., Plumbing, HVAC)", 
  "Beauty/Wellness (e.g., Salon, Spa)", "Fitness/Recreation", "Trades (e.g., Construction, Electrician)",
  "Automotive", "Real Estate", "Non-Profit", "Other"
];

const yearsOptions = ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
const employeeOptions = ["Just me", "2-5 employees", "6-10 employees", "11-50 employees", "50+ employees"];
const websiteStatusOptions = [
  { value: "none", label: "I don't have a website" },
  { value: "outdated", label: "It's outdated or needs a redesign" },
  { value: "mobile-unfriendly", label: "It's not mobile-friendly" },
  { value: "functional", label: "It's functional, but could be better" },
  { value: "happy", label: "I'm happy with my current site (just browsing)"}
];

const Step2BusinessProfile: React.FC<Step2BusinessProfileProps> = ({ formData, handleChange, handleRadioChange }) => {
  return (
    <div className="flex-grow space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Business Profile</h2>
        <p className="text-sm text-gray-500">Tell us a bit more about your business.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <Label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-1">Industry Type</Label>
          <Select value={formData.industryType} onValueChange={handleChange('industryType')}>
            <SelectTrigger id="industryType" className="w-full">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industryTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700 mb-1">Years in Business</Label>
            <Select value={formData.yearsInBusiness} onValueChange={handleChange('yearsInBusiness')}>
              <SelectTrigger id="yearsInBusiness" className="w-full">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {yearsOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="numberOfEmployees" className="block text-sm font-medium text-gray-700 mb-1">Number of Employees</Label>
            <Select value={formData.numberOfEmployees} onValueChange={handleChange('numberOfEmployees')}>
              <SelectTrigger id="numberOfEmployees" className="w-full">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {employeeOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Current Website Status</Label>
          <RadioGroup 
            value={formData.currentWebsiteStatus} 
            onValueChange={(value) => handleRadioChange('currentWebsiteStatus', value)}
            className="space-y-2"
          >
            {websiteStatusOptions.map(option => (
              <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value={option.value} id={`status-${option.value}`} />
                <Label htmlFor={`status-${option.value}`} className="font-normal cursor-pointer w-full">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="currentWebsiteURL" className="block text-sm font-medium text-gray-700 mb-1">
            Current Website URL <span className="text-xs text-gray-500">(Optional)</span>
          </Label>
          <Input 
            type="url" 
            name="currentWebsiteURL" 
            id="currentWebsiteURL"
            value={formData.currentWebsiteURL || ''}
            onChange={handleChange('currentWebsiteURL')}
            placeholder="e.g., https://www.yourbusiness.com"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2BusinessProfile; 
import React from 'react';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Added for potentially more detailed color preferences

interface Step3WebsiteNeedsProps {
  formData: {
    primaryGoal: string;
    mustHaveFeatures: string[];
    preferredDesignStyle: string;
    brandColors: string;
    // Conditional fields
    approxProducts?: string; // For e-commerce
  };
  handleChange: (input: string) => (valueOrEvent: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (feature: string) => void;
}

const primaryGoalOptions = [
  "Lead Generation (e.g., contact forms, appointments)",
  "Provide Information / Online Brochure",
  "E-commerce / Sell Products Online",
  "Build a Community / Membership Site",
  "Showcase Portfolio / Creative Work",
  "Other"
];

const featureOptions = [
  { id: "contactForm", label: "Advanced Contact Form(s)" },
  { id: "blog", label: "Blog / News Section" },
  { id: "photoGallery", label: "Photo/Video Gallery" },
  { id: "testimonials", label: "Testimonials Showcase" },
  { id: "onlineBooking", label: "Online Booking/Appointments" },
  { id: "mapsIntegration", label: "Google Maps Integration" },
  { id: "socialMediaFeed", label: "Social Media Feed Integration" },
  { id: "faqSection", label: "FAQ Section" },
];

const designStyleOptions = [
  "Modern & Clean", "Minimalist & Simple", "Playful & Creative", 
  "Corporate & Professional", "Elegant & Sophisticated", "Bold & Vibrant", "Not Sure Yet"
];

const Step3WebsiteNeeds: React.FC<Step3WebsiteNeedsProps> = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-grow space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Website Requirements</h2>
          <p className="text-sm text-gray-500">Help us understand what your new website needs to achieve.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-700 mb-1">Primary Goal for Your Website</Label>
            <Select value={formData.primaryGoal} onValueChange={handleChange('primaryGoal')}>
              <SelectTrigger id="primaryGoal" className="w-full">
                <SelectValue placeholder="Select primary goal" />
              </SelectTrigger>
              <SelectContent>
                {primaryGoalOptions.map(goal => (
                  <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Conditional Field for E-commerce */}
          {formData.primaryGoal === "E-commerce / Sell Products Online" && (
            <div>
              <Label htmlFor="approxProducts" className="block text-sm font-medium text-gray-700 mb-1">Approximately how many products will you sell?</Label>
              <Input 
                type="text" 
                name="approxProducts" 
                id="approxProducts"
                value={formData.approxProducts || ''}
                onChange={handleChange('approxProducts')}
                placeholder="e.g., 10-50, 100+, etc."
                className="w-full"
              />
            </div>
          )}

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Must-Have Features (select all that apply)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {featureOptions.map(feature => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={feature.id} 
                    checked={formData.mustHaveFeatures.includes(feature.id)}
                    onCheckedChange={() => handleCheckboxChange(feature.id)}
                  />
                  <Label htmlFor={feature.id} className="font-normal text-sm cursor-pointer">{feature.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="preferredDesignStyle" className="block text-sm font-medium text-gray-700 mb-1">Preferred Design Style</Label>
            <Select value={formData.preferredDesignStyle} onValueChange={handleChange('preferredDesignStyle')}>
              <SelectTrigger id="preferredDesignStyle" className="w-full">
                <SelectValue placeholder="Select a design style" />
              </SelectTrigger>
              <SelectContent>
                {designStyleOptions.map(style => (
                  <SelectItem key={style} value={style}>{style}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="brandColors" className="block text-sm font-medium text-gray-700 mb-1">Brand Colors (Optional)</Label>
            <Textarea 
              name="brandColors" 
              id="brandColors"
              value={formData.brandColors}
              onChange={handleChange('brandColors')}
              placeholder="e.g., Primary: #005A9C (Blue), Secondary: #FDB813 (Yellow). Or describe: 'Earthy tones like forest green and beige'"
              className="w-full min-h-[80px]"
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">If you have specific brand colors, list them here (hex codes preferred if known).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3WebsiteNeeds; 
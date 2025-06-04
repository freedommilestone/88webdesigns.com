import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Step1BasicInfo from '@/components/squeeze/Step1BasicInfo';
import Step2BusinessProfile from '@/components/squeeze/Step2BusinessProfile';
import Step3WebsiteNeeds from '@/components/squeeze/Step3WebsiteNeeds';
import Step4Claim from '@/components/squeeze/Step4Claim';
import ProgressIndicator from '@/components/squeeze/ProgressIndicator';
import { Button } from '@/components/ui/button';

const SqueezePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    ownerFirstName: '',
    ownerLastName: '',
    email: '',
    phone: '',
    // Step 2
    industryType: '',
    yearsInBusiness: '',
    currentWebsiteStatus: '',
    numberOfEmployees: '',
    currentWebsiteURL: '',
    // Step 3
    primaryGoal: '',
    mustHaveFeatures: [] as string[],
    preferredDesignStyle: '',
    brandColors: '',
    approxProducts: '',
    // Step 4
    consultationScheduled: false,
    termsAccepted: false,
  });

  const navigate = useNavigate();
  const totalSteps = 4;
  const stepTitles = ["Basic Information", "Business Profile", "Website Requirements", "Claim Your Website"];

  const handleDataChange = (input: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
    const value = typeof e === 'string' ? e : e.target.value;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  };
  
  const handleBooleanChange = (input: keyof typeof formData, value: boolean) => {
    setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
  };

  const handleCheckboxChange = (feature: string) => {
    setFormData(prevState => {
      const newFeatures = prevState.mustHaveFeatures.includes(feature)
        ? prevState.mustHaveFeatures.filter(f => f !== feature)
        : [...prevState.mustHaveFeatures, feature];
      return { ...prevState, mustHaveFeatures: newFeatures };
    });
  };
  
  const handleRadioChange = (name: keyof typeof formData, value: string) => {
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    navigate('/thank-you');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo formData={formData} handleChange={handleDataChange} />;
      case 2:
        const step2Data = {
          industryType: formData.industryType,
          yearsInBusiness: formData.yearsInBusiness,
          currentWebsiteStatus: formData.currentWebsiteStatus,
          numberOfEmployees: formData.numberOfEmployees,
          currentWebsiteURL: formData.currentWebsiteURL
        };
        return <Step2BusinessProfile formData={step2Data} handleChange={handleDataChange} handleRadioChange={handleRadioChange} />;
      case 3:
        const step3Data = {
            primaryGoal: formData.primaryGoal,
            mustHaveFeatures: formData.mustHaveFeatures,
            preferredDesignStyle: formData.preferredDesignStyle,
            brandColors: formData.brandColors,
            approxProducts: formData.approxProducts,
        };
        return <Step3WebsiteNeeds formData={step3Data} handleChange={handleDataChange} handleCheckboxChange={handleCheckboxChange} />;
      case 4:
        const step4Data = {
            businessName: formData.businessName,
            ownerFirstName: formData.ownerFirstName,
            ownerLastName: formData.ownerLastName,
            email: formData.email,
            industryType: formData.industryType,
            primaryGoal: formData.primaryGoal,
            termsAccepted: formData.termsAccepted,
        };
        return <Step4Claim formData={step4Data} handleBooleanChange={handleBooleanChange} />;
      default:
        return <Step1BasicInfo formData={formData} handleChange={handleDataChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 sm:py-12 px-4">
      <div className="w-full max-w-xl">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} stepTitles={stepTitles} />
        
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl">
          {renderStep()}
          <div className={`mt-8 flex ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
            {currentStep > 1 && (
              <Button 
                variant="outline"
                onClick={prevStep} 
              >
                Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button 
                onClick={nextStep} 
                className="ml-auto"
              >
                Continue to Step {currentStep + 1}
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 ml-auto"
                disabled={!formData.termsAccepted}
              >
                Claim Your Free Website
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqueezePage; 
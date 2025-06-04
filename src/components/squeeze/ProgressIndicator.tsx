import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[]; // Array of titles for each step
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps, stepTitles }) => {
  const currentTitle = stepTitles[currentStep - 1] || 'Step ' + currentStep;

  return (
    <div className="w-full mb-6 sm:mb-8">
      <div className="text-center mb-2">
        <p className="text-sm font-medium text-blue-600">
          Step {currentStep} of {totalSteps}: <span className="font-bold text-gray-700">{currentTitle}</span>
        </p>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5 w-full">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator; 
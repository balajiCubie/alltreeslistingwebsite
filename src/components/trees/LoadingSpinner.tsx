import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium', color = 'blue-500' }) => {
  let spinnerSize = '';
  switch (size) {
    case 'small':
      spinnerSize = 'h-5 w-5';
      break;
    case 'large':
      spinnerSize = 'h-12 w-12';
      break;
    case 'medium':
    default:
      spinnerSize = 'h-8 w-8';
      break;
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-t-4 border-${color} border-t-transparent ${spinnerSize}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;

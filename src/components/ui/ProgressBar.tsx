import React from 'react';

interface ProgressBarProps {
  progress: number; // A number between 0 and 100
  color?: string; // Tailwind CSS color class, e.g., 'bg-green-500'
  height?: string; // Tailwind CSS height class, e.g., 'h-2'
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'bg-green-500',
  height = 'h-2',
  showLabel = false,
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={`w-full bg-gray-200 rounded-full ${height}`}>
      <div
        className={`${color} ${height} rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${clampedProgress}%` }}
      >
        {showLabel && (
          <span className="text-xs font-semibold text-white flex items-center justify-center h-full">
            {clampedProgress}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;

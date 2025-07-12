import React, { useState, useRef } from 'react';

interface TooltipProps {
  children: React.ReactElement<any>; // The element that triggers the tooltip
  content: React.ReactNode; // The content to display in the tooltip
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number; // Delay in ms before showing tooltip
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top', delay = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delay);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      {React.cloneElement(children, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: handleMouseEnter, // For accessibility
        onBlur: handleMouseLeave,   // For accessibility
      })}
      {isVisible && (
        <div
          className={`absolute z-50 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap ${positionClasses[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

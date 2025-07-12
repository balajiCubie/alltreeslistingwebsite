import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onToggle = controlledOnToggle !== undefined ? controlledOnToggle : () => setInternalIsOpen(!internalIsOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
        onClick={onToggle}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
  defaultOpenIndex?: number;
  // If you want to control the accordion from parent, you can add a state here
  // activeIndex?: number;
  // onAccordionChange?: (index: number | null) => void;
}

const Accordion: React.FC<AccordionProps> = ({ children, defaultOpenIndex }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex !== undefined ? defaultOpenIndex : null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItem };

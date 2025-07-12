import React, { useState } from 'react';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  defaultActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      React.isValidElement(child) && (child.type as React.FC<TabProps>).name === 'Tab'
  );

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === index
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab.props.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {tabs[activeTab] ? tabs[activeTab].props.children : null}
      </div>
    </div>
  );
};

export { Tabs, Tab };

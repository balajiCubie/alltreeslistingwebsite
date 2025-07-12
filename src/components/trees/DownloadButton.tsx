import React from 'react';

interface DownloadButtonProps {
  onDownload: () => void;
  label?: string;
  fileType?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload, label = "Download List", fileType = "CSV" }) => {
  return (
    <button
      onClick={onDownload}
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {label} ({fileType})
    </button>
  );
};

export default DownloadButton;

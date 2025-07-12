import React from 'react';
import Button from '../common/Button';

interface DownloadFactSheetButtonProps {
  factSheetUrl: string;
  fileName?: string;
}

const DownloadFactSheetButton: React.FC<DownloadFactSheetButtonProps> = ({
  factSheetUrl,
  fileName = 'tree-fact-sheet.pdf',
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = factSheetUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} variant="primary">
      Download Fact Sheet
    </Button>
  );
};

export default DownloadFactSheetButton;

import React from 'react';

interface ARPreviewProps {
  modelUrl: string; // URL to a 3D model (e.g., .glb, .usdz)
  fallbackImageUrl?: string; // Image to display if AR is not supported
  altText: string;
}

const ARPreview: React.FC<ARPreviewProps> = ({ modelUrl, fallbackImageUrl, altText }) => {
  // This component would ideally integrate with a WebXR or AR library
  // For demonstration, it will show a placeholder or a fallback image.

  const isARSupported = () => {
    // A more robust check would involve navigator.xr or specific AR libraries
    return typeof navigator !== 'undefined' && navigator.xr !== undefined;
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Augmented Reality Preview</h2>
      {isARSupported() ? (
        <>
          <p className="text-gray-700 mb-4">
            Tap the button below to view the {altText} in Augmented Reality!
          </p>
          {/* This would be a proper AR viewer component or a button to launch AR */}
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => alert(`Launching AR for model: ${modelUrl}`)}
          >
            View in AR
          </button>
          <p className="text-sm text-gray-500 mt-2">
            (Requires an AR-compatible device and browser)
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-700 mb-4">
            Your device or browser does not support Augmented Reality.
          </p>
          {fallbackImageUrl && (
            <img src={fallbackImageUrl} alt={altText} className="max-w-full h-auto rounded-md shadow-sm" />
          )}
          {!fallbackImageUrl && (
            <p className="text-gray-500">Displaying a static preview instead.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ARPreview;

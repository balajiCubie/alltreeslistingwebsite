import React, { useState } from 'react';
import Image from 'next/image';

interface TreeImageGalleryProps {
  images: string[];
  altText: string;
}

const TreeImageGallery: React.FC<TreeImageGalleryProps> = ({ images, altText }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No images available.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-96 mb-4 rounded-lg overflow-hidden shadow-md">
        <Image
          src={mainImage}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-24 h-24 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${
              image === mainImage ? 'border-green-500' : 'border-transparent'
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`${altText} thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeImageGallery;

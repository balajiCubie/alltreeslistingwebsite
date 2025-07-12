import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  attribution?: string;
}

interface TreeImageGalleryProps {
  images: ImageProps[];
}

const TreeImageGallery: React.FC<TreeImageGalleryProps> = ({ images }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              placeholder="blur" // Assuming blurDataURL will be provided or generated
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Placeholder for blur
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2">
                <p>{image.caption}</p>
                {image.attribution && <p className="text-xs opacity-80">Photo by: {image.attribution}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreeImageGallery;

import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-1">{name}</h3>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-600">${price.toFixed(2)}</span>
          <Button variant="primary" onClick={() => onAddToCart(id)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

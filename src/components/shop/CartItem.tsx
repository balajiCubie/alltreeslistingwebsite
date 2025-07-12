import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

interface CartItemProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  onRemove: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  onRemove,
  onUpdateQuantity,
}) => {
  const itemTotal = price * quantity;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-green-800">{name}</h3>
        <p className="text-gray-600 text-sm">${price.toFixed(2)} each</p>
        <div className="flex items-center mt-2">
          <Button
            variant="secondary"
            size="small"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </Button>
          <span className="mx-2 text-gray-800">{quantity}</span>
          <Button
            variant="secondary"
            size="small"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end ml-4">
        <span className="text-lg font-bold text-green-600">${itemTotal.toFixed(2)}</span>
        <Button variant="danger" size="small" onClick={() => onRemove(id)} className="mt-2">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;

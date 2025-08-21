import React from 'react';
import { CartItemType } from '../../context/CartContext';

type Props = {
  item: CartItemType;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const CartItem: React.FC<Props> = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <li className="flex justify-between items-center py-2 border-b">
      <div>
        <span className="font-medium">{item.name}</span>
        <span className="block text-sm text-gray-500">${item.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          aria-label="Disminuir cantidad"
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          aria-label="Aumentar cantidad"
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          aria-label="Eliminar producto"
          className="ml-2 text-red-600 hover:underline"
          onClick={() => removeFromCart(item.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default CartItem;

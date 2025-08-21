import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useContext(CartContext);

  return (
    <aside className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">${getTotal().toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" disabled={cart.length === 0}>
            Pagar
          </button>
          <button className="mt-2 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </aside>
  );
};

export default Cart;

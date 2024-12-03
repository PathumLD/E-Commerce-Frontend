import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useCart();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/products');
    }
  }, [cart, navigate]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-2xl p-8 mx-auto bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-600">Order Confirmed!</h2>
          <p className="mb-6 text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="py-4 my-6 border-t border-b">
          <h3 className="mb-4 font-semibold">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="pt-4 mt-4 border-t">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-block px-6 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
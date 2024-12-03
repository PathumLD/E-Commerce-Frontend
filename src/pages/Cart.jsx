import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getCartTotal } = useCart();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="py-8 text-center">
          <p className="mb-4 text-gray-600">Your cart is empty</p>
          <Link
            to="/products"
            className="px-6 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex items-center justify-between mt-8">
            <p className="text-xl font-bold">
              Total: ${getCartTotal().toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="px-6 py-2 text-white transition-colors bg-green-600 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
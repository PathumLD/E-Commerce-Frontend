import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, getCartTotal } = useCart();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">
              Total: ${getCartTotal().toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
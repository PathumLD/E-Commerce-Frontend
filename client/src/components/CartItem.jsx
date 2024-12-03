import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-16 h-16 rounded"
        />
        <div className="ml-4">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
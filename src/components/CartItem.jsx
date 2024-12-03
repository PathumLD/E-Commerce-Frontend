import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
    toast.success(`${item.name} removed from cart`);
  };

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
      toast.success(`Updated ${item.name} quantity to ${newQuantity}`);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-4 border border-b rounded-lg">
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
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={handleRemove}
          className="ml-4 text-red-600 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
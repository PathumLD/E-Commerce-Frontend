import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col justify-between border shadow-xl rounded-xl hover:bg-black/10 hover:border-blue-700">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-48 rounded-t-xl "
      />
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <p className="my-2 text-lg font-bold">${product.price.toFixed(2)}</p>
        <div className="mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-xl hover:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="border rounded-lg shadow-md hover:bg-black/10">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-48 rounded-md"
      />
      <div className='p-2'>
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="z-50 w-full px-4 py-2 mt-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const NavLinks = ({ isMobile, onItemClick }) => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const handleLogout = () => {
    logout();
    if (onItemClick) onItemClick();
  };

  const linkClass = isMobile
    ? "block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
    : "text-white hover:text-gray-300";

  return (
    <>
      <Link
        to="/products"
        className={linkClass}
        onClick={onItemClick}
      >
        Products
      </Link>
      <Link
        to="/cart"
        className={linkClass}
        onClick={onItemClick}
      >
        Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </Link>
      {user ? (
        <>
          <span className={`${linkClass} cursor-default`}>
            Welcome, {user.name || user.email}
          </span>
          <button
            onClick={handleLogout}
            className={`${linkClass} ${isMobile ? 'w-full text-left' : ''} bg-red-600 px-4 py-2 rounded hover:bg-red-700`}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className={linkClass}
            onClick={onItemClick}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={linkClass}
            onClick={onItemClick}
          >
            Register
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
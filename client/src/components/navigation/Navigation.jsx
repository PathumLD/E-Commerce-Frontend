import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuButton from './MobileMenuButton';
import NavLinks from './NavLinks';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            E-Shop
          </Link>

          {/* Mobile menu button */}
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />

          {/* Desktop navigation */}
          <div className="items-center hidden space-x-4 md:flex">
            <NavLinks />
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks isMobile={true} onItemClick={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
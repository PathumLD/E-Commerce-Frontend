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
    <nav className="sticky top-0 z-50 text-white shadow-md bg-blue-950 backdrop-blur-xl lg:rounded-t-xl">
      <div className="container px-6 mx-auto md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            E-Shop
          </Link>

          {/* Mobile menu button */}
          <MobileMenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}
          />

          {/* Desktop navigation */}
          <div className="items-center hidden space-x-4 md:flex">
            <NavLinks />
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          } md:hidden`}
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

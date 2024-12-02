import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center p-2 text-white rounded-md md:hidden hover:bg-gray-700 focus:outline-none"
    >
      {isOpen ? (
        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenuButton;
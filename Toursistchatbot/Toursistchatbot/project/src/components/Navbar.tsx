import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">TourismAI</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Home</a>
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Features</a>
                <a href="#benefits" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Benefits</a>
                <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Testimonials</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Contact</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Home</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Features</a>
            <a href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Benefits</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Car, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-orange-600 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@autotrader.com</span>
            </div>
          </div>
          <div className="text-sm">
            Open 24/7 - Best Deals Guaranteed!
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">AutoTrader</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a>
            <a href="#vehicles" className="hover:text-orange-500 transition-colors">Vehicles</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a>
              <a href="#vehicles" className="hover:text-orange-500 transition-colors">Vehicles</a>
              <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Car, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // <-- import these

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // for programmatic navigation

  const handleLoginSignupClick = () => {
    navigate('/login');  // navigate to login/signup page
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-orange-600 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+977 9814345347</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>rent3669@gmail.com</span>
            </div>
          </div>
          <div className="text-sm">
            Open 12/6 - Best Deals Guaranteed!
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">Vehicle Rental</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a>
            <a href="#vehicles" className="hover:text-orange-500 transition-colors">Vehicles</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>

            <button
              onClick={handleLoginSignupClick}
              className="hover:text-orange-500 transition-colors"
              type="button"
            >
              Login/Signup
            </button>
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
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How It Works</a>
              <a href="#vehicles" className="hover:text-orange-500 transition-colors">Vehicles</a>
              <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
              <button
                onClick={onLogout}
                className="hover:text-orange-500 text-left transition-colors"
                type="button"
              >
                Logout
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

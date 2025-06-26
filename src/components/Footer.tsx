
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Car className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">vehicle Rental</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for quality used cars. We make buying and renting vehicles simple, transparent, and affordable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 rounded-full p-2 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 rounded-full p-2 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 rounded-full p-2 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 rounded-full p-2 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Vehicle Inventory</a></li>
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h3 className="text-xl font-bold mb-6">Vehicle Types</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sedans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">SUVs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Sports Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Luxury Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Electric Cars</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">📍 R79R+F85, Dantakali Path, Dharan 56700</p>
              <p className="text-gray-400">📞 +977 9805322735</p>
              <p className="text-gray-400">📞 +977 9822085975</p>
              <p className="text-gray-400">📞 +977 9814345347</p>
              <p className="text-gray-400">✉️ info@vehiclerental.com</p>
              <p className="text-gray-400">🕒 Open 12/6</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VehicleRental. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Zap, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            {/* Replace the default logo with your image */}
            <img
              src="dtronics.png"
              alt="Dtronics Logo"
              className="w-16 h-14 rounded-lg object-cover" // Increased from w-8 h-8 to w-12 h-12
            />
            <span className="text-xl font-bold text-gray-900">DTRONICS FUTURETECH SOLUTIONS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
            >
              Contact
            </Link>
            <Link
              to="/user-login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
            >
              <User className="w-4 h-4" />
              <span>User Login</span>
            </Link>
            <Link
              to="/admin-login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/user-login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>User Login</span>
            </Link>
            <Link
              to="/admin-login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105 hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

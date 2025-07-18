
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Dtronics Futuretech Solutions</span>
            </div>
            <p className="text-gray-400">
              Innovating Solutions from the Innovators.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">IoT Solutions</span></li>
              <li><span className="text-gray-400">Smart Devices</span></li>
              <li><span className="text-gray-400">Automation</span></li>
              <li><span className="text-gray-400">Consulting</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">dtronicsfuturetechsolutions@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+91 99523 15483</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Rana Nagar,Kuruppanaikenpalayam,Bhavani,Erode-638301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dtronics Futuretech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

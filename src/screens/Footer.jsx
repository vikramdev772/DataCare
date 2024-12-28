import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-lg text-white py-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              DataCenter
            </Link>
            <p className="text-gray-400 mt-4">
              Empowering your cloud computing journey with cutting-edge AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 group">
                <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="hover:text-blue-400 transition-colors duration-300">contact@datacenter.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 group">
                <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="hover:text-blue-400 transition-colors duration-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 group">
                <MapPin className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                <span className="hover:text-blue-400 transition-colors duration-300">New York, NY</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} DataCenter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
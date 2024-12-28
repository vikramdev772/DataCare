import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 supports-backdrop-blur:bg-white/10' 
          : 'bg-transparent'}
        ${isMobileMenuOpen ? 'bg-black/20 backdrop-blur-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Glassmorphism effect elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30" />

        {/* Logo */}
        <Link 
          to="/" 
          className="relative flex items-center group"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-300" />
          <span className={`text-2xl font-bold relative transition-all duration-300
            ${isScrolled ? 'text-white' : 'text-white'}
            group-hover:text-blue-400`}
          >
            DataCenter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <Link 
            to="/login" 
            className="relative group overflow-hidden"
          >
            <span className={`font-semibold transition-all duration-300
              ${isScrolled ? 'text-white' : 'text-white'}
              group-hover:text-blue-400`}
            >
              Login
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
          <Link 
            to="/signup" 
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 rounded-full blur-sm transition-all duration-300 group-hover:blur-md" />
            <span className="relative px-6 py-2.5 rounded-full font-semibold text-white inline-flex items-center space-x-2 backdrop-blur-sm
              border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:pr-8">
              <span>Sign Up</span>
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative md:hidden p-2.5 rounded-xl transition-all duration-300
            bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute top-full left-0 w-full backdrop-blur-lg
        transition-all duration-500 ease-in-out border-t border-white/10
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <nav className="flex flex-col p-6 space-y-4 bg-black/20">
          <Link 
            to="/login" 
            className="text-white/90 font-semibold hover:text-blue-400 transition-all duration-300
              hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="relative group w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 rounded-full blur-sm" />
            <span className="relative flex justify-center items-center px-6 py-2.5 rounded-full font-semibold
              text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
              Sign Up
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
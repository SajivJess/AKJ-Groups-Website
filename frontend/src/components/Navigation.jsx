import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Users, Image, MessageCircle, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Building },
    { path: '/consulties', label: 'Partners', icon: Users },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/testimonials', label: 'Reviews', icon: MessageCircle },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation - Top Horizontal */}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#CA8A04] rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-black text-lg">AKJ</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#50535B]">AKJ BUILDERS</h1>
              <p className="text-xs text-[#CA8A04] font-semibold tracking-widest">CONSTRUCTION EXCELLENCE</p>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold tracking-wide transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-[#CA8A04] shadow-lg'
                      : 'text-[#50535B] hover:text-[#CA8A04] hover:bg-[#CA8A04]/10'
                  }`}
                >
                  <IconComponent 
                    size={18} 
                    className={`transition-transform duration-300 ${
                      isActive(item.path) ? '' : 'group-hover:scale-110'
                    }`}
                  />
                  <span className="text-sm font-bold">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <button className="bg-[#CA8A04] text-white px-6 py-3 font-bold text-sm tracking-wide hover:bg-[#B8790A] transition-all duration-300 transform hover:scale-105 shadow-lg">
            GET QUOTE
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
          <div className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#CA8A04] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">AKJ</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-[#50535B]">AKJ BUILDERS</h1>
                <p className="text-xs text-[#CA8A04] font-semibold">EXCELLENCE</p>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-[#CA8A04] text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 mt-20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 h-full overflow-y-auto">
            <div className="space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-[#CA8A04] text-white shadow-lg'
                        : 'text-[#50535B] hover:bg-[#CA8A04]/10 hover:text-[#CA8A04]'
                    }`}
                  >
                    <IconComponent size={24} />
                    <span className="font-bold text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12">
              <button className="w-full bg-[#CA8A04] text-white py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-colors duration-300 rounded-xl shadow-lg">
                GET FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
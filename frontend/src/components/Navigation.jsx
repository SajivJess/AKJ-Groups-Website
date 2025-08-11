import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Users, Image, MessageCircle, FileText, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Building },
    { path: '/consulties', label: 'Consulties', icon: Users },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/testimonials', label: 'Reviews', icon: MessageCircle },
    { path: '/blog', label: 'Blog', icon: FileText },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-white shadow-lg z-50 flex-col items-center py-8">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="block">
            <div className="w-12 h-12 bg-[#CA8A04] rounded-lg flex items-center justify-center text-white font-bold text-lg transform hover:scale-110 transition-transform duration-300">
              AKJ
            </div>
          </Link>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative p-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-[#CA8A04] text-white' 
                    : 'text-[#50535B] hover:bg-[#CA8A04] hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#CA8A04] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#CA8A04]"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 right-6 z-50 p-3 bg-[#CA8A04] text-white rounded-lg shadow-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-20">
            {/* Logo */}
            <div className="mb-8">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <h1 className="text-2xl font-bold text-[#CA8A04]">AKJ BUILDERS</h1>
              </Link>
            </div>

            {/* Nav Items */}
            <div className="space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'bg-[#CA8A04] text-white' 
                        : 'text-[#50535B] hover:bg-[#CA8A04] hover:text-white'
                    }`}
                  >
                    <IconComponent size={24} />
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, User, Menu, X, PawPrint, Home, Dog, Cat, Bird, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'adopt', label: 'Adopt', icon: <PawPrint size={18} />, count: 12 },
    { id: 'foster', label: 'Foster', icon: <Heart size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  // Pet categories for dropdown
  const petCategories = [
    { id: 'dogs', label: 'Dogs', icon: <Dog size={16} />, count: 45 },
    { id: 'cats', label: 'Cats', icon: <Cat size={16} />, count: 32 },
    { id: 'birds', label: 'Birds', icon: <Bird size={16} />, count: 18 },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        if (!event.target.closest('#mobileMenuBtn')) {
          setIsMobileMenuOpen(false);
        }
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (!event.target.closest('#searchBtn')) {
          setIsSearchOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  // Handle navigation click
  const handleNavClick = (id) => {
    setActiveNav(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="container mx-auto text-center">
          <span className="flex items-center justify-center gap-2">
            <Heart size={14} className="text-red-500" />
            <span>Save a life today! <span className="font-bold text-red-400">Adopt, don't shop.</span></span>
            <Heart size={14} className="text-red-500" />
          </span>
        </div>
      </div>

      {/* Main Navbar - Gray border and moved down */}
      <div className="mt-2"> {/* Added margin-top to push navbar down */}
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md border-b border-gray-200 ' : 'bg-white border-b border-gray-200'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <PawPrint className="text-white" size={20} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                    <Heart className="text-white" size={8} />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-xl font-bold text-black">
                    Pet<span className="text-red-600">Rescue</span>
                  </h1>
                  <p className="text-xs text-gray-500 hidden md:block">Find your forever friend</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center space-x-2 px-4 py-2 transition-all duration-200 ${
                      activeNav === item.id
                        ? 'text-red-600 font-semibold'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className={activeNav === item.id ? 'text-red-600' : 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {item.count && (
                      <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
                
                {/* Pet Categories Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600">
                    <span>Categories</span>
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                    {petCategories.map((category) => (
                      <a
                        key={category.id}
                        href="#"
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-600">{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3">
                
                {/* Search Button */}
                <button
                  id="searchBtn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Search className="text-gray-600" size={20} />
                </button>

                {/* Favorites */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100">
                  <Heart className="text-red-500" size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Adopt Button */}
                <button className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
                  <PawPrint size={16} />
                  <span>Adopt Now</span>
                </button>

                {/* User Profile */}
                <button className="w-9 h-9 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
                  AJ
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-3">
                <button
                  id="searchBtn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2"
                >
                  <Search className="text-gray-600" size={22} />
                </button>
                
                <button className="relative p-2">
                  <Heart className="text-red-500" size={22} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                
                <button
                  id="mobileMenuBtn"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="text-gray-800" size={24} />
                  ) : (
                    <Menu className="text-gray-800" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="max-w-2xl mx-auto" ref={searchRef}>
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search pets, breeds, or resources..."
                      className="w-full pl-12 pr-24 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                    activeNav === item.id
                      ? 'bg-red-50 text-red-600 border border-red-100'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={activeNav === item.id ? 'text-red-600' : 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}

              {/* Pet Categories Section */}
              <div className="mt-4 p-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">Pet Categories</p>
                <div className="space-y-2">
                  {petCategories.map((category) => (
                    <button
                      key={category.id}
                      className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-600">{category.icon}</span>
                        <span className="font-medium">{category.label}</span>
                      </div>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors">
                  Start Adoption
                </button>
                <button className="w-full py-3 rounded-lg border border-red-600 text-red-600 font-semibold hover:bg-red-50 transition-colors">
                  Become a Foster
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>1-800-PET-RESCUE</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail size={16} />
                    <span>help@petrescue.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
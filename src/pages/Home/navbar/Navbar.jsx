import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Heart, User, Menu, X, PawPrint, Home, 
  Dog, Cat, Bird, Phone, Mail, ChevronDown, 
  LogOut, LogIn, UserPlus 
} from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  // Navigation items with paths
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} />, path: '/' },
    { id: 'adopt', label: 'Adopt', icon: <PawPrint size={18} />, count: 12, path: '/adoption' },
    { id: 'foster', label: 'Foster', icon: <Heart size={18} />, path: '/foster' },
    { id: 'about', label: 'About', icon: <User size={18} />, path: '/about' },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} />, path: '/contact' },
  ];

  // Pet categories for dropdown with paths
  const petCategories = [
    { id: 'dogs', label: 'Dogs', icon: <Dog size={16} />, count: 45, path: '/adopt?type=dog' },
    { id: 'cats', label: 'Cats', icon: <Cat size={16} />, count: 32, path: '/adopt?type=cat' },
    { id: 'birds', label: 'Birds', icon: <Bird size={16} />, count: 18, path: '/adopt?type=bird' },
  ];

  // User menu items with paths
  const userMenuItems = [
    { id: 'profile', label: 'My Profile', icon: <User size={16} />, path: '/profile' },
    { id: 'applications', label: 'Applications', icon: <PawPrint size={16} />, count: 3, path: '/my-applications' },
    { id: 'favorites', label: 'Favorites', icon: <Heart size={16} />, count: 5, path: '/favorites' },
    { id: 'messages', label: 'Messages', icon: <Mail size={16} />, count: 2, path: '/messages' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
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
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        if (!event.target.closest('#userMenuBtn')) {
          setShowUserMenu(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // User এর নাম থেকে ইনিশিয়াল বের করার ফাংশন
  const getUserInitials = (name) => {
    if (!name) return 'U';
    
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    } else {
      return words
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  // Handle login with user name
  const handleLogin = (userName, userEmail) => {
    const userData = {
      name: userName,
      email: userEmail
    };
    setUser(userData);
    setShowUserMenu(false);
    setIsMobileMenuOpen(false);
    alert(`Welcome back, ${userName}!`);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setShowUserMenu(false);
    alert('Logged out successfully!');
    navigate('/');
  };

  // Handle signup----
  // const handleSignup = () => {
  //   setIsMobileMenuOpen(false);
  //   navigate('/signup');
  // };

  // Demo users for testing
  const demoUsers = [
    { name: 'Ayan Jowarder', email: 'ayan@example.com' },
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'David Miller', email: 'david@example.com' },
  ];

  // Check if nav item is active
  const isNavActive = (path) => {
    return location.pathname === path;
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

      {/* Main Navbar */}
      <div className="mt-2">
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white border-b border-gray-200'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo with Link */}
              <NavLink to="/" className="flex items-center space-x-3 no-underline">
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
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => 
                      `relative flex items-center space-x-2 px-4 py-2 transition-all duration-200 no-underline ${
                        isActive
                          ? 'text-red-600 font-semibold'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    <span className={isNavActive(item.path) ? 'text-red-600' : 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {item.count && (
                      <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </NavLink>
                ))}
                
                {/* Pet Categories Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600">
                    <span>Categories</span>
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
                    {petCategories.map((category) => (
                      <NavLink
                        key={category.id}
                        to={category.path}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 no-underline text-gray-700"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-600">{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </NavLink>
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
                <NavLink
                  to="/favorites"
                  className="relative p-2 rounded-lg hover:bg-gray-100 no-underline"
                >
                  <Heart className="text-red-500" size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </NavLink>

                {/* User Menu */}
                <div className="relative" ref={userMenuRef}>
                  {user ? (
                    <>
                      <button
                        id="userMenuBtn"
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold flex items-center justify-center">
                          {getUserInitials(user.name)}
                        </div>
                        <ChevronDown size={14} className={`transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* User Dropdown Menu */}
                      {showUserMenu && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                          
                          <div className="py-2">
                            {userMenuItems.map((item) => (
                              <NavLink
                                key={item.id}
                                to={item.path}
                                className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-left no-underline text-gray-700"
                                onClick={() => setShowUserMenu(false)}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-gray-600">{item.icon}</span>
                                  <span>{item.label}</span>
                                </div>
                                {item.count && (
                                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                    {item.count}
                                  </span>
                                )}
                              </NavLink>
                            ))}
                          </div>
                          
                          <div className="border-t border-gray-100 pt-2">
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 font-medium"
                            >
                              <LogOut size={16} />
                              Logout
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      {/* Quick Login Demo */}
                      <div className="relative group">
                        <button
                          onClick={() => navigate('/login')}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 font-medium"
                        >
                          <LogIn size={16} />
                          Login
                        </button>
                        <div className="absolute top-full right-0 mt-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 p-2 z-50">
                          <p className="text-xs text-gray-500 mb-2">Demo Users:</p>
                          {demoUsers.map((demoUser, index) => (
                            <button
                              key={index}
                              onClick={() => handleLogin(demoUser.name, demoUser.email)}
                              className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm"
                            >
                              {demoUser.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => navigate('/signup')}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 font-medium"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>

                {/* Adopt Now Button */}
                <button 
                  onClick={() => navigate('/adopt')}
                  className="px-5 py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
                >
                  <PawPrint size={16} />
                  <span>Adopt Now</span>
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
                
                <NavLink
                  to="/favorites"
                  className="relative p-2 no-underline"
                >
                  <Heart className="text-red-500" size={22} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </NavLink>
                
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
          <div className="container mx-auto px-4 py-4 h-full overflow-y-auto">
            {/* Login/Signup Section for Mobile */}
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold flex items-center justify-center">
                      {getUserInitials(user.name)}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Demo Login:</p>
                  <div className="space-y-2">
                    {demoUsers.map((demoUser, index) => (
                      <button
                        key={index}
                        onClick={() => handleLogin(demoUser.name, demoUser.email)}
                        className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <p className="font-medium">{demoUser.name}</p>
                          <p className="text-xs text-gray-500">{demoUser.email}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                          {getUserInitials(demoUser.name)}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => navigate('/login')}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-red-600 text-red-600 font-medium"
                    >
                      <LogIn size={18} />
                      Login
                    </button>
                    <button
                      onClick={() => navigate('/signup')}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-red-600 text-white font-medium"
                    >
                      <UserPlus size={18} />
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `w-full flex items-center justify-between p-4 rounded-lg transition-colors no-underline ${
                      isActive
                        ? 'bg-red-50 text-red-600 border border-red-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <span className={isNavActive(item.path) ? 'text-red-600' : 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </NavLink>
              ))}

              {/* User Menu Items for Mobile (if logged in) */}
              {user && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 px-4 mb-3">My Account</p>
                  {userMenuItems.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg no-underline text-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {item.count && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}

              {/* Pet Categories Section */}
              <div className="mt-4 p-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">Pet Categories</p>
                <div className="space-y-2">
                  {petCategories.map((category) => (
                    <NavLink
                      key={category.id}
                      to={category.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors no-underline text-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-600">{category.icon}</span>
                        <span className="font-medium">{category.label}</span>
                      </div>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => {
                    navigate('/adopt');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  Start Adoption
                </button>
                <button 
                  onClick={() => {
                    navigate('/foster');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-lg border border-red-600 text-red-600 font-semibold hover:bg-red-50 transition-colors"
                >
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
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Heart, User, Menu, X, PawPrint, Home, 
  Dog, Cat, Bird, Phone, Mail, ChevronDown, 
  LogOut, LogIn, UserPlus, FileText, Eye, FileCheck,
  Settings, Bell, HelpCircle, Globe
} from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showAdoptionDropdown, setShowAdoptionDropdown] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);
  const userDropdownRef = useRef(null);
  const adoptionDropdownRef = useRef(null);

  // ✅ User dropdown options
  const userOptions = [
    { 
      id: 'profile', 
      label: 'My Profile', 
      icon: <User size={18} />, 
      path: '/profile',
      showWhenLoggedIn: true
    },
    { 
      id: 'applications', 
      label: 'Applications', 
      icon: <FileCheck size={18} />, 
      count: 3, 
      path: '/my-applications',
      showWhenLoggedIn: true
    },
    { 
      id: 'favorites', 
      label: 'Favorites', 
      icon: <Heart size={18} />, 
      count: 5, 
      path: '/favorites',
      showWhenLoggedIn: true
    },
    { 
      id: 'messages', 
      label: 'Messages', 
      icon: <Mail size={18} />, 
      count: 2, 
      path: '/messages',
      showWhenLoggedIn: true
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Settings size={18} />, 
      path: '/settings',
      showWhenLoggedIn: true
    },
    { 
      id: 'login', 
      label: 'Login', 
      icon: <LogIn size={18} />, 
      path: '/login',
      showWhenLoggedIn: false
    },
    { 
      id: 'signup', 
      label: 'Sign Up', 
      icon: <UserPlus size={18} />, 
      path: '/signup',
      showWhenLoggedIn: false
    },
    { 
      id: 'logout', 
      label: 'Logout', 
      icon: <LogOut size={18} />, 
      path: '#',
      showWhenLoggedIn: true
    }
  ];

  // ✅ Adoption dropdown options
  const adoptionOptions = [
    { 
      id: 'submit-pet', 
      label: 'Give Pet for Adoption', 
      icon: <FileText size={16} />, 
      description: 'Fill form to submit your pet',
      path: '/adoptionForm'
    },
    { 
      id: 'browse-pets', 
      label: 'Browse Available Pets', 
      icon: <Eye size={16} />, 
      description: 'View pets with photos & details',
      path: '/adoption'
    },
    { 
      id: 'adopt-form', 
      label: 'Adoption Application', 
      icon: <FileCheck size={16} />, 
      description: 'Apply to adopt a selected pet',
      path: '/adopt-form'
    }
  ];

  // Navigation items
  const navItems = [
    { id: 'foster', label: 'Foster', icon: <Heart size={18} />, path: '/foster' },
    { id: 'about', label: 'About', icon: <User size={18} />, path: '/about' },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} />, path: '/contact' },
  ];

  // Demo users
  const demoUsers = [
    { name: 'Ayan Jowarder', email: 'ayan@example.com', role: 'Admin' },
    { name: 'John Doe', email: 'john@example.com', role: 'User' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Foster Parent' },
    { name: 'David Miller', email: 'david@example.com', role: 'Volunteer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        if (!event.target.closest('#userDropdownBtn')) {
          setShowUserDropdown(false);
        }
      }
      if (adoptionDropdownRef.current && !adoptionDropdownRef.current.contains(event.target)) {
        if (!event.target.closest('#adoptionDropdownBtn')) {
          setShowAdoptionDropdown(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getUserInitials = (name) => {
    if (!name) return 'U';
    const words = name.trim().split(' ');
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleLogin = (userName, userEmail) => {
    const userData = { name: userName, email: userEmail };
    setUser(userData);
    setShowUserDropdown(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowUserDropdown(false);
    navigate('/');
  };

  const isNavActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Announcement Bar - RED */}
      <div className="bg-red-600 text-white text-sm py-2 px-4">
        <div className="container mx-auto text-center">
          <span className="flex items-center justify-center gap-2">
            <Heart size={14} className="text-white" />
            <span>Save a life today! <span className="font-bold">Adopt, don't shop.</span></span>
            <Heart size={14} className="text-white" />
          </span>
        </div>
      </div>

      {/* Main Navbar - WHITE Background */}
      <div className="mt-0">
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-white border-b border-gray-200'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo - BLACK & RED */}
              <NavLink to="/" className="flex items-center space-x-3 no-underline">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <PawPrint className="text-white" size={20} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                    <Heart className="text-white" size={8} />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-xl font-bold text-black">
                    Pet<span className="text-red-600">Adopt</span>
                  </h1>
                  <p className="text-xs text-gray-500 hidden md:block">Find your forever friend</p>
                </div>
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0">
                {/* Home Link */}
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `relative flex items-center space-x-2 px-4 py-2 transition-all duration-200 no-underline rounded-lg mx-1 ${
                      isActive
                        ? 'text-red-600 font-semibold bg-red-50'
                        : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                    }`
                  }
                >
                  <Home size={18} className={`${isNavActive('/') ? 'text-red-600' : 'text-gray-600'}`} />
                  <span>Home</span>
                </NavLink>

                {/* ✅ Adoption Dropdown */}
                <div className="relative" ref={adoptionDropdownRef}>
                  <button
                    id="adoptionDropdownBtn"
                    onClick={() => setShowAdoptionDropdown(!showAdoptionDropdown)}
                    className={`flex items-center space-x-2 px-4 py-2 transition-all duration-200 rounded-lg mx-1 ${
                      showAdoptionDropdown || location.pathname.startsWith('/submit-pet') || 
                      location.pathname.startsWith('/adoption') || location.pathname.startsWith('/adopt-form')
                        ? 'text-red-600 font-semibold bg-red-50'
                        : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    <PawPrint size={18} className={showAdoptionDropdown ? 'text-red-600' : 'text-gray-600'} />
                    <span>Adoption</span>
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${showAdoptionDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {showAdoptionDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 z-50">
                      <div className="p-4 bg-red-50 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <PawPrint className="text-red-600" size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-black">Adoption Center</p>
                            <p className="text-xs text-gray-600">Choose an option below</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2">
                        {adoptionOptions.map((option) => (
                          <NavLink
                            key={option.id}
                            to={option.path}
                            onClick={() => setShowAdoptionDropdown(false)}
                            className="flex items-start p-3 hover:bg-gray-50 no-underline text-gray-800 border-b border-gray-100 last:border-b-0 transition-colors"
                          >
                            <div className="mr-3 p-2 bg-red-100 rounded-lg">
                              {option.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-black">{option.label}</div>
                              <div className="text-xs text-gray-600 mt-1">{option.description}</div>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Other Navigation Items */}
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) => 
                      `relative flex items-center space-x-2 px-4 py-2 transition-all duration-200 no-underline rounded-lg mx-1 ${
                        isActive
                          ? 'text-red-600 font-semibold bg-red-50'
                          : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3">
                
                {/* Search Button - GRAY */}
                <button
                  id="searchBtn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Search className="text-gray-600" size={20} />
                </button>

                {/* Favorites - RED */}
                <NavLink
                  to="/favorites"
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                >
                  <Heart className="text-red-600" size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    5
                  </span>
                </NavLink>

                {/* ✅ User Dropdown */}
                <div className="relative" ref={userDropdownRef}>
                  <button
                    id="userDropdownBtn"
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {user ? (
                      <>
                        <div className="w-9 h-9 rounded-full bg-black text-white font-bold text-lg flex items-center justify-center">
                          {getUserInitials(user.name)}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-black leading-none">{user.name.split(' ')[0]}</p>
                          <p className="text-xs text-gray-600">My Account</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-9 h-9 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                          <User size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-black leading-none">Account</p>
                          <p className="text-xs text-gray-600">Login/Sign Up</p>
                        </div>
                      </>
                    )}
                    <ChevronDown 
                      size={14} 
                      className={`text-gray-400 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {showUserDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white shadow-xl border border-gray-200 z-50">
                      {user ? (
                        <>
                          {/* User Info Section - RED */}
                          <div className="px-4 py-3 border-b border-gray-100 bg-red-50">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-black text-white font-bold text-lg flex items-center justify-center">
                                {getUserInitials(user.name)}
                              </div>
                              <div>
                                <p className="font-semibold text-black">{user.name}</p>
                                <p className="text-xs text-gray-600">{user.email}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* User Options */}
                          <div className="py-2 max-h-64 overflow-y-auto">
                            {userOptions
                              .filter(option => option.showWhenLoggedIn)
                              .map((option) => (
                                option.id === 'logout' ? (
                                  <button
                                    key={option.id}
                                    onClick={() => {
                                      handleLogout();
                                      setShowUserDropdown(false);
                                    }}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-left text-gray-800"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="p-1.5 rounded-lg bg-gray-100">
                                        {option.icon}
                                      </div>
                                      <span className="text-red-600">{option.label}</span>
                                    </div>
                                  </button>
                                ) : (
                                  <NavLink
                                    key={option.id}
                                    to={option.path}
                                    onClick={() => setShowUserDropdown(false)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-left no-underline text-gray-800"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="p-1.5 rounded-lg bg-gray-100">
                                        {option.icon}
                                      </div>
                                      <span>{option.label}</span>
                                    </div>
                                    {option.count && (
                                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full min-w-[24px] text-center">
                                        {option.count}
                                      </span>
                                    )}
                                  </NavLink>
                                )
                              ))}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Login/Signup Section - RED */}
                          <div className="px-4 py-3 border-b border-gray-100 bg-red-50">
                            <p className="font-semibold text-black">Welcome to PetAdopt</p>
                            <p className="text-xs text-gray-600">Login or create account</p>
                          </div>
                          
                          {/* Quick Login Demo */}
                          <div className="p-3 border-b border-gray-100">
                            <p className="text-xs font-medium text-gray-800 mb-2">Quick Login (Demo):</p>
                            <div className="space-y-2">
                              {demoUsers.map((demoUser, index) => (
                                <button
                                  key={index}
                                  onClick={() => {
                                    handleLogin(demoUser.name, demoUser.email);
                                    setShowUserDropdown(false);
                                  }}
                                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm flex items-center justify-between"
                                >
                                  <div>
                                    <p className="font-medium text-black">{demoUser.name.split(' ')[0]}</p>
                                    <p className="text-xs text-gray-600">{demoUser.role}</p>
                                  </div>
                                  <div className="w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                                    {getUserInitials(demoUser.name)}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Login/Signup Options */}
                          <div className="py-2">
                            {userOptions
                              .filter(option => !option.showWhenLoggedIn)
                              .map((option) => (
                                <NavLink
                                  key={option.id}
                                  to={option.path}
                                  onClick={() => setShowUserDropdown(false)}
                                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left no-underline text-gray-800"
                                >
                                  <div className="p-1.5 rounded-lg bg-gray-100">
                                    {option.icon}
                                  </div>
                                  <span>{option.label}</span>
                                </NavLink>
                              ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Submit Pet Button - BLACK Background, WHITE Text */}
                <button 
                  onClick={() => navigate('/adoptionForm')}
                  className="px-5 py-2 rounded-lg bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                >
                  <PawPrint size={16} />
                  <span>Submit a Pet</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-3">
                <button
                  id="searchBtn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Search className="text-gray-600" size={22} />
                </button>
                
                <NavLink
                  to="/favorites"
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors no-underline"
                >
                  <Heart className="text-red-600" size={22} />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    5
                  </span>
                </NavLink>
                
                <button
                  id="mobileMenuBtn"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
              <div className="container mx-auto px-4 py-6">
                <div className="max-w-3xl mx-auto" ref={searchRef}>
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search pets, breeds, adoption centers, or resources..."
                      className="w-full pl-14 pr-36 py-4 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-lg shadow-sm"
                      autoFocus
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-medium"
                      >
                        Search
                      </button>
                    </div>
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
          className="fixed inset-0 top-16 z-40 bg-white lg:hidden overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6 h-[calc(100vh-4rem)]">
            {/* User Account Section for Mobile - RED & WHITE */}
            <div className="mb-6 p-5 bg-red-50 rounded-2xl border border-red-100">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-black text-white font-bold text-xl flex items-center justify-center">
                      {getUserInitials(user.name)}
                    </div>
                    <div>
                      <p className="font-bold text-black">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full inline-block mt-1">
                        Member
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-black">Welcome to PetAdopt</p>
                      <p className="text-sm text-gray-600">Login or create account</p>
                    </div>
                    <PawPrint className="text-red-600" size={24} />
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-800">Quick Login (Demo):</p>
                    <div className="space-y-3">
                      {demoUsers.map((demoUser, index) => (
                        <button
                          key={index}
                          onClick={() => handleLogin(demoUser.name, demoUser.email)}
                          className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-black text-white font-bold text-lg flex items-center justify-center">
                              {getUserInitials(demoUser.name)}
                            </div>
                            <div>
                              <p className="font-medium text-black">{demoUser.name}</p>
                              <p className="text-xs text-gray-600">{demoUser.email}</p>
                            </div>
                          </div>
                          <div className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-red-100">
                    <NavLink
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl border-2 border-red-600 text-red-600 font-bold"
                    >
                      <LogIn size={18} />
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-xl bg-black text-white font-bold shadow-md"
                    >
                      <UserPlus size={18} />
                      Sign Up
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              {/* Home Link for Mobile */}
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `w-full flex items-center justify-between p-4 rounded-xl transition-all no-underline ${
                    isActive
                      ? 'bg-red-50 text-red-600 border-2 border-red-100'
                      : 'text-gray-800 hover:bg-gray-50 border-2 border-transparent'
                  }`
                }
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2.5 rounded-lg ${isNavActive('/') ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                    <Home size={20} />
                  </div>
                  <span className="font-medium">Home</span>
                </div>
              </NavLink>

              {/* Adoption Section for Mobile */}
              <div className="my-4">
                <div className="px-4 mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 mr-3 bg-red-100 rounded-lg">
                      <PawPrint className="text-red-600" size={18} />
                    </div>
                    <p className="font-bold text-black">Adoption Center</p>
                  </div>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    3 Options
                  </span>
                </div>
                
                <div className="space-y-3">
                  {adoptionOptions.map((option) => (
                    <NavLink
                      key={option.id}
                      to={option.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full flex items-start p-4 bg-white border-2 border-gray-100 hover:border-red-200 rounded-xl transition-all no-underline text-gray-800 hover:shadow-sm"
                    >
                      <div className="mr-4 p-3 rounded-lg bg-red-100">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-black">{option.label}</div>
                        <div className="text-xs text-gray-600 mt-1.5">{option.description}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Other Navigation Links */}
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `w-full flex items-center justify-between p-4 rounded-xl transition-all no-underline ${
                      isActive
                        ? 'bg-red-50 text-red-600 border-2 border-red-100'
                        : 'text-gray-800 hover:bg-gray-50 border-2 border-transparent'
                    }`
                  }
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-lg ${isNavActive(item.path) ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                </NavLink>
              ))}

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <button 
                  onClick={() => {
                    navigate('/submit-pet');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg text-lg"
                >
                  Submit a Pet for Adoption
                </button>
                <button 
                  onClick={() => {
                    navigate('/adoption');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-xl border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 transition-colors"
                >
                  Browse Available Pets
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
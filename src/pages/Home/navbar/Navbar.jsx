// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router';
import { 
  Search, Heart, User, Menu, X, PawPrint, Home, 
  Phone, ChevronDown, 
  LogOut, LogIn, UserPlus, FileText, Eye, FileCheck,
  Settings,
  ShoppingCart, Package, CreditCard, Users,
  CheckCircle, List
} from 'lucide-react';
import { MdDashboard, MdOutlineDashboardCustomize } from 'react-icons/md';

const Navbar = () => {
  // ✅ সব স্টেট একসাথে ডিফাইন করুন
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false); // ✅ এই স্টেট যোগ করুন
  const [showAdoptionDropdown, setShowAdoptionDropdown] = useState(false); // ✅ এই স্টেট যোগ করুন
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage on component mount
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    
    if (role && name && email) {
      return { name, email, role };
    }
    return null;
  });
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);
  const userDropdownRef = useRef(null);
  const adoptionDropdownRef = useRef(null);

  // Get user info
  const userRole = useMemo(() => localStorage.getItem('role') || null, []);

  // ✅ Role-based dashboard paths
  const getDashboardPath = () => {
    switch(userRole) {
      case 'admin':
        return '/dashboard/admin';
      case 'seller':
        return '/dashboard/seller';
      case 'buyer':
        return '/dashboard/buyer';
      default:
        return '/dashboard';
    }
  };

  // ✅ User dropdown options
  const getUserOptions = useMemo(() => {
    const commonOptions = [
      { 
        id: 'profile', 
        label: 'My Profile', 
        icon: <User size={18} />, 
        path: '/profile'
      },
      { 
        id: 'settings', 
        label: 'Settings', 
        icon: <Settings size={18} />, 
        path: '/settings'
      },
    ];

    if (userRole === 'buyer') {
      return [
        ...commonOptions,
        { 
          id: 'orders', 
          label: 'My Orders', 
          icon: <Package size={18} />, 
          path: '/dashboard/buyer/orders'
        },
        { 
          id: 'wishlist', 
          label: 'Wishlist', 
          icon: <Heart size={18} />, 
          count: 5, 
          path: '/wishlist'
        },
        { 
          id: 'transactions', 
          label: 'Transactions', 
          icon: <CreditCard size={18} />, 
          path: '/dashboard/buyer/transactions'
        },
      ];
    }

    if (userRole === 'seller') {
      return [
        ...commonOptions,
        { 
          id: 'my-pets', 
          label: 'My Pets', 
          icon: <PawPrint size={18} />, 
          path: '/dashboard/seller/pets'
        },
        { 
          id: 'earnings', 
          label: 'Earnings', 
          icon: <CreditCard size={18} />, 
          path: '/dashboard/seller/earnings'
        },
        { 
          id: 'seller-orders', 
          label: 'Orders', 
          icon: <Package size={18} />, 
          path: '/dashboard/seller/orders'
        },
      ];
    }

    if (userRole === 'admin') {
      return [
        ...commonOptions,
        { 
          id: 'users', 
          label: 'Users', 
          icon: <Users size={18} />, 
          path: '/dashboard/admin/users'
        },
        { 
          id: 'approvals', 
          label: 'Approvals', 
          icon: <CheckCircle size={18} />, 
          count: 3, 
          path: '/dashboard/admin/approvals'
        },
        { 
          id: 'all-pets', 
          label: 'All Pets', 
          icon: <List size={18} />, 
          path: '/dashboard/admin/pets'
        },
      ];
    }

    return commonOptions;
  }, [userRole]);

  // ✅ Adoption dropdown options
  const adoptionOptions = useMemo(() => [
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
      path: '/browse-pets'
    },
    { 
      id: 'adopt-form', 
      label: 'Adoption Application', 
      icon: <FileCheck size={16} />, 
      description: 'Apply to adopt a selected pet',
      path: '/adopt-form'
    }
  ], []);

  // ✅ Get navigation items based on role
  const getNavItems = useMemo(() => {
    const commonItems = [
      { id: 'home', label: 'Home', icon: <Home size={18} />, path: '/' },
      { id: 'adoption', label: 'Adoption', icon: <PawPrint size={18} />, hasDropdown: true },
      { id: 'foster', label: 'Foster', icon: <Heart size={18} />, path: '/foster' },
      { id: 'about', label: 'About', icon: <User size={18} />, path: '/about' },
      { id: 'dashboard', label: 'Dashboard', icon: <MdOutlineDashboardCustomize size={18} />, path: '/dashboardLayout' },
      { id: 'contact', label: 'Contact', icon: <Phone size={18} />, path: '/contact' },
    ];

    // Add dashboard based on role
    if (userRole) {
      let dashboardLabel = 'Dashboard';
      let badgeColor = 'bg-blue-100 text-blue-800';
      
      if (userRole === 'admin') {
        dashboardLabel = 'Admin Dashboard';
        badgeColor = 'bg-purple-100 text-purple-800';
      } else if (userRole === 'seller') {
        dashboardLabel = 'Seller Dashboard';
        badgeColor = 'bg-green-100 text-green-800';
      } else if (userRole === 'buyer') {
        dashboardLabel = 'My Account';
      }

      commonItems.push({
        id: 'dashboard',
        label: dashboardLabel,
        icon: <MdDashboard size={18} />,
        path: getDashboardPath(),
        badge: userRole?.charAt(0).toUpperCase() + userRole?.slice(1),
        badgeColor: badgeColor
      });
    }

    return commonItems;
  }, [userRole]);

  const navItems = getNavItems;

  // Demo users
  const demoUsers = useMemo(() => [
    { name: 'Ayan Jowarder', email: 'ayan@example.com', role: 'Admin' },
    { name: 'John Doe', email: 'john@example.com', role: 'Buyer' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Seller' },
  ], []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside
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

  // Get user initials
  const getUserInitials = (name) => {
    if (!name) return 'U';
    const words = name.trim().split(' ');
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
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

  // Handle login
  const handleLogin = (userName, userEmail, userRole) => {
    const userData = { name: userName, email: userEmail, role: userRole };
    setUser(userData);
    localStorage.setItem('role', userRole);
    localStorage.setItem('name', userName);
    localStorage.setItem('email', userEmail);
    setShowUserDropdown(false);
    setIsMobileMenuOpen(false);
    
    // Navigate to appropriate dashboard
    setTimeout(() => {
      navigate(getDashboardPath());
    }, 100);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    setShowUserDropdown(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  // Get role color
  const getRoleColor = (role) => {
    switch(role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'seller': return 'bg-green-100 text-green-800';
      case 'buyer': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Check if path is active
  const isActivePath = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="container mx-auto text-center">
          <span className="flex items-center justify-center gap-2">
            <Heart size={14} />
            <span>
              {userRole === 'admin' && '⚡ Admin Mode Active'}
              {userRole === 'seller' && '💰 Sell Your Pets Here'}
              {userRole === 'buyer' && '🐾 Find Your Perfect Pet'}
              {!userRole && 'Save a life today! Adopt, don\'t shop.'}
            </span>
            <Heart size={14} />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mt-0">
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-white border-b border-gray-200'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
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
                  <p className="text-xs text-gray-500 hidden md:block">
                    {userRole === 'admin' && 'Admin Portal'}
                    {userRole === 'seller' && 'Seller Platform'}
                    {userRole === 'buyer' && 'Buyer Account'}
                    {!userRole && 'Find your forever friend'}
                  </p>
                </div>
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.id} className="relative" ref={adoptionDropdownRef}>
                        <button
                          id="adoptionDropdownBtn"
                          onClick={() => setShowAdoptionDropdown(!showAdoptionDropdown)}
                          className={`flex items-center space-x-2 px-4 py-2 transition-all duration-200 rounded-lg mx-1 ${
                            showAdoptionDropdown || location.pathname.startsWith('/adoption')
                              ? 'text-red-600 font-semibold bg-red-50'
                              : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
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
                    );
                  }

                  return (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) => 
                        `relative flex items-center space-x-2 px-4 py-2 transition-all duration-200 no-underline rounded-lg mx-1 ${
                          isActive || isActivePath(item.path)
                            ? 'text-red-600 font-semibold bg-red-50'
                            : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3">
                
                {/* Search Button */}
                <button
                  id="searchBtn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Search className="text-gray-600" size={20} />
                </button>

                {/* Favorites */}
                <NavLink
                  to="/favorites"
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                >
                  <Heart className="text-red-600" size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    5
                  </span>
                </NavLink>

                {/* User Dropdown */}
                <div className="relative" ref={userDropdownRef}>
                  <button
                    id="userDropdownBtn"
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {user ? (
                      <>
                        <div className={`w-9 h-9 rounded-full ${getRoleColor(user.role)} font-bold text-lg flex items-center justify-center`}>
                          {getUserInitials(user.name)}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-black leading-none">{user.name.split(' ')[0]}</p>
                          <p className="text-xs text-gray-600 capitalize">{user.role}</p>
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
                          {/* User Info Section */}
                          <div className={`px-4 py-3 border-b ${getRoleColor(user.role)}`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full ${getRoleColor(user.role)} font-bold text-lg flex items-center justify-center`}>
                                {getUserInitials(user.name)}
                              </div>
                              <div>
                                <p className="font-semibold text-black">{user.name}</p>
                                <p className="text-xs text-gray-600">{user.email}</p>
                                <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${getRoleColor(user.role)}`}>
                                  {user.role}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* User Options */}
                          <div className="py-2 max-h-64 overflow-y-auto">
                            {getUserOptions.map((option) => (
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
                            ))}
                            
                            {/* Logout Button */}
                            <button
                              onClick={() => {
                                handleLogout();
                                setShowUserDropdown(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left text-red-600 border-t border-gray-100"
                            >
                              <div className="p-1.5 rounded-lg bg-red-100">
                                <LogOut size={18} />
                              </div>
                              <span>Logout</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Login/Signup Section */}
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
                                  onClick={() => handleLogin(demoUser.name, demoUser.email, demoUser.role.toLowerCase())}
                                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm flex items-center justify-between"
                                >
                                  <div>
                                    <p className="font-medium text-black">{demoUser.name.split(' ')[0]}</p>
                                    <p className="text-xs text-gray-600">{demoUser.role}</p>
                                  </div>
                                  <div className={`w-8 h-8 rounded-full ${getRoleColor(demoUser.role.toLowerCase())} text-xs font-bold flex items-center justify-center`}>
                                    {getUserInitials(demoUser.name)}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Login/Signup Options */}
                          <div className="py-2">
                            <NavLink
                              to="/login"
                              onClick={() => setShowUserDropdown(false)}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left no-underline text-gray-800"
                            >
                              <div className="p-1.5 rounded-lg bg-gray-100">
                                <LogIn size={18} />
                              </div>
                              <span>Login</span>
                            </NavLink>
                            <NavLink
                              to="/register"
                              onClick={() => setShowUserDropdown(false)}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left no-underline text-gray-800"
                            >
                              <div className="p-1.5 rounded-lg bg-gray-100">
                                <UserPlus size={18} />
                              </div>
                              <span>Sign Up</span>
                            </NavLink>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Submit Pet / Browse Pets Button based on role */}
                {userRole === 'seller' || userRole === 'admin' ? (
                  <button 
                    onClick={() => navigate('/sell-pet')}
                    className="px-5 py-2 rounded-lg bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                  >
                    <PawPrint size={16} />
                    <span>{userRole === 'admin' ? 'Manage Pets' : 'Sell a Pet'}</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate('/pets')}
                    className="px-5 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Browse Pets</span>
                  </button>
                )}
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
            {/* User Account Section for Mobile */}
            <div className="mb-6 p-5 bg-red-50 rounded-2xl border border-red-100">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${getRoleColor(user.role)} font-bold text-xl flex items-center justify-center`}>
                      {getUserInitials(user.name)}
                    </div>
                    <div>
                      <p className="font-bold text-black">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${getRoleColor(user.role)} mt-1 inline-block`}>
                        {user.role}
                      </span>
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
                          onClick={() => handleLogin(demoUser.name, demoUser.email, demoUser.role.toLowerCase())}
                          className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${getRoleColor(demoUser.role.toLowerCase())} font-bold text-lg flex items-center justify-center`}>
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
                      to="/register"
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
                  <div className={`p-2.5 rounded-lg ${isActivePath('/') ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
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
              {navItems
                .filter(item => !item.hasDropdown)
                .filter(item => item.id !== 'home')
                .map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `w-full flex items-center justify-between p-4 rounded-xl transition-all no-underline ${
                        isActive || isActivePath(item.path)
                          ? 'bg-red-50 text-red-600 border-2 border-red-100'
                          : 'text-gray-800 hover:bg-gray-50 border-2 border-transparent'
                      }`
                    }
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2.5 rounded-lg ${isActivePath(item.path) ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                {userRole === 'seller' || userRole === 'admin' ? (
                  <button 
                    onClick={() => {
                      navigate('/sell-pet');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-4 rounded-xl bg-black text-white font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg text-lg"
                  >
                    {userRole === 'admin' ? 'Manage Pets' : 'Sell a Pet'}
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      navigate('/pets');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300 shadow-lg text-lg"
                  >
                    Browse Pets
                  </button>
                )}
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
// src/layouts/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import {
  FaHome,
  FaPaw,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaUser,
  FaBars,
  FaTimes,
  FaBox,
  FaDollarSign,
  FaHeart,
  FaStore,
  FaClipboardCheck,
  FaTachometerAlt,
  FaShoppingBag
} from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get user info from localStorage
  const userRole = localStorage.getItem('role') || 'buyer';
  const userName = localStorage.getItem('name') || 'User';
  const userEmail = localStorage.getItem('email') || 'user@example.com';

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // Get user avatar initials
  const getUserInitials = () => {
    if (!userName) return 'U';
    const words = userName.trim().split(' ');
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return words[0].charAt(0).toUpperCase() + words[words.length - 1].charAt(0).toUpperCase();
  };

  // Navigation items based on role
  const getNavItems = () => {
    const commonItems = [
      { 
        title: 'Dashboard', 
        path: '/dashboard', 
        icon: <FaTachometerAlt className="text-lg" />,
      },
      { 
        title: 'Orders', 
        path: '/dashboard/orders', 
        icon: <FaBox className="text-lg" />,
        badge: '3'
      },
    ];

    if (userRole === 'seller') {
      return [
        { 
          title: 'Dashboard', 
          path: '/dashboard/seller', 
          icon: <FaTachometerAlt className="text-lg" />,
        },
        { 
          title: 'My Pets', 
          path: '/dashboard/seller/pets', 
          icon: <FaPaw className="text-lg" />,
          badge: '5'
        },
        { 
          title: 'Orders', 
          path: '/dashboard/seller/orders', 
          icon: <FaShoppingBag className="text-lg" />,
          badge: '3'
        },
        { 
          title: 'Earnings', 
          path: '/dashboard/seller/earnings', 
          icon: <FaDollarSign className="text-lg" />,
        },
        { 
          title: 'Reviews', 
          path: '/dashboard/seller/reviews', 
          icon: <FaHeart className="text-lg" />,
        },
        { 
          title: 'Settings', 
          path: '/dashboard/seller/settings', 
          icon: <FaCog className="text-lg" />,
        },
      ];
    }

    if (userRole === 'buyer') {
      return [
        { 
          title: 'Dashboard', 
          path: '/dashboard/buyer', 
          icon: <FaTachometerAlt className="text-lg" />,
        },
        { 
          title: 'Browse Pets', 
          path: '/dashboard/buyer/browse', 
          icon: <FaShoppingCart className="text-lg" />,
        },
        { 
          title: 'My Orders', 
          path: '/dashboard/buyer/orders', 
          icon: <FaBox className="text-lg" />,
          badge: '2'
        },
        { 
          title: 'Wishlist', 
          path: '/dashboard/buyer/wishlist', 
          icon: <FaHeart className="text-lg" />,
          badge: '8'
        },
        { 
          title: 'Transactions', 
          path: '/dashboard/buyer/transactions', 
          icon: <FaDollarSign className="text-lg" />,
        },
        { 
          title: 'Settings', 
          path: '/dashboard/buyer/settings', 
          icon: <FaCog className="text-lg" />,
        },
      ];
    }

    if (userRole === 'admin') {
      return [
        { 
          title: 'Dashboard', 
          path: '/dashboard/admin', 
          icon: <FaTachometerAlt className="text-lg" />,
        },
        { 
          title: 'All Pets', 
          path: '/dashboard/admin/pets', 
          icon: <FaPaw className="text-lg" />,
          badge: '12'
        },
        { 
          title: 'Users', 
          path: '/dashboard/admin/users', 
          icon: <FaUsers className="text-lg" />,
          badge: '3'
        },
        { 
          title: 'Approvals', 
          path: '/dashboard/admin/approvals', 
          icon: <FaClipboardCheck className="text-lg" />,
          badge: '5'
        },
        { 
          title: 'Analytics', 
          path: '/dashboard/admin/analytics', 
          icon: <FaChartLine className="text-lg" />,
        },
        { 
          title: 'Settings', 
          path: '/dashboard/admin/settings', 
          icon: <FaCog className="text-lg" />,
        },
      ];
    }

    return commonItems;
  };

  const navItems = getNavItems();

  // Check if item is active
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Get role badge color
  const getRoleBadgeColor = () => {
    switch(userRole) {
      case 'admin': return 'bg-purple-600 text-white';
      case 'seller': return 'bg-green-600 text-white';
      case 'buyer': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isSidebarOpen ? (
                <FaTimes className="text-gray-700 text-xl" />
              ) : (
                <FaBars className="text-gray-700 text-xl" />
              )}
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold text-gray-900">Dashboard</h1>
                <span className={`text-xs px-1.5 py-0.5 rounded ${getRoleBadgeColor()}`}>
                  {userRole}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2">
              <FaBell className="text-gray-600 text-lg" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">{getUserInitials()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16 lg:pt-0">
        {/* Sidebar - Slim & Compact */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:relative z-40 w-64 lg:w-20 xl:w-64 h-screen bg-white border-r border-gray-200 
          transform transition-transform duration-200 overflow-hidden
        `}>
          {/* Sidebar Header - Only show on expanded */}
          <div className="p-4 border-b border-gray-200 hidden xl:block lg:hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <span className="text-white font-bold">PA</span>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-gray-900 truncate">{userName}</h2>
                <p className="text-xs text-gray-500 truncate">{userRole}</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-2 lg:p-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg transition-colors relative
                      ${isActive(item.path) 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <div className={`${isActive(item.path) ? 'text-white' : 'text-gray-500'}`}>
                      {item.icon}
                    </div>
                    
                    {/* Show text only on expanded */}
                    <span className="hidden xl:block lg:hidden xl:block font-medium flex-1">
                      {item.title}
                    </span>
                    
                    {/* Badge */}
                    {item.badge && (
                      <span className={`
                        absolute right-3 text-xs px-1.5 py-0.5 rounded min-w-[20px] text-center
                        ${isActive(item.path) 
                          ? 'bg-white text-gray-900' 
                          : 'bg-red-100 text-red-700'
                        }
                      `}>
                        {item.badge}
                      </span>
                    )}
                    
                    {/* Active indicator for collapsed */}
                    {isActive(item.path) && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gray-900 rounded-r hidden lg:block xl:hidden"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Logout Button */}
            <div className="mt-6 p-2">
              <button
                onClick={handleLogout}
                className={`
                  flex items-center gap-3 p-3 rounded-lg w-full text-gray-700 hover:bg-red-50 hover:text-red-600
                  transition-colors
                `}
              >
                <FaSignOutAlt className="text-lg" />
                <span className="hidden xl:block lg:hidden xl:block font-medium">Logout</span>
              </button>
            </div>
          </nav>

          {/* Role Badge - Bottom */}
          <div className="absolute bottom-4 left-0 right-0 px-4 hidden xl:block lg:hidden xl:block">
            <div className={`p-3 rounded-lg ${getRoleBadgeColor()} text-center`}>
              <span className="font-medium capitalize">{userRole} Account</span>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Backdrop */}
        {isSidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 overflow-x-hidden">
          {/* Desktop Header */}
          <header className="hidden lg:flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FaBars className="text-gray-700" />
              </button>
              
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {userRole === 'admin' && 'Admin Dashboard'}
                  {userRole === 'seller' && 'Seller Dashboard'}
                  {userRole === 'buyer' && 'My Dashboard'}
                </h1>
                <p className="text-sm text-gray-500">
                  Welcome back, {userName.split(' ')[0]}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2">
                <FaBell className="text-gray-600 text-lg" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">{getUserInitials()}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-4 md:p-6">
            <Outlet />
          </div>

          {/* Simple Footer */}
          <footer className="px-6 py-4 border-t border-gray-200 bg-white mt-8">
            <div className="text-center text-sm text-gray-500">
              <p>© 2024 PetAdopt • v1.0</p>
              <p className="mt-1 text-xs">All pets deserve a loving home</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router';
import {
  FaHome,
  FaPaw,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaBox,
  FaDollarSign
} from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  // Get user info from localStorage (demo purpose)
  const userRole = localStorage.getItem('role') || 'buyer'; // buyer, seller, admin
  const userName = localStorage.getItem('name') || 'User';
  const userEmail = localStorage.getItem('email') || 'user@example.com';

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // Navigation items based on role
  const getNavItems = () => {
    const baseItems = [
      { title: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
      { title: 'Orders', path: '/dashboard/orders', icon: <FaBox /> },
      { title: 'Transactions', path: '/dashboard/transactions', icon: <FaDollarSign /> },
      { title: 'Settings', path: '/dashboard/settings', icon: <FaCog /> },
    ];

    if (userRole === 'seller') {
      return [
        ...baseItems,
        { title: 'My Pets', path: '/dashboard/my-pets', icon: <FaPaw /> },
        { title: 'Analytics', path: '/dashboard/analytics', icon: <FaChartLine /> },
      ];
    }

    if (userRole === 'buyer') {
      return [
        ...baseItems,
        { title: 'Buy Pets', path: '/dashboard/buy-pets', icon: <FaShoppingCart /> },
      ];
    }

    if (userRole === 'admin') {
      return [
        ...baseItems,
        { title: 'All Pets', path: '/dashboard/my-pets', icon: <FaPaw /> },
        { title: 'Users', path: '/dashboard/users', icon: <FaUsers /> },
        { title: 'Analytics', path: '/dashboard/analytics', icon: <FaChartLine /> },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg bg-gray-100"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <button className="relative p-2">
              <FaBell className="text-xl text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 fixed md:relative z-40 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300
        `}>
          {/* Sidebar Header */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUserCircle className="text-2xl text-blue-600" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">{userName}</h2>
                <p className="text-sm text-gray-500">{userEmail}</p>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                  {userRole}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 w-full mt-8"
            >
              <FaSignOutAlt />
              <span className="font-medium">Logout</span>
            </button>
          </nav>

          {/* Role Info Card */}
          <div className="p-4 mt-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
              <p className="text-sm opacity-90">Account Type</p>
              <p className="text-xl font-bold capitalize">{userRole}</p>
              {userRole === 'seller' && (
                <p className="text-sm mt-2">List your pets and earn money</p>
              )}
              {userRole === 'buyer' && (
                <p className="text-sm mt-2">Find your perfect pet companion</p>
              )}
              {userRole === 'admin' && (
                <p className="text-sm mt-2">Manage the entire platform</p>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between p-6 border-b bg-white">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, {userName}! 👋
              </h1>
              <p className="text-gray-600">
                {userRole === 'seller' && 'Manage your pet listings and orders'}
                {userRole === 'buyer' && 'Browse and purchase pets'}
                {userRole === 'admin' && 'Manage platform users and content'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-3 bg-gray-100 rounded-full">
                <FaBell className="text-xl text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold">{userName}</p>
                  <p className="text-sm text-gray-500 capitalize">{userRole}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUserCircle className="text-xl text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <Outlet /> {/* This will render the specific dashboard page */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
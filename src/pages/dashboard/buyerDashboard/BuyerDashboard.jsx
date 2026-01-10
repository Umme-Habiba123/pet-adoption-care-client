// src/pages/dashboard/buyer/BuyerDashboard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  FaBox,
  FaHeart,
  FaEnvelope,
  FaPaw,
  FaCheckCircle,
  FaClock,
  FaShoppingCart,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
  FaBell,
  FaCreditCard,
  FaMapMarkerAlt,
  FaStar,
  FaHistory,
  FaDownload,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

const BuyerDashboard = () => {
  const navigate = useNavigate();
//   const [] = useState('overview');
  const [stats, ] = useState({
    totalOrders: 5,
    wishlistItems: 8,
    unreadMessages: 3,
    activeAdoptions: 2,
    completedAdoptions: 1,
    pendingReviews: 2
  });

  // Mock data - Replace with API calls
  const recentOrders = [
    { id: 'ORD-001', petName: 'Golden Retriever', price: '$500', status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD-002', petName: 'Persian Cat', price: '$300', status: 'Processing', date: '2024-01-10' },
    { id: 'ORD-003', petName: 'Parrot', price: '$150', status: 'Shipped', date: '2024-01-05' }
  ];

  const wishlistItems = [
    { id: 1, name: 'Labrador Puppy', breed: 'Labrador', age: '2 months', price: '$600', image: 'https://picsum.photos/100/100?random=1' },
    { id: 2, name: 'Siamese Cat', breed: 'Siamese', age: '3 months', price: '$400', image: 'https://picsum.photos/100/100?random=2' },
    { id: 3, name: 'German Shepherd', breed: 'German Shepherd', age: '4 months', price: '$700', image: 'https://picsum.photos/100/100?random=3' }
  ];

  const adoptionApplications = [
    { id: 'ADP-001', petName: 'Beagle', status: 'Under Review', appliedDate: '2024-01-12' },
    { id: 'ADP-002', petName: 'Persian Cat', status: 'Approved', appliedDate: '2024-01-08' },
    { id: 'ADP-003', petName: 'Husky', status: 'Rejected', appliedDate: '2024-01-03' }
  ];

  const recentActivities = [
    { action: 'Order placed', details: 'Golden Retriever', time: '2 hours ago' },
    { action: 'Added to wishlist', details: 'Labrador Puppy', time: '1 day ago' },
    { action: 'Adoption application submitted', details: 'Beagle', time: '2 days ago' },
    { action: 'Profile updated', details: 'Changed phone number', time: '3 days ago' }
  ];

  // Quick actions
  const quickActions = [
    { title: 'Browse Pets', icon: <FaPaw />, link: '/dashboard/buyer/browse', color: 'bg-blue-500' },
    { title: 'Adopt a Pet', icon: <FaHeart />, link: '/dashboard/buyer/adopt', color: 'bg-red-500' },
    { title: 'Track Order', icon: <FaBox />, link: '/dashboard/buyer/orders', color: 'bg-green-500' },
    { title: 'Contact Support', icon: <FaQuestionCircle />, link: '/dashboard/buyer/support', color: 'bg-purple-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, <span className="text-blue-600">John</span>! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your pet journey today
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors">
              <FaBell className="inline mr-2" />
              Notifications
            </button>
            <button 
              onClick={() => navigate('/dashboard/buyer/settings')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <FaCog className="inline mr-2" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard 
          title="Total Orders" 
          value={stats.totalOrders} 
          icon={<FaBox className="text-blue-500" />}
          color="bg-blue-50"
          link="/dashboard/buyer/orders"
        />
        <StatCard 
          title="Wishlist" 
          value={stats.wishlistItems} 
          icon={<FaHeart className="text-red-500" />}
          color="bg-red-50"
          link="/dashboard/buyer/wishlist"
        />
        <StatCard 
          title="Messages" 
          value={stats.unreadMessages} 
          icon={<FaEnvelope className="text-green-500" />}
          color="bg-green-50"
          link="/dashboard/buyer/messages"
        />
        <StatCard 
          title="Active Adoptions" 
          value={stats.activeAdoptions} 
          icon={<FaPaw className="text-purple-500" />}
          color="bg-purple-50"
          link="/dashboard/buyer/adoptions"
        />
        <StatCard 
          title="Completed" 
          value={stats.completedAdoptions} 
          icon={<FaCheckCircle className="text-yellow-500" />}
          color="bg-yellow-50"
          link="/dashboard/buyer/adoptions"
        />
        <StatCard 
          title="Pending Reviews" 
          value={stats.pendingReviews} 
          icon={<FaStar className="text-indigo-500" />}
          color="bg-indigo-50"
          link="/dashboard/buyer/reviews"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Recent Orders & Activities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <Link 
                  to="/dashboard/buyer/orders" 
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All →
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pet</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FaPaw className="text-gray-400 mr-2" />
                          <span className="text-gray-900">{order.petName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{order.price}</span>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-6 py-4 text-gray-500">{order.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Track
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Adoption Applications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Adoption Applications</h2>
                <Link 
                  to="/dashboard/buyer/adoptions" 
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {adoptionApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <FaPaw className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{app.petName}</h3>
                        <p className="text-sm text-gray-500">Application ID: {app.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={app.status} />
                      <p className="text-sm text-gray-500 mt-1">{app.appliedDate}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button 
                  onClick={() => navigate('/dashboard/buyer/adopt')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <FaPlus className="mr-2" />
                  Start New Adoption
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Wishlist, Activities, Quick Actions */}
        <div className="space-y-6">
          {/* Wishlist */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Wishlist</h2>
                <Link 
                  to="/dashboard/buyer/wishlist" 
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {wishlistItems.map((pet) => (
                  <div key={pet.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <img 
                      src={pet.image} 
                      alt={pet.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{pet.name}</h3>
                      <p className="text-sm text-gray-500">{pet.breed} • {pet.age}</p>
                      <p className="font-medium text-gray-900 mt-1">{pet.price}</p>
                    </div>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.link}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className={`p-3 rounded-lg ${action.color} text-white mb-2`}>
                      {action.icon}
                    </div>
                    <span className="font-medium text-gray-900 text-sm text-center group-hover:text-blue-600">
                      {action.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg mt-1">
                      <FaHistory className="text-blue-600 text-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.details}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, color, link }) => (
  <Link 
    to={link}
    className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
      View Details
      <span className="ml-1">→</span>
    </div>
  </Link>
);

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'delivered':
      case 'approved':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default BuyerDashboard;
// src/pages/Dashboard/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axiosSecure from '../../api/axiosSecure';
import {
  FaUsers,
  FaPaw,
  FaShoppingCart,
  FaDollarSign,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaChartLine
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPets: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingApprovals: 0
  });

  const [recentUsers, setRecentUsers] = useState([]);
  const [pendingPets, setPendingPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsRes, usersRes, petsRes] = await Promise.all([
        axiosSecure.get('/admin/stats'),
        axiosSecure.get('/admin/recent-users'),
        axiosSecure.get('/pets/pending')
      ]);

      setStats(statsRes.data.data);
      setRecentUsers(usersRes.data.data);
      setPendingPets(petsRes.data.data);
    } catch (error) {
      toast.error('Failed to load dashboard data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprovePet = async (petId) => {
    try {
      await axiosSecure.patch(`/pets/${petId}/approve`);
      toast.success('Pet approved successfully');
      fetchDashboardData();
    } catch (error) {
        console.log(error)
      toast.error('Failed to approve pet');
    }
  };

  const handleRejectPet = async (petId) => {
    try {
      await axiosSecure.patch(`/pets/${petId}/reject`);
      toast.success('Pet rejected successfully');
      fetchDashboardData();
    } catch (error) {
        console.log(error



















































            
        )
      toast.error('Failed to reject pet');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your pet adoption platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold mt-2">{stats.totalUsers}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUsers className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Pets</p>
              <h3 className="text-2xl font-bold mt-2">{stats.totalPets}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaPaw className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold mt-2">{stats.totalOrders}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FaShoppingCart className="text-2xl text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-2">৳ {stats.totalRevenue?.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaDollarSign className="text-2xl text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Approvals</p>
              <h3 className="text-2xl font-bold mt-2">{stats.pendingApprovals}</h3>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <FaExclamationTriangle className="text-2xl text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="bg-white border rounded-xl mb-6">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Pending Approvals</h2>
          <p className="text-gray-600">Approve or reject pet listings</p>
        </div>
        
        {pendingPets.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No pending approvals
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Pet</th>
                  <th className="text-left p-4">Seller</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Submitted</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingPets.map((pet) => (
                  <tr key={pet._id} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={pet.images?.[0]}
                          alt={pet.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{pet.name}</p>
                          <p className="text-sm text-gray-500">{pet.breed}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p>{pet.contactName}</p>
                      <p className="text-sm text-gray-500">{pet.contactEmail}</p>
                    </td>
                    <td className="p-4 font-medium">
                      ৳ {pet.price?.toLocaleString() || 'N/A'}
                    </td>
                    <td className="p-4">
                      {new Date(pet.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprovePet(pet._id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                        >
                          <FaCheckCircle />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleRejectPet(pet._id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2"
                        >
                          <FaTimesCircle />
                          <span>Reject</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Users */}
      <div className="bg-white border rounded-xl">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Recent Users</h2>
          <p className="text-gray-600">Newly registered users</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">User</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Joined</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaUsers className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">@{user.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    {user.email}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    `}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="bg-white border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaChartLine className="text-xl text-blue-600" />
          </div>
          <p className="font-medium">View Analytics</p>
          <p className="text-sm text-gray-500">Detailed platform analytics</p>
        </button>

        <button className="bg-white border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaUsers className="text-xl text-green-600" />
          </div>
          <p className="font-medium">Manage Users</p>
          <p className="text-sm text-gray-500">View and manage all users</p>
        </button>

        <button className="bg-white border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaPaw className="text-xl text-purple-600" />
          </div>
          <p className="font-medium">All Listings</p>
            <p className="text-sm text-gray-500">Manage all pet listings</p>
          </button>

          <button className="bg-white border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaDollarSign className="text-xl text-yellow-600" />
            </div>
            <p className="font-medium">Transactions</p>
            <p className="text-sm text-gray-500">View all transactions</p>
          </button>
        </div>
      </div>
    );
  };

  export default AdminDashboard;
// src/components/ForAdoptionForm.jsx
import React, { useState } from 'react';
import axiosSecure from '../../../api/axiosSecure'; 
import { useNavigate } from 'react-router';

const ForAdoptionForm = () => {
  const [formData, setFormData] = useState({
    petType: '',
    breed: '',
    name: '',
    age: '',
    gender: '',
    size: '',
    color: '',
    description: '',
    healthStatus: 'Healthy',
    vaccinated: false,
    neutered: false,
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    reasonForAdoption: '',
    images: []
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const selectedFiles = Array.from(files);
      setFormData(prev => ({
        ...prev,
        images: selectedFiles
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // FormData তৈরি করুন
      const dataToSend = new FormData();
      
      // টেক্সট ফিল্ডগুলো যোগ করুন
      Object.keys(formData).forEach(key => {
        if (key !== 'images') {
          // চেকবক্স ভ্যালু বুলিয়ান থেকে স্ট্রিংয়ে কনভার্ট করুন
          let value = formData[key];
          if (typeof value === 'boolean') {
            value = value.toString();
          }
          dataToSend.append(key, value);
        }
      });
      
      // ছবি ফাইলগুলো যোগ করুন
      formData.images.forEach((image) => {
        dataToSend.append(`images`, image);
      });
      
      // ডিবাগিং: দেখুন ফর্মডাটায় কী আছে
      console.log('FormData content:');
      for (let [key, value] of dataToSend.entries()) {
        console.log(key, value);
      }
      
      // সার্ভারে সাবমিট করুন
      const response = await axiosSecure.post('/pets', dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);

      if (response.data.success) {
        setSubmitted(true);
        
        // 3 সেকেন্ড পর ফর্ম রিসেট
        setTimeout(() => {
          setFormData({
            petType: '',
            breed: '',
            name: '',
            age: '',
            gender: '',
            size: '',
            color: '',
            description: '',
            healthStatus: 'Healthy',
            vaccinated: false,
            neutered: false,
            location: '',
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            reasonForAdoption: '',
            images: []
          });
          setSubmitted(false);
          navigate('/'); // হোম পেজে রিডাইরেক্ট
        }, 3000);
      }
    } catch (err) {
      console.error('Full error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to submit pet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <span>❌ {error}</span>
        </div>
      )}
      
      {/* Success Message */}
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <span>✅ Pet submitted successfully! Waiting for admin approval.</span>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Give a Pet for Adoption</h1>
        <p className="text-gray-600 text-center mb-8">
          Fill this form to list your pet for adoption. After admin approval, it will appear on the adoption page.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Photos Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pet Photos</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Upload Photos *</label>
              <input
                type="file"
                name="images"
                onChange={handleChange}
                multiple
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="text-sm text-gray-500 mt-2">Upload at least one photo of your pet (max 5 images)</p>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pet Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pet Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Pet Type *</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Bird">Bird</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Breed */}
              <div>
                <label className="block text-sm font-medium mb-2">Breed *</label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Golden Retriever"
                />
              </div>

              {/* Pet Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Pet Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Max"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium mb-2">Age (Years) *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="0"
                  max="30"
                  step="0.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 3"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Extra Large">Extra Large</option>
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Golden"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your pet's personality, habits, likes/dislikes..."
              ></textarea>
            </div>
          </div>

          {/* Health Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Health Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Health Status</label>
                  <select
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Healthy">Healthy</option>
                    <option value="Under Treatment">Under Treatment</option>
                    <option value="Special Needs">Special Needs</option>
                  </select>
                </div>

                {/* Vaccinated Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="vaccinated"
                    checked={formData.vaccinated}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm">Vaccinated</label>
                </div>

                {/* Neutered Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="neutered"
                    checked={formData.neutered}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm">Neutered/Spayed</label>
                </div>
              </div>

              {/* Reason for Adoption */}
              <div>
                <label className="block text-sm font-medium mb-2">Reason for Adoption</label>
                <textarea
                  name="reasonForAdoption"
                  value={formData.reasonForAdoption}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Why are you giving your pet for adoption?"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+88 0123 456-7890"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                loading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit for Approval'
              )}
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Your pet will be reviewed by admin before appearing on adoption page
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForAdoptionForm;
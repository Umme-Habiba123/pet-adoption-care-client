// src/components/BrowseAvailabePets/BrowseAvailabePets.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  FaPaw, 
  FaHeart, 
  FaSearch, 
  FaFilter, 
  FaMapMarkerAlt, 
  FaPhone,
  FaEnvelope,
  FaGenderless,
  FaVenus,
  FaMars,
  FaDog,
  FaCat,
  FaDove,
  FaFish,
  FaSyringe,
  FaClipboardCheck,
  FaCalendar,
  FaRuler,
  FaPalette,
  FaStethoscope,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaEye,
  FaShoppingCart
} from 'react-icons/fa';
import { GiRabbit, GiTortoise } from 'react-icons/gi';

const BrowseAvailabePets = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]); // ✅ Default empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    petType: 'all',
    gender: 'all',
    size: 'all',
    vaccinated: 'all',
    neutered: 'all',
    healthStatus: 'all',
    status: 'available'
  });
  const [sortBy, setSortBy] = useState('newest');

  // Fetch pets from API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Replace with your actual API endpoint
        const response = await fetch('http://localhost:5000/api/pets');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // ✅ Ensure data is an array
        if (Array.isArray(data)) {
          setPets(data);
          setFilteredPets(data);
        } else {
          console.error('API did not return an array:', data);
          setPets([]);
          setFilteredPets([]);
        }
      } catch (error) {
        console.error('Error fetching pets:', error);
        setError('Failed to load pets. Please try again later.');
        
        // Fallback mock data based on MongoDB structure
        const mockPets = [
          {
            _id: "6961796868bca76a2f88656e",
            petType: "Bird",
            breed: "Vero consequuntur es",
            name: "Phelan Mcpherson",
            age: 26,
            gender: "Female",
            size: "Small",
            color: "Libero nulla animi",
            description: "Veniam accusamus ev",
            healthStatus: "Under Treatment",
            vaccinated: false,
            neutered: true,
            location: "Ex delectus et labo",
            contactName: "Belle Hernandez",
            contactPhone: "+1 (895) 529-2623",
            contactEmail: "gahaqu@mailinator.com",
            reasonForAdoption: "Aliquam ratione eum",
            images: ["https://images.unsplash.com/photo-1512082742381-54e4c3206d63?w=400&h=300&fit=crop"],
            status: "pending",
            createdAt: "2026-01-09T21:55:52.459+00:00"
          },
          {
            _id: "6961796868bca76a2f88656f",
            petType: "Dog",
            breed: "Golden Retriever",
            name: "Max",
            age: 2,
            gender: "Male",
            size: "Medium",
            color: "Golden",
            description: "Friendly and playful golden retriever",
            healthStatus: "Healthy",
            vaccinated: true,
            neutered: false,
            location: "Dhaka",
            contactName: "John Doe",
            contactPhone: "+880 1234 567890",
            contactEmail: "john@example.com",
            reasonForAdoption: "Moving abroad",
            images: ["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"],
            status: "available",
            createdAt: "2024-01-10T10:30:00.000+00:00"
          },
          {
            _id: "6961796868bca76a2f886570",
            petType: "Cat",
            breed: "Persian",
            name: "Luna",
            age: 3,
            gender: "Female",
            size: "Small",
            color: "White",
            description: "Beautiful Persian cat",
            healthStatus: "Healthy",
            vaccinated: true,
            neutered: true,
            location: "Chittagong",
            contactName: "Jane Smith",
            contactPhone: "+880 9876 543210",
            contactEmail: "jane@example.com",
            reasonForAdoption: "Allergy issues",
            images: ["https://images.unsplash.com/photo-1514888286974-6d03bde4ba14?w=400&h=300&fit=crop"],
            status: "available",
            createdAt: "2024-01-09T15:45:00.000+00:00"
          }
        ];
        
        setPets(mockPets);
        setFilteredPets(mockPets);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // Filter and sort pets
  useEffect(() => {
    // ✅ Ensure pets is an array
    if (!Array.isArray(pets)) {
      console.error('pets is not an array:', pets);
      setFilteredPets([]);
      return;
    }

    let result = [...pets];

    // Search filter
    if (searchTerm) {
      result = result.filter(pet =>
        pet?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet?.breed?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet?.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet?.petType?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Pet Type filter
    if (filters.petType !== 'all') {
      result = result.filter(pet => pet?.petType === filters.petType);
    }

    // Gender filter
    if (filters.gender !== 'all') {
      result = result.filter(pet => pet?.gender === filters.gender);
    }

    // Size filter
    if (filters.size !== 'all') {
      result = result.filter(pet => pet?.size === filters.size);
    }

    // Vaccinated filter
    if (filters.vaccinated !== 'all') {
      result = result.filter(pet => pet?.vaccinated === (filters.vaccinated === 'yes'));
    }

    // Neutered filter
    if (filters.neutered !== 'all') {
      result = result.filter(pet => pet?.neutered === (filters.neutered === 'yes'));
    }

    // Health Status filter
    if (filters.healthStatus !== 'all') {
      result = result.filter(pet => pet?.healthStatus === filters.healthStatus);
    }

    // Status filter (only show available pets by default)
    if (filters.status !== 'all') {
      result = result.filter(pet => pet?.status === filters.status);
    }

    // Sort
    switch(sortBy) {
      case 'age-low':
        result.sort((a, b) => (a?.age || 0) - (b?.age || 0));
        break;
      case 'age-high':
        result.sort((a, b) => (b?.age || 0) - (a?.age || 0));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a?.createdAt || 0) - new Date(b?.createdAt || 0));
        break;
      default:
        result.sort((a, b) => new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0));
    }

    // ✅ Ensure result is an array
    setFilteredPets(Array.isArray(result) ? result : []);
  }, [searchTerm, filters, sortBy, pets]);

  // Get pet type icon
  const getPetTypeIcon = (type) => {
    switch(type?.toLowerCase()) {
      case 'dog': return <FaDog className="text-blue-500" />;
      case 'cat': return <FaCat className="text-purple-500" />;
      case 'bird': return <FaDove className="text-yellow-500" />;
      case 'fish': return <FaFish className="text-blue-300" />;
      case 'rabbit': return <GiRabbit className="text-pink-500" />;
      default: return <FaPaw className="text-gray-500" />;
    }
  };

  // Get gender icon
  const getGenderIcon = (gender) => {
    switch(gender?.toLowerCase()) {
      case 'male': return <FaMars className="text-blue-500" />;
      case 'female': return <FaVenus className="text-pink-500" />;
      default: return <FaGenderless className="text-gray-500" />;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
        console.log(error)
      return 'Invalid date';
    }
  };

  // Get size badge color
  const getSizeBadgeColor = (size) => {
    switch(size?.toLowerCase()) {
      case 'small': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'large': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get health status badge color
  const getHealthStatusBadgeColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'under treatment': return 'bg-yellow-100 text-yellow-800';
      case 'recovering': return 'bg-blue-100 text-blue-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get status badge color
  const getStatusBadgeColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'adopted': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Pet types for filter
  const petTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'Dog', label: 'Dogs' },
    { id: 'Cat', label: 'Cats' },
    { id: 'Bird', label: 'Birds' },
    { id: 'Fish', label: 'Fish' },
    { id: 'Rabbit', label: 'Rabbits' },
    { id: 'Other', label: 'Others' }
  ];

  // Size options
  const sizeOptions = [
    { id: 'all', label: 'All Sizes' },
    { id: 'Small', label: 'Small' },
    { id: 'Medium', label: 'Medium' },
    { id: 'Large', label: 'Large' }
  ];

  // Gender options
  const genderOptions = [
    { id: 'all', label: 'All Genders' },
    { id: 'Male', label: 'Male' },
    { id: 'Female', label: 'Female' }
  ];

  // Health status options
  const healthStatusOptions = [
    { id: 'all', label: 'All Health Status' },
    { id: 'Healthy', label: 'Healthy' },
    { id: 'Under Treatment', label: 'Under Treatment' },
    { id: 'Recovering', label: 'Recovering' }
  ];

  // Sort options
  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'age-low', label: 'Age: Low to High' },
    { id: 'age-high', label: 'Age: High to Low' }
  ];

  // Status options
  const statusOptions = [
    { id: 'all', label: 'All Status' },
    { id: 'available', label: 'Available' },
    { id: 'pending', label: 'Pending' }
  ];

  // Handle contact click
  const handleContactClick = (pet) => {
    alert(`Contact ${pet?.contactName} at ${pet?.contactPhone} or ${pet?.contactEmail}`);
  };

  // ✅ Safe render function for pets
  const renderPets = () => {
    // Ensure filteredPets is an array
    const petsToRender = Array.isArray(filteredPets) ? filteredPets : [];
    
    if (petsToRender.length === 0) {
      return (
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <FaSearch className="text-gray-300 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No pets found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setFilters({
                petType: 'all',
                gender: 'all',
                size: 'all',
                vaccinated: 'all',
                neutered: 'all',
                healthStatus: 'all',
                status: 'available'
              });
              setSearchTerm('');
            }}
            className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {petsToRender.map((pet) => (
          <div key={pet?._id || Math.random()} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Pet Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={pet?.images?.[0] || 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=300&fit=crop'}
                alt={pet?.name || 'Pet'}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadgeColor(pet?.status)}`}>
                  {pet?.status || 'Unknown'}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getHealthStatusBadgeColor(pet?.healthStatus)}`}>
                  {pet?.healthStatus || 'Unknown'}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {getPetTypeIcon(pet?.petType)}
                  <span className="font-medium">{pet?.petType || 'Pet'}</span>
                </span>
              </div>
            </div>

            {/* Pet Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pet?.name || 'Unknown Name'}</h3>
                  <p className="text-gray-600">{pet?.breed || 'Unknown Breed'}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getGenderIcon(pet?.gender)}
                  <span className="font-medium">{pet?.gender || 'Unknown'}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <FaCalendar className="text-gray-400" />
                  <span className="font-medium">{pet?.age || 0} {pet?.age === 1 ? 'year' : 'years'} old</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaRuler className="text-gray-400" />
                  <span className={`px-2 py-1 rounded ${getSizeBadgeColor(pet?.size)}`}>
                    {pet?.size || 'Unknown'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaPalette className="text-gray-400" />
                  <span>{pet?.color || 'Unknown'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <span>{pet?.location || 'Unknown'}</span>
                </div>
              </div>

              {/* Health Info */}
              <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  {pet?.vaccinated ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                  <span className="text-sm">Vaccinated</span>
                </div>
                <div className="flex items-center gap-2">
                  {pet?.neutered ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                  <span className="text-sm">Neutered</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {pet?.description || 'No description available'}
              </p>

              {/* Contact Info */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900 mb-1">Contact: {pet?.contactName || 'Unknown'}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaPhone />
                    {pet?.contactPhone || 'N/A'}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEnvelope />
                    {pet?.contactEmail || 'N/A'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleContactClick(pet)}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  Contact Owner
                </button>
                <Link
                  to={`/pet/${pet?._id}`}
                  className="px-4 py-3 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 rounded-xl font-medium transition-colors flex items-center justify-center"
                  title="View Details"
                >
                  <FaEye />
                </Link>
              </div>

              {/* Posted Date */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Posted: {formatDate(pet?.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Pets for <span className="text-red-600">Adoption</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Browse through pets that need a loving home. Each pet comes with complete information and health records.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <FaTimesCircle className="text-red-500 text-xl" />
              <div>
                <h3 className="font-bold text-red-900">Error Loading Pets</h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, breed, location, or type..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none text-lg"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none appearance-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => {
                  setFilters({
                    petType: 'all',
                    gender: 'all',
                    size: 'all',
                    vaccinated: 'all',
                    neutered: 'all',
                    healthStatus: 'all',
                    status: 'available'
                  });
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            <select
              value={filters.petType}
              onChange={(e) => setFilters({...filters, petType: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500"
            >
              {petTypes.map(type => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>

            <select
              value={filters.gender}
              onChange={(e) => setFilters({...filters, gender: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500"
            >
              {genderOptions.map(gender => (
                <option key={gender.id} value={gender.id}>{gender.label}</option>
              ))}
            </select>

            <select
              value={filters.size}
              onChange={(e) => setFilters({...filters, size: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500"
            >
              {sizeOptions.map(size => (
                <option key={size.id} value={size.id}>{size.label}</option>
              ))}
            </select>

            <select
              value={filters.healthStatus}
              onChange={(e) => setFilters({...filters, healthStatus: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500"
            >
              {healthStatusOptions.map(status => (
                <option key={status.id} value={status.id}>{status.label}</option>
              ))}
            </select>

            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500"
            >
              {statusOptions.map(status => (
                <option key={status.id} value={status.id}>{status.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Available Pets for Adoption
              </h2>
              <p className="text-gray-600">
                Found <span className="font-bold text-red-600">
                  {Array.isArray(filteredPets) ? filteredPets.length : 0}
                </span> pets
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Showing: {statusOptions.find(s => s.id === filters.status)?.label}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : (
            renderPets()
          )}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Want to Adopt a Pet?</h3>
              <p className="text-blue-700">
                Contact the owner directly to learn more about the pet and start the adoption process.
                Make sure to ask about the pet's health, behavior, and any special care requirements.
              </p>
            </div>
            <Link
              to="/adopt-form"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              Apply for Adoption
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseAvailabePets;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import axiosSecure from '../../../api/axiosSecure'; 
import { 
  FaPaw, FaFilter, FaSearch, FaHeart, 
  FaVenus, FaMars, FaSyringe, FaShieldAlt,
  FaMapMarkerAlt, FaCalendarAlt, FaDog, FaCat,
  FaCheckCircle, FaTimesCircle, FaStar, FaRabbit,
  FaDove, FaQuestionCircle
} from 'react-icons/fa';

const BrowsePets = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    gender: 'all',
    size: 'all',
    vaccinated: 'all',
    neutered: 'all',
    age: 'all',
    location: '',
    search: ''
  });

  // API থেকে approved pets লোড করুন
  useEffect(() => {
    fetchApprovedPets();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, pets]);

  const fetchApprovedPets = async () => {
    try {
      setLoading(true);
      // আপনার backend API endpoint
      const response = await axiosSecure.get('/pets/approved');
      setPets(response.data);
      setFilteredPets(response.data);
    } catch (err) {
      console.error('Error fetching pets:', err);
      setError('Failed to load pets. Please try again.');
      // Fallback: Mock data যদি API কাজ না করে
      setPets([]);
      setFilteredPets([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper function: Get pet icon
  const getPetIcon = (type) => {
    switch(type?.toLowerCase()) {
      case 'dog': return <FaDog className="text-amber-600" />;
      case 'cat': return <FaCat className="text-gray-600" />;
      case 'rabbit': return <FaRabbit className="text-gray-500" />;
      case 'bird': return <FaDove className="text-blue-500" />;
      default: return <FaPaw className="text-gray-400" />;
    }
  };

  // Helper function: Get gender icon
  const getGenderIcon = (gender) => {
    switch(gender?.toLowerCase()) {
      case 'male': return <FaMars className="text-blue-500" />;
      case 'female': return <FaVenus className="text-pink-500" />;
      default: return <FaQuestionCircle className="text-gray-400" />;
    }
  };

  // Helper function: Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Apply filters function (পূর্বের মতো)

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-4 border-red-600 border-t-transparent mx-auto mb-6"
          />
          <p className="text-gray-600 font-medium">Loading pets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Find Your <span className="text-yellow-300">Furry Friend</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Browse through our lovely pets waiting for their forever homes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* Pets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <motion.div
              key={pet._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Pet Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pet.images && pet.images[0] 
                    ? `http://localhost:5000${pet.images[0]}` // আপনার backend URL
                    : "https://images.unsplash.com/photo-1543466835-00a7907e9de1"
                  }
                  alt={pet.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1";
                  }}
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  {getPetIcon(pet.petType)}
                  <span className="font-semibold text-sm">{pet.petType}</span>
                </div>
                
                {/* Gender Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {getGenderIcon(pet.gender)}
                </div>
                
                {/* Vaccinated Badge */}
                {pet.vaccinated && (
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                    <FaSyringe />
                    <span>Vaccinated</span>
                  </div>
                )}
              </div>

              {/* Pet Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                    <p className="text-gray-600 text-sm">{pet.breed}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-500 flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Featured</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>{pet.age} years old</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span>{pet.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    {getGenderIcon(pet.gender)}
                    <span>{pet.gender} • {pet.size}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {pet.description || "Loving pet looking for a forever home."}
                </p>

                {/* Health Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    pet.healthStatus === 'Healthy' 
                      ? 'bg-green-100 text-green-800' 
                      : pet.healthStatus === 'Under Treatment'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {pet.healthStatus === 'Healthy' ? 
                      <FaCheckCircle /> : <FaTimesCircle />
                    }
                    <span>{pet.healthStatus}</span>
                  </div>
                  
                  {pet.neutered && (
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      <FaShieldAlt className="inline mr-1" />
                      Neutered
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    to={`/adopt-form/${pet._id}`}
                    className="flex-1 bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Adopt Now
                  </Link>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaHeart className="text-gray-600" />
                  </button>
                </div>

                {/* Posted Date */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Posted: {formatDate(pet.createdAt)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Pets Found */}
        {filteredPets.length === 0 && !loading && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg mt-6">
            <FaPaw className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No pets available for adoption</h3>
            <p className="text-gray-600 mb-6">
              Check back later or list your own pet for adoption
            </p>
            <Link
              to="/adoptionForm"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              List a Pet for Adoption
            </Link>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Adopt?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Give a loving home to one of our pets. Adoption changes lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/adoptionForm"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-all"
            >
              List a Pet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePets;
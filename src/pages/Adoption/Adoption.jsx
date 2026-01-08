import React, { useState, useEffect } from 'react';
import PetFilter from '../../Components/PetFilter/PetFilter';

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    size: '',
    gender: '',
    status: 'Available',
    search: ''
  });

  // Mock data for initial display
  const mockPets = [
    {
      id: '1',
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: 3,
      gender: 'Male',
      size: 'Large',
      color: 'Golden',
      description: 'Friendly and energetic golden retriever who loves playing fetch. Great with kids and other pets.',
      personality: ['Friendly', 'Playful', 'Good with kids', 'Loyal'],
      healthStatus: 'Healthy',
      vaccinated: true,
      neutered: true,
      adoptionFee: 150,
      location: 'New York',
      images: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'],
      status: 'Available',
      featured: true
    },
    {
      id: '2',
      name: 'Luna',
      type: 'Cat',
      breed: 'Siamese',
      age: 2,
      gender: 'Female',
      size: 'Small',
      color: 'Cream',
      description: 'Gentle and affectionate siamese cat looking for a quiet home.',
      personality: ['Calm', 'Affectionate', 'Independent'],
      vaccinated: true,
      neutered: true,
      adoptionFee: 100,
      location: 'Los Angeles',
      images: ['https://images.unsplash.com/photo-1514888286974-6d03bde4ba4f?w-400'],
      status: 'Available',
      featured: false
    },
    {
      id: '3',
      name: 'Rocky',
      type: 'Dog',
      breed: 'German Shepherd',
      age: 4,
      gender: 'Male',
      size: 'Large',
      color: 'Black & Tan',
      description: 'Protective and intelligent German Shepherd. Trained in basic commands.',
      personality: ['Intelligent', 'Protective', 'Loyal'],
      vaccinated: true,
      neutered: true,
      adoptionFee: 200,
      location: 'Chicago',
      images: ['https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400'],
      status: 'Available',
      featured: true
    },
    {
      id: '4',
      name: 'Bella',
      type: 'Cat',
      breed: 'Persian',
      age: 1,
      gender: 'Female',
      size: 'Small',
      color: 'White',
      description: 'Fluffy Persian cat who loves attention and cuddles.',
      personality: ['Gentle', 'Calm', 'Affectionate'],
      vaccinated: true,
      neutered: false,
      adoptionFee: 120,
      location: 'Miami',
      images: ['https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400'],
      status: 'Available',
      featured: false
    },
    {
      id: '5',
      name: 'Charlie',
      type: 'Rabbit',
      breed: 'Holland Lop',
      age: 1,
      gender: 'Male',
      size: 'Small',
      color: 'Brown',
      description: 'Adorable bunny who is litter trained and loves vegetables.',
      personality: ['Gentle', 'Curious', 'Friendly'],
      vaccinated: true,
      neutered: true,
      adoptionFee: 50,
      location: 'Seattle',
      images: ['https://images.unsplash.com/photo-1556838803-cc94986cb631?w=400'],
      status: 'Available',
      featured: false
    },
    {
      id: '6',
      name: 'Daisy',
      type: 'Bird',
      breed: 'Cockatiel',
      age: 2,
      gender: 'Female',
      size: 'Small',
      color: 'Yellow & Grey',
      description: 'Beautiful cockatiel who can whistle and loves attention.',
      personality: ['Playful', 'Vocal', 'Friendly'],
      vaccinated: true,
      neutered: false,
      adoptionFee: 80,
      location: 'Austin',
      images: ['https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400'],
      status: 'Available',
      featured: true
    }
  ];

//   useEffect(() => {
//     // Initially use mock data
//     setPets(mockPets);
//     setLoading(false);

//     // Uncomment when backend is ready:
//     // loadPets();
//   }, []);

  const loadPets = async () => {
    try {
      setLoading(true);
      const data = await fetchPets(filters);
      setPets(data);
      setError(null);
    } catch (err) {
        console.log(err)
      setError('Failed to load pets. Please try again later.');
      // Fallback to mock data
      setPets(mockPets.filter(pet => 
        (!filters.type || pet.type === filters.type) &&
        (!filters.size || pet.size === filters.size) &&
        (!filters.gender || pet.gender === filters.gender) &&
        (!filters.search || 
          pet.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          pet.breed.toLowerCase().includes(filters.search.toLowerCase()))
      ));
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Filter mock data
    const filtered = mockPets.filter(pet => 
      (!newFilters.type || pet.type === newFilters.type) &&
      (!newFilters.size || pet.size === newFilters.size) &&
      (!newFilters.gender || pet.gender === newFilters.gender) &&
      (!newFilters.search || 
        pet.name.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        pet.breed.toLowerCase().includes(newFilters.search.toLowerCase()))
    );
    setPets(filtered);
  };

  const handleViewDetails = (pet) => {
    setSelectedPet(pet);
    setShowDetailModal(true);
  };

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowDetailModal(false);
    setShowAdoptionForm(true);
  };

  const availablePets = pets.filter(pet => pet.status === 'Available');
  const featuredPets = pets.filter(pet => pet.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-2xl p-8 mb-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Find Your Forever Friend</h1>
            <p className="text-xl mb-8">
              Give a loving home to pets in need. Browse our adorable companions waiting for their perfect family.
            </p>
            <div className="stats shadow bg-white text-gray-800">
              <div className="stat">
                <div className="stat-title">Pets Available</div>
                <div className="stat-value">{availablePets.length}</div>
                <div className="stat-desc">Ready for adoption</div>
              </div>
              <div className="stat">
                <div className="stat-title">Successful Adoptions</div>
                <div className="stat-value">1,234+</div>
                <div className="stat-desc">Happy families</div>
              </div>
              <div className="stat">
                <div className="stat-title">Rescue Centers</div>
                <div className="stat-value">15+</div>
                <div className="stat-desc">Partnered with us</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Pets */}
      {featuredPets.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">⭐</span> Featured Pets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPets.map(pet => (
              <div key={pet.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <figure className="h-48 overflow-hidden">
                  <img 
                    src={pet.images[0]} 
                    alt={pet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="badge badge-primary absolute top-4 right-4">
                    Featured
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{pet.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{pet.type}</span>•<span>{pet.breed}</span>•<span>{pet.age} years</span>
                  </div>
                  <p className="line-clamp-2">{pet.description}</p>
                  <div className="card-actions justify-between items-center mt-4">
                    <div className="font-bold text-lg">${pet.adoptionFee}</div>
                    <button 
                      onClick={() => handleViewDetails(pet)}
                      className="btn btn-primary"
                    >
                      Meet {pet.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      Filter Section
      <PetFilter 
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={loadPets}
      />

      {/* Pets Grid */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Available Pets</h2>
          <div className="text-sm text-gray-600">
            Showing {availablePets.length} pets
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="text-gray-600">Loading pets...</p>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-warning">
            <span>{error}</span>
          </div>
        ) : availablePets.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold mb-2">No pets found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or check back later</p>
            <button 
              onClick={() => handleFilterChange({
                type: '',
                size: '',
                gender: '',
                status: 'Available',
                search: ''
              })}
              className="btn btn-outline"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availablePets.map(pet => (
              <PetCard
                key={pet.id}
                pet={pet}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>

      {/* Adoption Process Info */}
      <div className="bg-base-200 rounded-2xl p-8 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">How Adoption Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '🔍', title: 'Browse Pets', desc: 'View available pets and find your match' },
            { icon: '📝', title: 'Submit Application', desc: 'Fill out our adoption form' },
            { icon: '🤝', title: 'Meet & Greet', desc: 'Schedule a meeting with the pet' },
            { icon: '🏡', title: 'Bring Home', desc: 'Complete paperwork and take home' }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-lg mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {selectedPet && showDetailModal && (
        <PetDetailModal
          pet={selectedPet}
          onClose={() => setShowDetailModal(false)}
          onAdopt={() => handleAdoptClick(selectedPet)}
        />
      )}

      {selectedPet && showAdoptionForm && (
        <AdoptionFormModal
          pet={selectedPet}
          onClose={() => setShowAdoptionForm(false)}
          onSubmit={(formData) => {
            console.log('Adoption form submitted:', formData);
            alert('Adoption application submitted successfully! We will contact you soon.');
            setShowAdoptionForm(false);
          }}
        />
      )}
    </div>
  );
};

export default Adoption;
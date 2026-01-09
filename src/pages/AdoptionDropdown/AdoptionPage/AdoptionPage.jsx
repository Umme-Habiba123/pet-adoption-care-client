import React, { useState, useEffect } from 'react';
import PetCard from '../PetCard/PetCard';

const AdoptionPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  // Initial approved pets
  const initialPets = [
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: 3,
      gender: "Male",
      size: "Large",
      description: "Friendly and energetic golden retriever",
      vaccinated: true,
      neutered: true,
      adoptionFee: 150,
      location: "New York",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
      status: "available"
    },
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Siamese",
      age: 2,
      gender: "Female",
      size: "Small",
      description: "Gentle and affectionate cat",
      vaccinated: true,
      neutered: true,
      adoptionFee: 100,
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1514888286974-6d03bde4ba4f?w=400",
      status: "available"
    }
  ];

  useEffect(() => {
    // Load approved pets from localStorage
    const approvedPets = JSON.parse(localStorage.getItem('approvedPets') || '[]');
    
    // Transform to match PetCard format
    const transformedPets = approvedPets.map(pet => ({
      id: pet.id,
      name: pet.name,
      type: pet.petType,
      breed: pet.breed,
      age: pet.age,
      gender: pet.gender,
      size: pet.size,
      description: pet.description,
      vaccinated: pet.vaccinated,
      neutered: pet.neutered,
      adoptionFee: pet.adoptionFee || 0,
      location: pet.location,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400", // Default image
      status: pet.status || 'available'
    }));

    setPets([...initialPets, ...transformedPets]);
  }, []);

  const handleAdopt = (pet) => {
    setSelectedPet(pet);
    setShowAdoptionForm(true);
  };

  const submitAdoption = (formData) => {
    console.log('Adoption submitted:', { pet: selectedPet, adopter: formData });
    alert('Adoption request submitted! We will contact you soon.');
    setShowAdoptionForm(false);
    setSelectedPet(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Adopt a Loving Pet</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find your perfect companion from our list of approved pets. Each pet has been verified and is ready for a forever home.
        </p>
      </div>

      {/* Stats */}
      <div className="stats shadow bg-white mb-8">
        <div className="stat">
          <div className="stat-title">Total Pets</div>
          <div className="stat-value">{pets.length}</div>
          <div className="stat-desc">Available for adoption</div>
        </div>
        <div className="stat">
          <div className="stat-title">Recently Added</div>
          <div className="stat-value">{pets.filter(p => p.status === 'available').length}</div>
          <div className="stat-desc">Ready for new homes</div>
        </div>
        <div className="stat">
          <div className="stat-title">Success Rate</div>
          <div className="stat-value">98%</div>
          <div className="stat-desc">Successful adoptions</div>
        </div>
      </div>

      {/* Pets Grid */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Pets</h2>
          <div className="text-sm text-gray-600">
            Showing {pets.filter(p => p.status === 'available').length} pets
          </div>
        </div>

        {pets.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold mb-2">No pets available yet</h3>
            <p className="text-gray-600">Check back soon or submit a pet for adoption</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pets
              .filter(pet => pet.status === 'available')
              .map(pet => (
                <div key={pet.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <figure className="h-48">
                    <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <h3 className="card-title">{pet.name}</h3>
                      <span className="badge badge-primary">{pet.type}</span>
                    </div>
                    <p className="text-sm text-gray-600">{pet.breed} • {pet.age} years • {pet.gender}</p>
                    <p className="text-gray-700 line-clamp-2">{pet.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <div className="font-bold text-lg">${pet.adoptionFee}</div>
                        <div className="text-xs text-gray-500">Adoption Fee</div>
                      </div>
                      <button 
                        onClick={() => handleAdopt(pet)}
                        className="btn btn-primary"
                      >
                        Adopt Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* How It Works */}
      <div className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Submit Pet", desc: "Fill form to list pet for adoption" },
            { step: "2", title: "Admin Review", desc: "Our team verifies and approves" },
            { step: "3", title: "List for Adoption", desc: "Approved pets appear here" },
            { step: "4", title: "Find Home", desc: "Adopters apply and meet the pet" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Adoption Form Modal */}
      {showAdoptionForm && selectedPet && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Adopt {selectedPet.name}</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              submitAdoption({
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone')
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="label">Full Name</label>
                  <input type="text" name="name" className="input input-bordered w-full" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input input-bordered w-full" required />
                  </div>
                  <div>
                    <label className="label">Phone</label>
                    <input type="tel" name="phone" className="input input-bordered w-full" required />
                  </div>
                </div>
                <div>
                  <label className="label">Why do you want to adopt {selectedPet.name}?</label>
                  <textarea name="message" className="textarea textarea-bordered w-full" rows="3"></textarea>
                </div>
              </div>
              <div className="modal-action">
                <button type="button" onClick={() => setShowAdoptionForm(false)} className="btn">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Adoption Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionPage;
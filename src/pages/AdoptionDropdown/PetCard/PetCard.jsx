import React from 'react';

const PetCard = ({ pet, onAdopt }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="h-48">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h3 className="card-title">{pet.name}</h3>
          <span className="badge badge-primary">{pet.type}</span>
        </div>
        <p className="text-sm text-gray-600">
          {pet.breed} • {pet.age} years • {pet.gender} • {pet.size}
        </p>
        <p className="text-gray-700 line-clamp-2 mt-2">{pet.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {pet.vaccinated && <span className="badge badge-success badge-sm">Vaccinated</span>}
          {pet.neutered && <span className="badge badge-info badge-sm">Neutered</span>}
        </div>
        
        <div className="card-actions justify-between items-center mt-4">
          <div>
            <div className="font-bold text-lg">${pet.adoptionFee}</div>
            <div className="text-xs text-gray-500">{pet.location}</div>
          </div>
          <button 
            onClick={() => onAdopt(pet)}
            className="btn btn-primary"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
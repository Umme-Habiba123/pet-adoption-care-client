import React from 'react';

const PetCard = ({ pet, onViewDetails }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <figure className="h-48 relative overflow-hidden">
        <img 
          src={pet.images[0]} 
          alt={pet.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {pet.status === 'Adopted' && (
          <div className="absolute top-4 right-4">
            <div className="badge badge-error gap-2">
              <span>Adopted</span>
            </div>
          </div>
        )}
        {pet.featured && (
          <div className="absolute top-4 left-4">
            <div className="badge badge-primary gap-2">
              <span>⭐</span>
              <span>Featured</span>
            </div>
          </div>
        )}
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="card-title text-lg">{pet.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{pet.type}</span>•<span>{pet.breed}</span>
            </div>
          </div>
          <div className={`badge ${pet.gender === 'Male' ? 'badge-info' : 'badge-secondary'}`}>
            {pet.gender}
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm my-2">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Age:</span>
            <span className="font-medium">{pet.age} years</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Size:</span>
            <span className="font-medium">{pet.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Location:</span>
            <span className="font-medium">{pet.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-2 text-sm mb-4">
          {pet.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {pet.personality?.slice(0, 3).map((trait, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              {trait}
            </span>
          ))}
        </div>
        
        <div className="card-actions justify-between items-center">
          <div>
            <div className="font-bold text-lg text-primary">${pet.adoptionFee}</div>
            <div className="text-xs text-gray-500">Adoption Fee</div>
          </div>
          <button 
            onClick={() => onViewDetails(pet)}
            className={`btn ${pet.status === 'Adopted' ? 'btn-disabled' : 'btn-primary'}`}
            disabled={pet.status === 'Adopted'}
          >
            {pet.status === 'Adopted' ? 'Already Adopted' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
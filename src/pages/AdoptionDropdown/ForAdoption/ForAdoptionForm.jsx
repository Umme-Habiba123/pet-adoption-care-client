import React, { useState } from 'react';

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
    images: [],
    reasonForAdoption: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new pet object
    const newPet = {
      id: Date.now(),
      ...formData,
      status: 'pending', // Admin needs to approve
      createdAt: new Date().toISOString(),
      submittedBy: formData.contactName
    };

    // Save to localStorage (or send to backend)
    const pendingPets = JSON.parse(localStorage.getItem('pendingPets') || '[]');
    pendingPets.push(newPet);
    localStorage.setItem('pendingPets', JSON.stringify(pendingPets));

    setSubmitted(true);
    
    // Reset form
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
        images: [],
        reasonForAdoption: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {submitted && (
        <div className="alert alert-success mb-6">
          <span>✅ Pet submitted successfully! Waiting for admin approval.</span>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Give a Pet for Adoption</h1>
        <p className="text-gray-600 text-center mb-8">
          Fill this form to list your pet for adoption. After admin approval, it will appear on the adoption page.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Pet Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pet Type *</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Bird">Bird</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Breed *</label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., Golden Retriever"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pet Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., Max"
                />
              </div>

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
                  className="input input-bordered w-full"
                  placeholder="e.g., 3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Extra Large">Extra Large</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="textarea textarea-bordered w-full"
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
                    className="select select-bordered w-full"
                  >
                    <option value="Healthy">Healthy</option>
                    <option value="Under Treatment">Under Treatment</option>
                    <option value="Special Needs">Special Needs</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="vaccinated"
                    checked={formData.vaccinated}
                    onChange={handleChange}
                    className="checkbox checkbox-primary mr-2"
                  />
                  <label className="text-sm">Vaccinated</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="neutered"
                    checked={formData.neutered}
                    onChange={handleChange}
                    className="checkbox checkbox-primary mr-2"
                  />
                  <label className="text-sm">Neutered/Spayed</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Reason for Adoption</label>
                <textarea
                  name="reasonForAdoption"
                  value={formData.reasonForAdoption}
                  onChange={handleChange}
                  rows="2"
                  className="textarea textarea-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  className="input input-bordered w-full"
                  placeholder="mimu@example.com"
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
                  className="input input-bordered w-full"
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg px-8"
            >
              Submit for Approval
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
// components/AdoptForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCalendar,
  FaPaw,
  FaHeart,
  FaCheckCircle,
  FaFileAlt,
  FaArrowLeft
} from 'react-icons/fa';

const GetAdoptionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pet, setPet] = useState(null);

  // Get pet data from URL or state
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const petId = searchParams.get('petId');
    
    // If petId exists in URL, fetch pet details
    if (petId) {
      fetchPetDetails(petId);
    } else if (location.state?.pet) {
      // If pet data passed via state
      setPet(location.state.pet);
    }
  }, [location]);

  const fetchPetDetails = async (petId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pets/${petId}`);
      const data = await response.json();
      if (data.success) {
        setPet(data.data);
      }
    } catch (error) {
      console.error('Error fetching pet:', error);
    }
  };

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Bangladesh',
    
    // Family & Home Information
    housingType: '',
    hasYard: '',
    yardSize: '',
    hasOtherPets: '',
    otherPetsInfo: '',
    hasChildren: '',
    childrenAges: '',
    familyMembers: '',
    
    // Experience & Care
    previousPetExperience: '',
    experienceDetails: '',
    hoursAlone: '',
    dailyWalks: '',
    canAfford: '',
    monthlyBudget: '',
    
    // Adoption Specific
    adoptionReason: '',
    howDidYouHear: '',
    veterinarianName: '',
    veterinarianPhone: '',
    
    // References
    reference1Name: '',
    reference1Phone: '',
    reference1Relationship: '',
    reference2Name: '',
    reference2Phone: '',
    reference2Relationship: '',
    
    // Pet Information (if selected)
    petId: '',
    petName: '',
    petType: '',
    
    // Agreement
    agreeTerms: false,
    agreeHomeCheck: false,
    agreeFollowUp: false
  });

  const housingTypes = ['Apartment', 'House', 'Condo', 'Townhouse', 'Farm'];
  const hoursAloneOptions = ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours'];
  // const howDidYouHearOptions = ['Facebook', 'Instagram', 'Friend/Family', 'Google Search', 'PetAdopt Website', 'Other'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/adoptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          petId: pet?._id || '',
          petName: pet?.name || '',
          petType: pet?.petType || '',
          applicationDate: new Date().toISOString(),
          status: 'pending'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: 'Bangladesh',
            housingType: '',
            hasYard: '',
            yardSize: '',
            hasOtherPets: '',
            otherPetsInfo: '',
            hasChildren: '',
            childrenAges: '',
            familyMembers: '',
            previousPetExperience: '',
            experienceDetails: '',
            hoursAlone: '',
            dailyWalks: '',
            canAfford: '',
            monthlyBudget: '',
            adoptionReason: '',
            howDidYouHear: '',
            veterinarianName: '',
            veterinarianPhone: '',
            reference1Name: '',
            reference1Phone: '',
            reference1Relationship: '',
            reference2Name: '',
            reference2Phone: '',
            reference2Relationship: '',
            petId: '',
            petName: '',
            petType: '',
            agreeTerms: false,
            agreeHomeCheck: false,
            agreeFollowUp: false
          });
          setLoading(false);
          
          // Navigate to success page or dashboard after 3 seconds
          setTimeout(() => {
            navigate('/adoption-success');
          }, 3000);
        }, 2000);
      } else {
        alert('Error submitting application: ' + data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting application. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apply for <span className="text-red-600">Adoption</span>
          </h1>
          <p className="text-gray-600">
            Fill out this form to apply for pet adoption. Please be honest and thorough in your responses.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl font-bold text-green-900">Application Submitted Successfully!</h3>
                <p className="text-green-700">
                  Thank you for your application. We'll review it and contact you within 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pet Information Card (if pet is selected) */}
        {pet && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <FaPaw className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Applying for: {pet.name}</h3>
                  <p className="text-gray-600">{pet.breed} • {pet.age} years • {pet.gender}</p>
                  <p className="text-sm text-gray-500">Location: {pet.location}</p>
                </div>
              </div>
              <img
                src={pet.images?.[0] || 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=200&h=200&fit=crop'}
                alt={pet.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>
          </div>
        )}

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Application Progress</span>
              <span>25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>

          {/* Section 1: Personal Information */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <FaUser className="text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  placeholder="+880 1234 567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Address Information */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FaHome className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Address Information</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  placeholder="House #, Road #, Area"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    placeholder="Dhaka"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State/Division *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    placeholder="Dhaka Division"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    placeholder="1200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Home & Family Information */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaHeart className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Home & Family Information</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Housing *
                </label>
                <select
                  name="housingType"
                  value={formData.housingType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select Housing Type</option>
                  {housingTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have a yard? *
                  </label>
                  <select
                    name="hasYard"
                    value={formData.hasYard}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {formData.hasYard === 'yes' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yard Size
                    </label>
                    <input
                      type="text"
                      name="yardSize"
                      value={formData.yardSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                      placeholder="e.g., Small, Medium, Large"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have other pets? *
                </label>
                <select
                  name="hasOtherPets"
                  value={formData.hasOtherPets}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {formData.hasOtherPets === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please describe your other pets
                  </label>
                  <textarea
                    name="otherPetsInfo"
                    value={formData.otherPetsInfo}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    placeholder="Type, breed, age, temperament, etc."
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Adoption Questions */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FaFileAlt className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Adoption Questions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to adopt this pet? *
                </label>
                <textarea
                  name="adoptionReason"
                  value={formData.adoptionReason}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  placeholder="Please explain why you want to adopt and what you can provide for the pet..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How many hours will the pet be alone daily? *
                </label>
                <select
                  name="hoursAlone"
                  value={formData.hoursAlone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select</option>
                  {hoursAloneOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Can you afford the ongoing costs of pet ownership? *
                </label>
                <select
                  name="canAfford"
                  value={formData.canAfford}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 5: Agreement */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FaCheckCircle className="text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Agreement</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-5 w-5 text-red-600 rounded"
                />
                <label htmlFor="agreeTerms" className="text-gray-700">
                  I agree to provide a loving and permanent home for the pet. I understand that adopting a pet is a long-term commitment.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeHomeCheck"
                  name="agreeHomeCheck"
                  checked={formData.agreeHomeCheck}
                  onChange={handleChange}
                  required
                  className="mt-1 h-5 w-5 text-red-600 rounded"
                />
                <label htmlFor="agreeHomeCheck" className="text-gray-700">
                  I agree to a home visit/inspection by a representative from PetAdopt before adoption approval.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeFollowUp"
                  name="agreeFollowUp"
                  checked={formData.agreeFollowUp}
                  onChange={handleChange}
                  required
                  className="mt-1 h-5 w-5 text-red-600 rounded"
                />
                <label htmlFor="agreeFollowUp" className="text-gray-700">
                  I agree to follow-up visits/calls from PetAdopt to ensure the pet's well-being.
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || success}
              className={`px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${
                loading || success
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : success ? (
                <>
                  <FaCheckCircle />
                  Submitted!
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>

          {/* Form Note */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              * Required fields. Your information will be kept confidential and used only for adoption purposes.
            </p>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-blue-900 mb-2">📋 What happens next?</h3>
          <ol className="list-decimal pl-5 space-y-2 text-blue-700">
            <li>Application Review (3-5 business days)</li>
            <li>Phone Interview</li>
            <li>Home Visit/Inspection</li>
            <li>Meet & Greet with Pet</li>
            <li>Final Approval & Adoption</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GetAdoptionForm;
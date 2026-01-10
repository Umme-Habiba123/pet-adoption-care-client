// src/components/Foster.jsx
import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  FaHeart,
  FaUserFriends,
  FaClock,
  FaDog,
  FaCat,
  FaBaby,
  FaStethoscope,
  FaCheckCircle,
  FaTimesCircle,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaQuestionCircle,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaStar,
  FaPaperPlane
} from 'react-icons/fa';

const Foster = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Available foster pets
  const fosterPets = [
    {
      id: 1,
      name: 'Luna',
      type: 'Cat',
      breed: 'Domestic Shorthair',
      age: '3 weeks',
      needs: 'Bottle feeding, Frequent care',
      image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=300&fit=crop',
      urgency: 'high',
      duration: '4-6 weeks',
      specialRequirements: 'Every 3 hours feeding, Keep warm'
    },
    {
      id: 2,
      name: 'Max',
      type: 'Dog',
      breed: 'Mixed Breed',
      age: '2 months',
      needs: 'Socialization, Basic training',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop',
      urgency: 'medium',
      duration: '2-3 months',
      specialRequirements: 'House training, Social exposure'
    },
    {
      id: 3,
      name: 'Milo',
      type: 'Dog',
      breed: 'Beagle',
      age: '5 years',
      needs: 'Medical recovery, Post-surgery care',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=300&fit=crop',
      urgency: 'high',
      duration: '1-2 months',
      specialRequirements: 'Medication twice daily, Limited movement'
    },
    {
      id: 4,
      name: 'Bella',
      type: 'Cat',
      breed: 'Persian',
      age: '1 year',
      needs: 'Behavioral rehabilitation',
      image: 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba14?w=400&h=300&fit=crop',
      urgency: 'low',
      duration: '3-4 months',
      specialRequirements: 'Quiet environment, Patient handling'
    }
  ];

  // Foster types
  const fosterTypes = [
    {
      id: 'neonatal',
      title: 'Neonatal/Bottle Babies',
      icon: <FaBaby />,
      description: 'Newborn animals needing round-the-clock care',
      duration: '4-8 weeks',
      commitment: 'Very High',
      bestFor: 'Experienced fosters, Work from home'
    },
    {
      id: 'medical',
      title: 'Medical Foster',
      icon: <FaStethoscope />,
      description: 'Animals recovering from surgery or illness',
      duration: '2-8 weeks',
      commitment: 'High',
      bestFor: 'Nursing background, Attention to detail'
    },
    {
      id: 'behavioral',
      title: 'Behavioral Foster',
      icon: <FaHeart />,
      description: 'Animals needing socialization and training',
      duration: '1-6 months',
      commitment: 'Medium',
      bestFor: 'Patient individuals, Training experience'
    },
    {
      id: 'mother-babies',
      title: 'Mother & Babies',
      icon: <FaUserFriends />,
      description: 'Pregnant or nursing mothers with litter',
      duration: '8-12 weeks',
      commitment: 'High',
      bestFor: 'Families, Spacious homes'
    },
    {
      id: 'senior',
      title: 'Senior/Hospice Foster',
      icon: <FaClock />,
      description: 'Older animals or those with terminal illness',
      duration: 'Varies',
      commitment: 'High',
      bestFor: 'Compassionate individuals, End-of-life care experience'
    },
    {
      id: 'emergency',
      title: 'Emergency/Temporary Foster',
      icon: <FaShieldAlt />,
      description: 'Short-term placement during crises',
      duration: '1-4 weeks',
      commitment: 'Low',
      bestFor: 'Flexible schedule, Quick responders'
    }
  ];

  // Requirements checklist
  const requirements = [
    'Safe, clean home environment',
    'Time to devote to animal care',
    'Ability to transport to vet appointments',
    'Patience and compassion',
    'No other pets that may pose a risk',
    'Basic knowledge of animal care',
    'Financial stability for basic needs',
    'Landlord permission (if renting)'
  ];

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    fosterType: '',
    duration: '',
    hasOtherPets: '',
    otherPetsInfo: '',
    vetReference: '',
    emergencyContact: '',
    agreeTerms: false
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    alert('Foster application submitted! We will contact you within 48 hours.');
    setShowApplicationForm(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      fosterType: '',
      duration: '',
      hasOtherPets: '',
      otherPetsInfo: '',
      vetReference: '',
      emergencyContact: '',
      agreeTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Black & Red */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            Become a <span className="text-red-600">Foster</span> Parent 🏠
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Provide temporary love and care to animals in need. Be their bridge to a forever home.
          </p>
        </div>

        {/* Stats Banner - Black & Red */}
        <div className="bg-black rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-sm text-gray-300">Animals Fostered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">450+</div>
              <div className="text-sm text-gray-300">Active Foster Homes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">48 hrs</div>
              <div className="text-sm text-gray-300">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation - Black & Red */}
        <div className="flex overflow-x-auto border-b border-gray-300 mb-8">
          {['overview', 'pets', 'types', 'process', 'apply'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold whitespace-nowrap capitalize ${
                activeTab === tab
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'pets' && 'Pets Needing Foster'}
              {tab === 'types' && 'Foster Types'}
              {tab === 'process' && 'How It Works'}
              {tab === 'apply' && 'Apply Now'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* What is Foster Care - Black & White */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-xl">
                  <FaQuestionCircle className="text-red-600 text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">What is Foster Care?</h2>
                  <p className="text-gray-800">Temporary caregiving for animals in transition</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">You Provide:</h3>
                  <ul className="space-y-3">
                    {['Safe home environment', 'Love and socialization', 'Basic care and training', 
                      'Transportation to vet', 'Observation and feedback', 'Temporary commitment'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FaCheckCircle className="text-red-600" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">We Provide:</h3>
                  <ul className="space-y-3">
                    {['All medical expenses', 'Food and supplies', 'Training and support', 
                      'Adoption screening', '24/7 emergency support', 'Forever home placement'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FaCheckCircle className="text-red-600" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Foster - Black & White with Red accents */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Why Become a Foster Parent?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Save Lives',
                    desc: 'Free up shelter space for more animals in need',
                    icon: '💖'
                  },
                  {
                    title: 'Learn & Grow',
                    desc: 'Gain experience with different animals and needs',
                    icon: '📚'
                  },
                  {
                    title: 'Flexible Commitment',
                    desc: 'Choose duration and type that fits your lifestyle',
                    icon: '⏰'
                  },
                  {
                    title: 'Community Impact',
                    desc: 'Be part of a network of animal lovers',
                    icon: '👥'
                  },
                  {
                    title: 'Test Run',
                    desc: 'Experience pet ownership before adopting',
                    icon: '🏡'
                  },
                  {
                    title: 'Emotional Reward',
                    desc: 'Joy of seeing an animal heal and find a home',
                    icon: '🎉'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 transition-colors">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start CTA - Red Button */}
            <div className="text-center">
              <button
                onClick={() => setActiveTab('apply')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Your Foster Journey Today
                <FaArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Pets Needing Foster Tab */}
        {activeTab === 'pets' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-black">Pets Needing Foster Homes</h2>
                <p className="text-gray-800">These animals urgently need temporary care</p>
              </div>
              <div className="text-sm text-gray-600">
                Updated: Today
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fosterPets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-red-600 transition-colors">
                  <div className="relative">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        pet.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        pet.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {pet.urgency === 'high' ? 'URGENT' : pet.urgency === 'medium' ? 'MEDIUM' : 'LOW'}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-gray-300">
                      {pet.type === 'Dog' ? <FaDog className="inline mr-1 text-gray-700" /> : <FaCat className="inline mr-1 text-gray-700" />}
                      <span className="text-gray-800 font-medium">{pet.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-black">{pet.name}</h3>
                        <p className="text-gray-700">{pet.breed} • {pet.age}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-bold text-black">{pet.duration}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Special Needs:</h4>
                      <p className="text-black">{pet.needs}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Requirements:</h4>
                      <p className="text-sm text-gray-700">{pet.specialRequirements}</p>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('apply');
                        setFormData(prev => ({...prev, fosterType: pet.type}));
                      }}
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <FaHandHoldingHeart />
                      Foster {pet.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Foster Types Tab */}
        {activeTab === 'types' && (
          <div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">Types of Foster Care</h2>
              <p className="text-gray-800">Choose the foster type that matches your lifestyle and experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fosterTypes.map((type) => (
                <div key={type.id} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <div className="text-red-600 text-xl">
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black">{type.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-4">{type.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-medium text-black">{type.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Commitment Level:</span>
                      <span className={`font-medium ${
                        type.commitment === 'Very High' ? 'text-red-600' :
                        type.commitment === 'High' ? 'text-red-500' :
                        type.commitment === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {type.commitment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Best For:</span>
                      <span className="font-medium text-right text-black">{type.bestFor}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('apply');
                      setFormData(prev => ({...prev, fosterType: type.title}));
                    }}
                    className="w-full py-2 border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-lg font-bold transition-colors"
                  >
                    Choose This Type
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Works Tab */}
        {activeTab === 'process' && (
          <div className="space-y-8">
            {/* Process Steps */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-black mb-8 text-center">The Foster Process</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 md:left-1/2 md:transform md:-translate-x-1/2"></div>

                {[
                  {
                    step: 1,
                    title: 'Application',
                    desc: 'Submit online application',
                    icon: '📝',
                    time: '24-48 hours'
                  },
                  {
                    step: 2,
                    title: 'Interview',
                    desc: 'Phone or video interview',
                    icon: '📞',
                    time: '1-2 days'
                  },
                  {
                    step: 3,
                    title: 'Home Check',
                    desc: 'Virtual or in-person home visit',
                    icon: '🏡',
                    time: '3-5 days'
                  },
                  {
                    step: 4,
                    title: 'Training',
                    desc: 'Online or in-person training',
                    icon: '🎓',
                    time: '1 week'
                  },
                  {
                    step: 5,
                    title: 'Placement',
                    desc: 'Receive your first foster pet',
                    icon: '🐾',
                    time: '1-2 weeks'
                  },
                  {
                    step: 6,
                    title: 'Support',
                    desc: 'Ongoing support and check-ins',
                    icon: '🤝',
                    time: 'Continuous'
                  }
                ].map((item, index) => (
                  <div key={item.step} className="relative flex items-start mb-12 last:mb-0">
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-4 border-white">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                    </div>
                    
                    <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 transition-colors">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-3">{item.desc}</p>
                        <div className="text-sm text-red-600 font-bold">
                          ⏱️ {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements - Black & Red */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Foster Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">You Must Have:</h3>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-red-600 mt-1" />
                        <span className="text-gray-800">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">We Will Provide:</h3>
                  <ul className="space-y-3">
                    {[
                      'All veterinary care and medication',
                      'Food, litter, and basic supplies',
                      'Crate, bed, and essential equipment',
                      '24/7 emergency support line',
                      'Training and behavior resources',
                      'Adoption event participation',
                      'Foster community access',
                      'Tax-deductible donation receipts'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaStar className="text-red-600 mt-1" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Apply Now Tab */}
        {activeTab === 'apply' && (
          <div>
            {!showApplicationForm ? (
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaHandHoldingHeart className="text-red-600 text-3xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">Ready to Foster?</h2>
                  <p className="text-gray-800 max-w-2xl mx-auto mb-8">
                    Complete our application to become a foster parent. Our team will review your 
                    application and contact you within 48 hours.
                  </p>
                  
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Application
                    <FaArrowRight className="inline ml-2" />
                  </button>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: '📞',
                      title: 'Support',
                      desc: '24/7 access to our foster team'
                    },
                    {
                      icon: '⏰',
                      title: 'Flexible',
                      desc: 'Choose duration that works for you'
                    },
                    {
                      icon: '🎓',
                      title: 'Training',
                      desc: 'Comprehensive training provided'
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-red-600 transition-colors">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-black">Foster Application</h2>
                    <p className="text-gray-800">Tell us about yourself and your experience</p>
                  </div>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-700 hover:text-red-600"
                  >
                    <FaTimesCircle className="text-2xl" />
                  </button>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                        placeholder="+880 1234 567890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Preferred Foster Type *
                      </label>
                      <select
                        name="fosterType"
                        value={formData.fosterType}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                      >
                        <option value="" className="text-gray-500">Select foster type</option>
                        <option value="Neonatal/Bottle Babies">Neonatal/Bottle Babies</option>
                        <option value="Medical Foster">Medical Foster</option>
                        <option value="Behavioral Foster">Behavioral Foster</option>
                        <option value="Mother & Babies">Mother & Babies</option>
                        <option value="Senior/Hospice Foster">Senior/Hospice Foster</option>
                        <option value="Emergency/Temporary Foster">Emergency/Temporary Foster</option>
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Full Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                      placeholder="House #, Road #, Area, City"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Previous Pet Experience *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleFormChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                      placeholder="Describe your experience with pets, training, medical care, etc."
                    />
                  </div>

                  {/* Other Pets */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Do you have other pets? *
                      </label>
                      <select
                        name="hasOtherPets"
                        value={formData.hasOtherPets}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                      >
                        <option value="" className="text-gray-500">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Available Duration *
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-black"
                      >
                        <option value="" className="text-gray-500">Select duration</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2-4 months">2-4 months</option>
                        <option value="4+ months">4+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Agreement - Red & Black */}
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleFormChange}
                        required
                        className="mt-1 h-5 w-5 text-red-600 rounded focus:ring-red-600"
                      />
                      <label htmlFor="agreeTerms" className="text-gray-800">
                        I agree to provide a safe, loving temporary home for foster animals. 
                        I understand that all veterinary care will be provided by PetAdopt, 
                        and I agree to follow all foster guidelines and policies.
                      </label>
                    </div>
                  </div>

                  {/* Submit Buttons - Red & Black */}
                  <div className="flex justify-end gap-4 pt-6 border-t border-gray-300">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="px-8 py-3 border-2 border-gray-400 text-gray-800 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                      <FaPaperPlane />
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Footer CTA - Black & Red */}
        <div className="mt-12 bg-black rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Questions About Fostering?</h3>
              <p className="text-gray-300">Contact our foster team for more information</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors">
                <FaPhone className="inline mr-2" />
                Call Us
              </button>
              <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                <FaEnvelope className="inline mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foster;
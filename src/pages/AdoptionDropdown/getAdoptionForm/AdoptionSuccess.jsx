// src/pages/AdoptionSuccess.jsx
import React from 'react';
import { Link, useLocation } from 'react-router';
import { 
  FaCheckCircle, 
  FaHome, 
  FaPaw, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt,
  FaFileAlt,
  FaUserFriends,
  FaHeart,
  FaArrowLeft,
  FaWhatsapp,
  FaFacebook,
  FaShareAlt
} from 'react-icons/fa';

const AdoptionSuccess = () => {
  const location = useLocation();
  const adoptionData = location.state?.adoptionData || {};
  const petData = location.state?.petData || {};

  // Mock data if no state passed
  const defaultAdoptionData = {
    // applicationId: 'APP-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    fullName: 'John Doe',
    email: 'john@example.com',
    petName: 'Max',
    applicationDate: new Date().toISOString(),
    estimatedReviewTime: '3-5 business days'
  };

  const defaultPetData = {
    name: 'Max',
    breed: 'Golden Retriever',
    age: 2,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop'
  };

  const data = {
    ...defaultAdoptionData,
    ...adoptionData
  };

  const pet = {
    ...defaultPetData,
    ...petData
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Share on social media
  const shareOnWhatsApp = () => {
    const message = `I just applied to adopt a pet from PetAdopt! 🐾 Application ID: ${data.applicationId}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  // Next steps
  const nextSteps = [
    {
      step: 1,
      title: 'Application Review',
      description: 'Our team will review your application within 3-5 business days',
      icon: <FaFileAlt />,
      time: '1-3 days'
    },
    {
      step: 2,
      title: 'Phone Interview',
      description: 'We will contact you for a brief phone interview',
      icon: <FaPhone />,
      time: '3-5 days'
    },
    {
      step: 3,
      title: 'Home Visit',
      description: 'Schedule a home visit to ensure a safe environment',
      icon: <FaHome />,
      time: '5-7 days'
    },
    {
      step: 4,
      title: 'Meet & Greet',
      description: 'Meet the pet in person (if applicable)',
      icon: <FaUserFriends />,
      time: '7-10 days'
    },
    {
      step: 5,
      title: 'Final Approval',
      description: 'Receive final adoption approval and complete paperwork',
      icon: <FaCheckCircle />,
      time: '10-14 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Icon & Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center animate-bounce">
              <FaHeart className="text-red-500 text-2xl" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Application <span className="text-green-600">Submitted</span> Successfully! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for choosing to give a pet a loving home. Your journey to adoption has begun!
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-green-200">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Adoption Application Confirmation</h2>
                <p className="opacity-90">Your application has been received and is being processed</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  Application ID: <span className="font-bold">{data.applicationId}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Application Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Applicant Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <FaUserFriends className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Applicant Information</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-semibold text-gray-900">{data.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-semibold text-gray-900">{data.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Application Date</p>
                    <p className="font-semibold text-gray-900">{formatDate(data.applicationDate)}</p>
                  </div>
                </div>
              </div>

              {/* Pet Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <FaPaw className="text-red-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Pet Information</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Pet Name</p>
                    <p className="font-semibold text-gray-900">{pet.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Breed</p>
                    <p className="font-semibold text-gray-900">{pet.breed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-semibold text-gray-900">{pet.age} years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Timeline */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaCalendarAlt className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">What Happens Next?</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:transform md:-translate-x-1/2"></div>

                <div className="space-y-8">
                  {nextSteps.map((step, index) => (
                    <div 
                      key={step.step} 
                      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    >
                      {/* Step circle */}
                      <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white ${
                          step.step === 1 ? 'bg-green-500' :
                          'bg-gray-200'
                        }`}>
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </div>
                      </div>

                      {/* Step card */}
                      <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              {step.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{step.title}</h4>
                              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {step.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <FaEnvelope className="text-yellow-600" />
                Important Information
              </h4>
              <ul className="space-y-2 text-yellow-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">📧</span>
                  <span>Check your email regularly for updates (including spam folder)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">📞</span>
                  <span>Keep your phone nearby for our call (usually from private numbers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">📋</span>
                  <span>Prepare necessary documents: ID proof, address proof, and home ownership/rental agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">⏰</span>
                  <span>Response time may vary based on application volume (typically 3-5 business days)</span>
                </li>
              </ul>
            </div>

            {/* Share & Actions */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center pt-8 border-t border-gray-200">
              {/* Share Section */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <FaShareAlt />
                  Share the good news!
                </h4>
                <div className="flex gap-3">
                  <button
                    onClick={shareOnWhatsApp}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <FaFacebook />
                    Facebook
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaArrowLeft />
                  Back to Home
                </Link>
                <Link
                  to="/adoption"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaPaw />
                  Browse More Pets
                </Link>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FaFileAlt />
                  Print Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Need Help? Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
              <p className="text-gray-600 text-sm">adoptions@petadopt.com</p>
              <p className="text-gray-500 text-xs mt-1">Response within 24 hours</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
              <p className="text-gray-600 text-sm">+880 1234 567890</p>
              <p className="text-gray-500 text-xs mt-1">Mon-Fri, 9AM-6PM</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaWhatsapp className="text-purple-600 text-xl" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
              <p className="text-gray-600 text-sm">+880 9876 543210</p>
              <p className="text-gray-500 text-xs mt-1">24/7 Chat Support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            While you wait, explore our pet care resources and prepare for your new family member!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/resources/pet-care"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors"
            >
              Pet Care Guide
            </Link>
            <Link
              to="/resources/faq"
              className="px-6 py-3 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 rounded-xl font-medium transition-colors"
            >
              Adoption FAQ
            </Link>
            <Link
              to="/community"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-colors"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <FaHeart className="text-red-500 animate-pulse" />
            <span>Thank you for choosing adoption. You're saving a life!</span>
            <FaHeart className="text-red-500 animate-pulse" />
          </div>
          <p className="text-gray-400 text-xs mt-2">
            * This confirmation is auto-generated. Please save your Application ID for future reference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdoptionSuccess;
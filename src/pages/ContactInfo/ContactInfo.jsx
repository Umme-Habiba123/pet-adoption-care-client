import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaUser, FaDog, FaCat } from 'react-icons/fa';
import { GiLoveLetter } from 'react-icons/gi';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone className="text-red-500" size={24} />,
      title: 'Emergency Rescue Hotline',
      info: '1-800-PERRESCUE',
      description: 'Available 24/7 for urgent pet rescue',
      color: 'bg-red-50'
    },
    {
      icon: <FaEnvelope className="text-red-500" size={24} />,
      title: 'General Inquiries',
      info: 'help@perrescue.com',
      description: 'Response within 24 hours',
      color: 'bg-blue-50'
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" size={24} />,
      title: 'Visit Our Shelter',
      info: '123 Rescue Lane, Pet City',
      description: 'Mon-Sat: 10AM-6PM, Sun: 12PM-4PM',
      color: 'bg-green-50'
    },
    {
      icon: <FaClock className="text-red-500" size={24} />,
      title: 'Adoption Hours',
      info: 'By Appointment Only',
      description: 'Schedule your visit online',
      color: 'bg-purple-50'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 p-4 rounded-full mb-6">
            <GiLoveLetter size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            We're here to help you with adoption, fostering, and any questions about pet rescue.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className={`${item.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-3 rounded-full">
                <FaPaperPlane className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <GiLoveLetter className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent! 🎉</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting PerRescue. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline mr-2 text-gray-500" size={14} />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaEnvelope className="inline mr-2 text-gray-500" size={14} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="inline mr-2 text-gray-500" size={14} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                      placeholder="+880 123 654 789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      <option value="">Select a topic</option>
                      <option value="adoption">Adoption Inquiry</option>
                      <option value="foster">Fostering Program</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donation">Donation</option>
                      <option value="emergency">Emergency Rescue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700 hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map & Info Section */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-400" />
                Visit Our Shelter
              </h3>
              <div className="bg-gray-800 rounded-2xl p-4 mb-6">
                <div className="h-64 md:h-72 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaDog size={24} />
                    </div>
                    <p className="text-lg font-bold">Interactive Map</p>
                    <p className="text-gray-400 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <FaClock className="text-red-400" />
                  </div>
                  <div>
                    <p className="font-bold">Opening Hours</p>
                    <p className="text-gray-400">Mon-Fri: 9AM-7PM | Sat-Sun: 10AM-5PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <FaDog className="text-red-400" />
                  </div>
                  <div>
                    <p className="font-bold">Adoption Hours</p>
                    <p className="text-gray-400">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-2xl flex items-center gap-3 transition-colors">
                  <FaFacebookF className="text-blue-600" size={20} />
                  <span className="font-medium">Facebook</span>
                </a>
                <a href="#" className="bg-pink-50 hover:bg-pink-100 p-4 rounded-2xl flex items-center gap-3 transition-colors">
                  <FaInstagram className="text-pink-600" size={20} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a href="#" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-2xl flex items-center gap-3 transition-colors">
                  <FaTwitter className="text-blue-400" size={20} />
                  <span className="font-medium">Twitter</span>
                </a>
                <a href="#" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-2xl flex items-center gap-3 transition-colors">
                  <FaLinkedin className="text-blue-700" size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Need Immediate Help?</h4>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <FaPhone />
                  Emergency Hotline: 1-800-PERRESCUE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-white border-2 border-red-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Didn't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Check out our FAQ section for answers to common questions about adoption, fostering, and pet care.
            </p>
            <a 
              href="/FAQ"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              Visit FAQ Section
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
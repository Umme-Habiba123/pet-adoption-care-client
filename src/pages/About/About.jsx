// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaPaw,
  FaUsers,
  FaHome,
  FaStar,
  FaTrophy,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaClock,
  FaAward,
  FaGlobe,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt
} from 'react-icons/fa';

const About = () => {
  // Team members
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Veterinarian',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      bio: '15+ years of veterinary experience',
      social: { facebook: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Former animal shelter manager',
      social: { facebook: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Adoption Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      bio: 'Animal behavior specialist',
      social: { facebook: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Foster Program Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Rescue organization veteran',
      social: { facebook: '#', twitter: '#', linkedin: '#' }
    }
  ];

  // Milestones timeline
  const milestones = [
    { year: '2015', event: 'Founded with first rescue center' },
    { year: '2016', event: '500+ successful adoptions' },
    { year: '2018', event: 'Launched foster program' },
    { year: '2020', event: 'Expanded to 3 cities' },
    { year: '2022', event: '10,000+ pets rescued' },
    { year: '2024', event: 'National recognition award' }
  ];

  // Core values
  const values = [
    {
      icon: <FaHeart />,
      title: 'Compassion First',
      description: 'Every animal deserves love and respect'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Animal Welfare',
      description: 'Health and safety are our top priorities'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'Building networks of caring individuals'
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Responsibility',
      description: 'Ethical and sustainable practices'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "PetAdopt helped me find my perfect companion. The process was smooth and professional.",
      author: "Jessica Miller",
      role: "Adopter of Luna (Golden Retriever)",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    {
      quote: "As a foster parent, I've received incredible support from the PetAdopt team.",
      author: "Robert Chen",
      role: "Foster Parent for 2 years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      quote: "Their adoption matching system is exceptional. They really understand pet personalities.",
      author: "Maria Garcia",
      role: "Adopted 3 pets through PetAdopt",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-red-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              Our <span className="text-red-600">Mission</span> is Their <span className="text-red-600">Future</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Connecting loving homes with pets in need since 2015. 
              Every adoption, every foster, every donation changes a life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/adoption"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-colors"
              >
                Adopt a Pet
              </Link>
              <Link
                to="/foster"
                className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-lg transition-colors"
              >
                Become a Foster
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12,500+', label: 'Pets Rescued', icon: <FaPaw /> },
              { number: '9,800+', label: 'Successful Adoptions', icon: <FaHome /> },
              { number: '2,300+', label: 'Active Foster Homes', icon: <FaHandHoldingHeart /> },
              { number: '98.7%', label: 'Adoption Success Rate', icon: <FaStar /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our <span className="text-red-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-800">
                <p>
                  Founded in 2015 by Dr. Sarah Johnson, PetAdopt began as a small rescue operation 
                  in a single city. What started with a handful of volunteers has grown into a 
                  nationwide network of animal lovers.
                </p>
                <p>
                  Our founder, a veterinarian with 15+ years of experience, witnessed firsthand 
                  the challenges faced by abandoned and homeless pets. She realized that while 
                  there were many people willing to help, there was no efficient system connecting 
                  them with animals in need.
                </p>
                <p>
                  Today, PetAdopt operates across multiple cities, with dedicated teams of 
                  veterinarians, behaviorists, and volunteers working together to ensure every 
                  pet finds their perfect home.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
                alt="Our story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">9 Years</div>
                <div className="text-sm">of saving lives</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-600 rounded-xl">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300">
                To create a world where no pet is homeless or unloved by connecting animals 
                in need with compassionate families through innovative adoption and foster 
                programs, comprehensive education, and community partnerships.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-600 rounded-xl">
                  <FaGlobe className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300">
                A future where every pet has a loving home, animal welfare is prioritized, 
                and communities are empowered to make compassionate choices for their 
                furry family members.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our <span className="text-red-600">Core Values</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-colors">
                <div className="text-red-600 text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Our <span className="text-red-600">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Year circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                      <h3 className="font-bold text-black mb-2">{milestone.event}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Meet Our <span className="text-red-600">Team</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Dedicated professionals passionate about animal welfare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-red-600 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href={member.social.facebook} className="text-gray-600 hover:text-red-600">
                      <FaFacebook />
                    </a>
                    <a href={member.social.twitter} className="text-gray-600 hover:text-red-600">
                      <FaTwitter />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-red-600">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Stories of <span className="text-red-600">Hope</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our adopters, fosters, and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8">
                <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make a <span className="text-red-600">Difference</span>?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you want to adopt, foster, volunteer, or donate, there's a place for you 
              in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/volunteer"
                className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-lg transition-colors"
              >
                Volunteer
              </Link>
              <Link
                to="/donate"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Pet<span className="text-red-600">Adopt</span>
              </h3>
              <p className="text-gray-400">
                Creating forever homes for pets in need since 2015.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/adoption" className="text-gray-400 hover:text-white transition-colors">Adopt a Pet</Link></li>
                <li><Link to="/foster" className="text-gray-400 hover:text-white transition-colors">Foster Program</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  123 Pet Street, Animal City
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone />
                  +880 1234 567890
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope />
                  info@petadopt.com
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 PetAdopt. All rights reserved. | Making tails wag since 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
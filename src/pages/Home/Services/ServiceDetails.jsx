import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaPaw, FaShower, FaGraduationCap, FaSyringe, FaHome, 
  FaArrowLeft, FaCalendarAlt, FaClock, FaCheck, 
  FaPhone, FaMapMarkerAlt, FaStar, FaHeart
} from 'react-icons/fa';

// Services data (Services.jsx থেকে আলাদা)
const servicesData = [
  {
    id: 1,
    title: "Grooming",
    desc: "Professional grooming with premium products for healthy skin and coat.",
    img: "https://i.ibb.co.com/fVJ3PP9b/3852.webp",
    iconType: "shower",
    color: "from-red-600 to-red-700",
    borderColor: "border-red-500",
    gradient: "from-red-50 to-red-100",
    stats: "98% Satisfaction",
    features: [
      "Full-body grooming",
      "Nail trimming",
      "Ear cleaning",
      "Specialized shampoos"
    ],
    detailedDesc: "Our professional grooming service uses only the finest pet-friendly products to ensure your furry friend looks and feels their best. We provide a stress-free environment with experienced groomers who understand pet behavior.",
    benefits: [
      "Healthy skin and coat",
      "Reduced shedding",
      "Early detection of skin issues",
      "Improved hygiene"
    ],
    pricing: [
      { type: "Basic Grooming", price: "৳ 800", duration: "1-2 hours" },
      { type: "Premium Grooming", price: "৳ 1,200", duration: "2-3 hours" },
      { type: "Spa Package", price: "৳ 1,800", duration: "3-4 hours" }
    ],
    duration: "1-4 hours",
    rating: 4.9,
    reviews: 124,
    faqs: [
      { q: "How often should I groom my pet?", a: "Every 4-6 weeks depending on breed and coat type." },
      { q: "Do you sedate pets?", a: "No, we use gentle handling techniques and positive reinforcement." },
      { q: "Can I stay with my pet?", a: "Yes, we have a comfortable waiting area with live monitoring." }
    ]
  },
  {
    id: 2,
    title: "Training",
    desc: "Comprehensive behavior training from basic obedience to advanced skills.",
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    iconType: "graduation",
    color: "from-gray-800 to-black",
    borderColor: "border-gray-800",
    gradient: "from-gray-50 to-gray-100",
    stats: "Certified Trainers",
    features: [
      "Basic obedience",
      "Behavior correction",
      "Advanced tricks",
      "Puppy training"
    ],
    detailedDesc: "Our certified trainers use positive reinforcement techniques to teach your pet essential skills and correct unwanted behaviors. Training programs are customized to your pet's personality and your lifestyle.",
    benefits: [
      "Better behavior at home",
      "Improved socialization",
      "Enhanced pet-owner bond",
      "Safer outdoor experiences"
    ],
    pricing: [
      { type: "Basic Package (4 sessions)", price: "৳ 3,000", duration: "1 month" },
      { type: "Advanced Package (8 sessions)", price: "৳ 5,500", duration: "2 months" },
      { type: "Complete Training", price: "৳ 8,000", duration: "3 months" }
    ],
    duration: "4-12 weeks",
    rating: 4.8,
    reviews: 89,
    faqs: [
      { q: "What training methods do you use?", a: "We use positive reinforcement and science-based methods." },
      { q: "Can you train older dogs?", a: "Yes, dogs of all ages can learn new behaviors." },
      { q: "Do you provide follow-up support?", a: "Yes, we offer 3 months of free follow-up consultations." }
    ]
  },
  {
    id: 3,
    title: "Vaccination",
    desc: "Complete vaccination schedule with expert veterinary supervision.",
    img: "https://i.ibb.co.com/93wDSDv3/shutterstock-507811945-1.png",
    iconType: "syringe",
    color: "from-red-600 to-red-700",
    borderColor: "border-red-600",
    gradient: "from-red-100 to-red-50",
    stats: "100% Safe",
    features: [
      "Core vaccines",
      "Annual boosters",
      "Health certificates",
      "Travel vaccinations"
    ],
    detailedDesc: "Complete vaccination schedule with expert veterinary supervision to ensure your pet's health and safety. We follow international protocols and maintain proper records.",
    benefits: [
      "Disease prevention",
      "Legal compliance",
      "Travel safety",
      "Peace of mind"
    ],
    pricing: [
      { type: "Basic Vaccination", price: "৳ 500", duration: "30 mins" },
      { type: "Annual Package", price: "৳ 2,500", duration: "1 hour" },
      { type: "Complete Health Check", price: "৳ 3,500", duration: "2 hours" }
    ],
    duration: "30 mins - 2 hours",
    rating: 4.9,
    reviews: 156,
    faqs: [
      { q: "Which vaccines are essential?", a: "Rabies, Distemper, Parvovirus are core vaccines." },
      { q: "How often should pets be vaccinated?", a: "Annual boosters are recommended for most vaccines." },
      { q: "Are there any side effects?", a: "Mild fever or lethargy may occur for 24-48 hours." }
    ]
  },
  {
    id: 4,
    title: "Day Care",
    desc: "Safe and fun environment with constant supervision and playtime.",
    img: "https://i.ibb.co.com/MynmbwPg/1682008182186.png",
    iconType: "home",
    color: "from-amber-600 to-red-600",
    borderColor: "border-red-400",
    gradient: "from-amber-50 to-red-50",
    stats: "24/7 Monitoring",
    features: [
      "Supervised playtime",
      "Indoor/outdoor areas",
      "Feeding schedule",
      "Nap time"
    ],
    detailedDesc: "Safe and fun environment with constant supervision and playtime for your beloved pets. We ensure your pet gets proper exercise, socialization, and care while you're away.",
    benefits: [
      "Socialization",
      "Exercise and play",
      "Safe environment",
      "Professional care"
    ],
    pricing: [
      { type: "Half Day", price: "৳ 600", duration: "4 hours" },
      { type: "Full Day", price: "৳ 1,000", duration: "8 hours" },
      { type: "Weekly Package", price: "৳ 4,500", duration: "5 days" }
    ],
    duration: "4-8 hours",
    rating: 4.7,
    reviews: 203,
    faqs: [
      { q: "What's the staff to pet ratio?", a: "We maintain 1:5 ratio for optimal care." },
      { q: "What should I bring?", a: "Food, leash, and any medication your pet needs." },
      { q: "Is there a trial period?", a: "Yes, we offer a free half-day trial for new clients." }
    ]
  },
];

// Icon mapping function
const getIcon = (iconType) => {
  switch(iconType) {
    case 'shower': return <FaShower />;
    case 'graduation': return <FaGraduationCap />;
    case 'syringe': return <FaSyringe />;
    case 'home': return <FaHome />;
    default: return <FaPaw />;
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = parseInt(serviceId);
    const foundService = servicesData.find(s => s.id === id);
    
    if (foundService) {
      setService(foundService);
      setLoading(false);
    } else {
      navigate('/');
    }
  }, [serviceId, navigate]);

  const handleBookNow = () => {
    if (!service) return;
    
    const bookingData = {
      serviceId: service.id,
      serviceName: service.title,
      package: service.pricing[selectedPackage],
      date: new Date().toISOString().split('T')[0]
    };
    
    navigate('/booking', { state: bookingData });
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+8801873333199";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaPaw className="w-16 h-16 text-red-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <FaPaw className="w-24 h-24 text-red-600 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.img} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-3 text-white hover:text-red-300 mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                <div className="text-2xl">
                  {getIcon(service.iconType)}
                </div>
              </div>
              <div>
                <span className="font-bold text-lg">{service.title}</span>
                <div className="flex items-center gap-2 mt-1">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm opacity-90">{service.rating} ({service.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Premium {service.title} <br />
              <span className="text-red-400">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
              {service.detailedDesc}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <FaClock className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-bold">{service.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <FaHeart className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Satisfaction</p>
                  <p className="font-bold">{service.stats}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg"
            >
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 lg:mb-8">
                Service <span className="text-red-600">Features</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-red-50 border border-red-100 rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className={`p-2 lg:p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                        {getIcon(service.iconType)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Benefits Section */}
          <motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-red-50/70 to-red-100/50 backdrop-blur-sm border border-red-200/50 text-black rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg"
>
  <h2 className="text-2xl lg:text-3xl font-black mb-6 lg:mb-8">
    Benefits
  </h2>
  
  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
    {service.benefits.map((benefit, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)"
        }}
        className="bg-white/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-red-300/30 hover:border-red-400/50 transition-all duration-300"
      >
        <div className="flex items-start gap-3 lg:gap-4">
          <div className="p-2 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
            <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit}</h3>
            <p className="text-gray-600 text-sm">
              Expert care ensuring your pet's health and happiness
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg"
            >
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 lg:mb-8">
                Frequently Asked <span className="text-red-600">Questions</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6">
                {service.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 lg:pb-6 last:border-0"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 lg:mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl sticky top-8"
            >
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-black">Book Now</h3>
                <FaHeart className="text-red-500 text-xl" />
              </div>
              
              <div className="space-y-4 mb-6 lg:mb-8">
                {service.pricing.map((pkg, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPackage(index)}
                    className={`p-4 lg:p-5 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedPackage === index 
                        ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-500 shadow-lg' 
                        : 'bg-gray-800 hover:bg-gray-700 border-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2 lg:mb-3">
                      <span className="font-bold text-lg">{pkg.type}</span>
                      <span className="text-2xl lg:text-3xl font-black">{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <FaClock />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleBookNow}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 lg:py-4 rounded-xl lg:rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Appointment
              </button>
              
              <div className="mt-6 space-y-2 text-center">
                <p className="text-gray-400 text-sm">
                  ✓ Free cancellation up to 24 hours
                </p>
                <p className="text-gray-400 text-sm">
                  ✓ 100% satisfaction guarantee
                </p>
              </div>
            </motion.div>

            {/* Emergency Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl lg:rounded-3xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-100">
                  <FaPhone className="text-red-600 text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Emergency Support</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
              
              <button
                onClick={handleEmergencyCall}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 lg:py-4 rounded-xl text-lg mb-4 shadow-lg hover:shadow-xl transition-all"
              >
                Call Now: +880 1873333 199
              </button>
              
              <div className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-xl">
                <FaMapMarkerAlt className="text-red-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
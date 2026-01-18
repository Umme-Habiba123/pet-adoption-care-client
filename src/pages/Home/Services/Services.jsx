import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaPaw, FaShower, FaGraduationCap, FaSyringe, FaHome, FaHeart, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const services = [
  {
    id: 1,
    title: "Grooming",
    desc: "Professional grooming with premium products for healthy skin and coat.",
    img: "https://i.ibb.co.com/fVJ3PP9b/3852.webp",
    iconType: "shower",
    color: "from-black to-gray-800",
    borderColor: "border-red-500",
    gradient: "from-red-50 to-red-100",
    stats: "98% Satisfaction",
    features: [
      "Full-body grooming",
      "Nail trimming",
      "Ear cleaning",
      "Specialized shampoos"
    ]
  },
  {
    id: 2,
    title: "Training",
    desc: "Comprehensive behavior training from basic obedience to advanced skills.",
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    iconType: "graduation",
    color: "from-black to-gray-800",
    borderColor: "border-black",
    gradient: "from-gray-50 to-gray-100",
    stats: "Certified Trainers",
    features: [
      "Basic obedience",
      "Behavior correction",
      "Advanced tricks",
      "Puppy training"
    ]
  },
  {
    id: 3,
    title: "Vaccination",
    desc: "Complete vaccination schedule with expert veterinary supervision.",
    img: "https://i.ibb.co.com/93wDSDv3/shutterstock-507811945-1.png",
    iconType: "syringe",
    color: "from-black to-gray-800",
    borderColor: "border-red-600",
    gradient: "from-red-100 to-red-50",
    stats: "100% Safe",
    features: [
      "Core vaccines",
      "Annual boosters",
      "Health certificates",
      "Travel vaccinations"
    ]
  },
  {
    id: 4,
    title: "Day Care",
    desc: "Safe and fun environment with constant supervision and playtime.",
    img: "https://i.ibb.co.com/MynmbwPg/1682008182186.png",
    iconType: "home",
    color: "from-black to-gray-800",
    borderColor: "border-red-400",
    gradient: "from-amber-50 to-red-50",
    stats: "24/7 Monitoring",
    features: [
      "Supervised playtime",
      "Indoor/outdoor areas",
      "Feeding schedule",
      "Nap time"
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

const Services = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Handle Learn More Click
  const handleLearnMore = (serviceId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Navigate to service details page
    navigate(`/services/${serviceId}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Handle View All Services
  const handleViewAllServices = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  // Handle Book Consultation
  const handleBookConsultation = (e) => {
    e.preventDefault();
    navigate('/book-consultation');
  };

  // Handle Emergency Call
  const handleEmergencyCall = (e) => {
    e.preventDefault();
    window.location.href = "tel:+8801873333199";
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-red-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-20 w-64 h-64 bg-gradient-to-br from-red-100/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-gradient-to-tr from-red-50/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={titleVariants}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-5 py-1 rounded-full mb-4">
              <FaPaw className="text-red-600" />
              <span className="font-semibold text-sm">OUR SERVICES</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-4xl font-black text-black leading-tight mb-4"
            variants={titleVariants}
          >
            <span className="">Premium Care For</span>  <span className="relative"> <span className="text-red-600">Your Furry</span>
              <motion.span 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "180px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              /></span> <span className="">Companions</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            variants={titleVariants}
          >
            Expert services designed to keep your pets healthy, happy, and thriving 
            with the highest standards of care and compassion.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-red-100">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div 
                    className={`absolute top-4 right-4 bg-gradient-to-br ${service.color} text-white p-3 rounded-xl shadow-xl z-20`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring" }}
                    whileHover={{ rotate: 360 }}
                  >
                    <div className="text-lg">
                      {getIcon(service.iconType)}
                    </div>
                  </motion.div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className={`bg-gradient-to-r ${service.gradient} text-gray-800 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                      {service.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <motion.h3 
                    className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Action Button - OPTION 1: Button with onClick */}
                  <motion.button
                    onClick={(e) => handleLearnMore(service.id, e)}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group/btn cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-xs" />
                    </motion.span>
                  </motion.button>
                </div>

                {/* Hover Effect Line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* CORNER DECORATIONS */}
              <div className="absolute -top-2 -left-2 w-8 h-8 z-10">
                <motion.div 
                  className={`w-full h-full border-t-2 border-l-2 ${service.borderColor} rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <div className="absolute -top-2 -right-2 w-8 h-8 z-10">
                <motion.div 
                  className={`w-full h-full border-t-2 border-r-2 ${service.borderColor} rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-8 h-8 z-10">
                <motion.div 
                  className={`w-full h-full border-b-2 border-l-2 ${service.borderColor} rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-8 h-8 z-10">
                <motion.div 
                  className={`w-full h-full border-b-2 border-r-2 ${service.borderColor} rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-6 md:mt-16 lg:mt-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.button
              onClick={handleViewAllServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <FaHeart className="text-white" />
              <span>View All Services</span>
            </motion.button>
            
            <motion.button
              onClick={handleBookConsultation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <span>Book Consultation</span>
              <FaArrowRight />
            </motion.button>
          </div>
          
          {/* Additional Info - Emergency Call */}
          <motion.div 
            className="mt-4 p-5 lg:ml-4 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 inline-block max-w-md cursor-pointer hover:shadow-md transition-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            onClick={handleEmergencyCall}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <FaPaw className="text-red-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-black text-sm">Need Emergency Care?</p>
                <p className="text-gray-600 text-xs">Call us 24/7 at +880 1873333 199</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
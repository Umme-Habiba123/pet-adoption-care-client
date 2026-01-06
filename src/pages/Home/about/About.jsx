import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaCalendarAlt, FaPaw, FaArrowRight, FaMedkit, FaHome } from 'react-icons/fa';

const About = () => {
  const [showAboutDetails, setShowAboutDetails] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Backup image URLs
  const backupImages = [
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596273315327-5f0596b5c7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ];

  // Handle image error
  const handleImageError = (e) => {
    const currentSrc = e.target.src;
    const backupImage = backupImages.find(img => img !== currentSrc) || backupImages[0];
    e.target.src = backupImage;
  };

  // Handle Learn More About Us click
  const handleLearnMoreAboutUs = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("Navigating to: /about");
    alert(`Learn More About Us clicked!\n\nThis will navigate to: /about\n\nSystem is ready for your implementation.`);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-red-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-red-100/40 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-red-50/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Section - FIXED IMAGE BADGE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Image */}
            <motion.div 
              className="relative mb-8"
              variants={imageVariants}
            >
              <div className="relative rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Happy rescued pets playing together"
                  className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Image Badge - FIXED POSITION */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div 
                    className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2.5 rounded-xl shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-white text-sm" />
                      <span className="font-bold text-xs sm:text-sm">Since 2015</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { 
                  value: "250+", 
                  label: "Pets Rescued", 
                  icon: <FaPaw className="text-red-500" />,
                  color: "from-red-50 to-red-100",
                  detailUrl: "/stats/rescued"
                },
                { 
                  value: "8+", 
                  label: "Years Experience", 
                  icon: <FaCalendarAlt className="text-red-500" />,
                  color: "from-red-50 to-amber-100",
                  detailUrl: "/about/experience"
                },
                { 
                  value: "120+", 
                  label: "Volunteers", 
                  icon: <FaUsers className="text-red-500" />,
                  color: "from-red-50 to-red-100",
                  detailUrl: "/team/volunteers"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`bg-gradient-to-br ${stat.color} p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 cursor-pointer`}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Stat clicked: ${stat.label}`);
                    alert(`Stat: ${stat.label}\nValue: ${stat.value}\n\nThis would navigate to: ${stat.detailUrl}`);
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold text-black mb-1"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Title */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
                <FaHeart className="text-red-600" />
                <span className="font-semibold text-sm">WHO WE ARE</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-3xl font-black text-black leading-tight mb-4"
              variants={itemVariants}
            >
              <span className="">Together, We Build</span>
              <span className="relative"> <span className="text-red-600">A Kinder World</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "200px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
              <span className="block">For Every Pet</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              variants={itemVariants}
            >
              We are dedicated to rescuing, protecting, and providing compassionate 
              care for animals in need. Our mission is to create a safer, healthier, 
              and happier world for every pet through love, expertise, and community 
              support.
            </motion.p>

            {/* Progress Bars */}
            <div className="space-y-6 mb-8">
           
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaHome className="text-red-500" />
                    <span className="font-semibold text-gray-800">Shelter Capacity</span>
                  </div>
                  <span className="text-red-600 font-bold">70%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>

              {/* Medical Care */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaMedkit className="text-red-500" />
                    <span className="font-semibold text-gray-800">Medical Care Provided</span>
                  </div>
                  <span className="text-red-600 font-bold">85%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>

              {/* Adoption Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    <span className="font-semibold text-gray-800">Successful Adoptions</span>
                  </div>
                  <span className="text-red-600 font-bold">92%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleLearnMoreAboutUs}
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Learn More About Us</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Additional Info */}
            <motion.div 
              className="mt-8 p-5 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Our Promise</h4>
                  <p className="text-gray-600 text-sm">
                    Every animal receives personalized care, medical attention, and 
                    the love they deserve until they find their forever home.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
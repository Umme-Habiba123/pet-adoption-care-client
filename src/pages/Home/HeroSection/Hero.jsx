import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, FaHeart, FaStar, FaPaw, FaTimes, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Video player টগল করার ফাংশন
  const toggleVideo = () => {
    if (!showVideo) {
      setIsVideoLoading(true);
      setHasVideoError(false);
      setShowVideo(true);
      
      // Video load করার চেষ্টা করি
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }, 100);
    } else {
      setShowVideo(false);
      setIsVideoLoading(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  // Video loaded হলে
  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  // Video error হলে
  const handleVideoError = () => {
    setIsVideoLoading(false);
    setHasVideoError(true);
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12 lg:py-16">
      {/* Background Elements with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50/40 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT CONTENT - Text Section with Animation */}
          <motion.div 
            className="space-y-6 lg:space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge with Animation */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <FaHeart className="text-white text-xs" />
              </div>
              <span className="font-semibold text-xs tracking-wide">PREMIUM PET CARE</span>
            </motion.div>

            {/* Main Heading with Stagger Animation */}
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-black text-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Expert Care
                </motion.span>
                <motion.span 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-red-600">For Your Beloved</span>
                  <motion.span 
                    className="absolute -bottom-1.5 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: '160px' } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Animal Friends
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Professional veterinary services, grooming, and boarding with compassion 
                and expertise. Your pet's health and happiness is our mission.
              </motion.p>
            </div>

            {/* CTA Buttons with Animation */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <motion.button 
                className="group relative bg-black hover:bg-gray-900 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center cursor-pointer gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="relative z-10">Book Appointment</span>
                <FaChevronRight className="relative  z-10 text-xs group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              {/* Video Play Button with Animation */}
              <motion.button 
                onClick={toggleVideo}
                className="group flex cursor-pointer items-center gap-3 text-gray-800 hover:text-red-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full border border-red-500 group-hover:border-red-600 group-hover:bg-red-50 transition-all duration-300 flex items-center justify-center">
                    <FaPlay className="text-red-600 text-sm group-hover:scale-110 transition-transform" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <span className="font-bold block text-sm">Watch Story</span>
                  <span className="text-xs text-gray-500">3 min video</span>
                </div>
              </motion.button>
            </div>

            {/* Stats Grid with Animation */}
            <motion.div 
              className="grid grid-cols-3 gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { number: "10+", label: "Years", icon: <FaStar className="text-red-500 text-sm" /> },
                { number: "1,250+", label: "Happy Pets", icon: <FaHeart className="text-red-500 text-sm" /> },
                { number: "99.8%", label: "Rating", icon: <FaPaw className="text-red-500 text-sm" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow transition-all duration-300 border border-gray-100 hover:border-red-200"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-black">{stat.number}</h3>
                  </div>
                  <p className="text-gray-600 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info with Animation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg border border-red-50 shadow-sm hover:shadow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaMapMarkerAlt className="text-red-600 text-base" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">Our Location</h4>
                    <p className="text-gray-600 text-xs">
                      Khilgaon, Dhaka-1219, Bangladesh
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-black to-gray-900 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaPhoneAlt className="text-white text-base" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Emergency</h4>
                    <p className="text-base font-bold">+971 4 123 4567</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION - Image with Animation */}
          <motion.div 
            className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 lg:left-4 xl:left-8">
              <motion.div 
                className="relative h-full w-full rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Image with Animation */}
                <motion.img
                  src="https://images.unsplash.com/photo-1596273315327-5f0596b5c7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Veterinarian examining a happy dog"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                
                {/* Floating Card with Animation */}
                <motion.div 
                  className="absolute top-4 left-4 sm:top-6 sm:left-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <FaPaw className="text-red-600 text-xs" />
                      </motion.div>
                      <div>
                        <p className="font-bold text-black text-xs">Certified</p>
                        <p className="text-gray-600 text-[10px]">Veterinary Team</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Emergency Badge with Animation */}
                <motion.div 
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg px-3 py-1.5 shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-1.5">
                    <FaPhoneAlt className="text-white text-xs" />
                    <span className="font-bold text-xs">24/7 Emergency</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Element with Animation */}
            <motion.div 
              className="absolute -bottom-18 -right-2 w-24 h-24 border-2 border-red-200/50 rounded-2xl -z-10"
              initial={{ opacity: 0, rotate: 0 }}
              animate={isVisible ? { opacity: 1, rotate: 12 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              animate={{ rotate: [12, 24, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Review Card with Animation */}
            <motion.div 
              className="absolute -bottom-10 -right-2 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] sm:max-w-[220px] border border-red-100"
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              animate={isVisible ? { opacity: 1, y: 0, rotate: 15 } : {}}
              transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 100 }}
              whileHover={{ 
                rotate: 0,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHeart className="text-red-600 text-sm" />
                </motion.div>
                <div>
                  <p className="font-bold text-black text-sm">Sarah Johnson</p>
                  <p className="text-gray-500 text-xs">Dog Owner</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs italic mb-2 leading-tight">
                "Exceptional care! My dog loves visiting here. Highly recommended!"
              </p>
              <motion.div 
                className="flex text-yellow-400 text-xs gap-0.5"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                {"★".repeat(5)}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Overlay with Animation */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={toggleVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button with Animation */}
            <motion.button 
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-60"
              onClick={toggleVideo}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-2xl sm:text-3xl" />
            </motion.button>

            {/* Video Container with Animation */}
            <motion.div 
              className="relative w-full max-w-4xl  bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {/* Loading State with Animation */}
              {isVideoLoading && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner className="text-red-500 text-4xl mb-4" />
                  </motion.div>
                  <p className="text-white text-lg font-medium">Loading video...</p>
                  <p className="text-gray-400 text-sm mt-2">Please wait a moment</p>
                </motion.div>
              )}

              {/* Error State with Animation */}
              {hasVideoError && (
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaTimes className="text-red-500 text-4xl mb-4" />
                  </motion.div>
                  <p className="text-white text-lg font-medium mb-2">Video Loading Failed</p>
                  <p className="text-gray-400 text-sm mb-4">The video could not be loaded</p>
                  <motion.button 
                    onClick={toggleVideo}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}

              {/* Video Player */}
              <div className="relative">
                <video 
                  ref={videoRef}
                  className="w-full h-auto"
                  controls
                  autoPlay
                  onLoadedData={handleVideoLoaded}
                  onError={handleVideoError}
                  preload="metadata"
                >
                  <source src="/src/video/petvideo.mp4" type="video/mp4" />
                  <source src="/video/petvideo.mp4" type="video/mp4" />
                  <source src="./video/petvideo.mp4" type="video/mp4" />
                  আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                </video>
              </div>

              {/* Video Info with Animation */}
              {!isVideoLoading && !hasVideoError && (
                <motion.div 
                  className="p-6 bg-gradient-to-r from-black to-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    Our Pet Care Journey
                  </h3>
                  <p className="text-gray-300">
                    Watch how we provide exceptional care for pets with love, expertise, and state-of-the-art facilities.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
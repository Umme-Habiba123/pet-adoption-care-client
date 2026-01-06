import { useState, useRef } from 'react';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight, FaHeart, FaStar, FaPaw, FaTimes, FaSpinner } from "react-icons/fa";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);

  // Video player ------
  const toggleVideo = () => {
    if (!showVideo) {
      setIsVideoLoading(true);
      setHasVideoError(false);
      setShowVideo(true);
      
      // Video load------
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
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50/40 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT CONTENT - Text Section */}
          <div className="space-y-6 lg:space-y-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <FaHeart className="text-white text-xs" />
              </div>
              <span className="font-semibold text-xs tracking-wide">PREMIUM PET CARE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-black text-black leading-tight">
                <span className="block">Expert Care</span>
                <span className="relative">
                  <span className="text-red-600">For Your Beloved</span>
                  <span className="absolute -bottom-1.5 left-0 w-40 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></span>
                </span>
                <span className="block">Animal Friends</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Professional veterinary services, grooming, and boarding with compassion 
                and expertise. Your pet's health and happiness is our mission.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="group relative bg-black hover:bg-gray-900 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">Book Appointment</span>
                <FaChevronRight className="relative z-10 text-xs group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Video Play Button */}
              <button 
                onClick={toggleVideo}
                className="group flex items-center gap-3 text-gray-800 hover:text-red-600 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-red-500 group-hover:border-red-600 group-hover:bg-red-50 transition-all duration-300 flex items-center justify-center">
                    <FaPlay className="text-red-600 text-sm group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="font-bold block text-sm">Watch Story</span>
                  <span className="text-xs text-gray-500">3 min video</span>
                </div>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { number: "10+", label: "Years", icon: <FaStar className="text-red-500 text-sm" /> },
                { number: "1,250+", label: "Happy Pets", icon: <FaHeart className="text-red-500 text-sm" /> },
                { number: "99.8%", label: "Rating", icon: <FaPaw className="text-red-500 text-sm" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    {stat.icon}
                    <h3 className="text-xl font-bold text-black">{stat.number}</h3>
                  </div>
                  <p className="text-gray-600 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-red-50 shadow-sm hover:shadow transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-red-600 text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">Our Location</h4>
                    <p className="text-gray-600 text-xs">
                      Properties Logistic Park, Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-black to-gray-900 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-white text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Emergency</h4>
                    <p className="text-base font-bold">+971 4 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Image */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] mt-6 lg:mt-0">
            <div className="absolute inset-0 lg:left-4 xl:left-8">
              <div className="relative h-full w-full rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] overflow-hidden shadow-xl">
                {/* Main Image */}
                <img
                  src="https://images.unsplash.com/photo-1596273315327-5f0596b5c7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Veterinarian examining a happy dog"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute  inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <FaPaw className="text-red-600 text-xs" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-xs">Certified</p>
                        <p className="text-gray-600 text-[10px]">Veterinary Team</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg px-3 py-1.5 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <FaPhoneAlt className="text-white text-xs" />
                    <span className="font-bold text-xs">24/7 Emergency</span>
                  </div>
                </div>          
                
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-18 -right-2 w-24 h-24 border-2 border-red-200/50 rounded-2xl -z-10 rotate-12"></div>

            {/* Review Card - এখন image-এর নিচে ডান পাশে */}
            <div className="absolute -bottom-10 -right-2 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] sm:max-w-[220px] rotate-15 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <FaHeart className="text-red-600 text-sm" />
                </div>
                <div>
                  <p className="font-bold text-black text-sm">Sarah Johnson</p>
                  <p className="text-gray-500 text-xs">Dog Owner</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs italic mb-2 leading-tight">
                "Exceptional care! My dog loves visiting here. Highly recommended!"
              </p>
              <div className="flex text-yellow-400 text-xs gap-0.5">
                {"★".repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={toggleVideo}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-60"
              onClick={toggleVideo}
            >
              <FaTimes className="text-2xl sm:text-3xl" />
            </button>

            {/* Video Container */}
            <div 
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading State */}
              {isVideoLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 z-10">
                  <FaSpinner className="text-red-500 text-4xl animate-spin mb-4" />
                  <p className="text-white text-lg font-medium">Loading video...</p>
                  <p className="text-gray-400 text-sm mt-2">Please wait a moment</p>
                </div>
              )}

              {/* Error State */}
              {hasVideoError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 z-10">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaTimes />
                  </div>
                  <p className="text-white text-lg font-medium mb-2">Video Loading Failed</p>
                  <p className="text-gray-400 text-sm mb-4">The video could not be loaded</p>
                  <button 
                    onClick={toggleVideo}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
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

              {/* Video Info */}
              {!isVideoLoading && !hasVideoError && (
                <div className="p-6 bg-gradient-to-r from-black to-gray-900">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Our Pet Care Journey
                  </h3>
                  <p className="text-gray-300">
                    Watch how we provide exceptional care for pets with love, expertise, and state-of-the-art facilities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
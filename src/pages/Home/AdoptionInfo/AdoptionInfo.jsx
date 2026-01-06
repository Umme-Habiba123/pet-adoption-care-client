import { motion } from 'framer-motion';
import { FaPaw, FaFileAlt, FaHandshake, FaHome, FaArrowRight, FaHeart, FaCheckCircle, FaUserFriends } from 'react-icons/fa';

const AdoptionInfo = () => {
  const steps = [
    {
      step: "01",
      title: "Choose A Pet",
      description: "Browse our available pets and find your perfect furry companion.",
      icon: <FaPaw className="text-white text-lg" />,
      color: "from-red-500 to-red-600",
      gradient: "from-red-50 to-red-100",
      time: "1-2 days",
      features: ["Browse online gallery", "Visit our shelter", "Meet multiple pets"]
    },
    {
      step: "02",
      title: "Submit Application",
      description: "Complete our adoption form and provide necessary documentation.",
      icon: <FaFileAlt className="text-white text-lg" />,
      color: "from-black to-gray-800",
      gradient: "from-gray-50 to-gray-100",
      time: "2-3 days",
      features: ["Online application", "Reference checks", "Home assessment"]
    },
    {
      step: "03",
      title: "Meet & Greet",
      description: "Meet your chosen pet and interact with our adoption counselors.",
      icon: <FaHandshake className="text-white text-lg" />,
      color: "from-red-600 to-red-700",
      gradient: "from-red-100 to-red-50",
      time: "1 day",
      features: ["Pet interaction", "Family meeting", "Behavior assessment"]
    },
    {
      step: "04",
      title: "Bring Home",
      description: "Complete paperwork and bring your new family member home.",
      icon: <FaHome className="text-white text-lg" />,
      color: "from-red-400 to-red-500",
      gradient: "from-amber-50 to-red-50",
      time: "1 day",
      features: ["Final paperwork", "Pet supplies", "Follow-up support"]
    },
  ];

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

  // Handle Learn More click
  const handleLearnMore = (e) => {
    e.preventDefault();
    console.log("Navigating to: /adoption-process");
    alert(`Learn More clicked!\n\nThis will navigate to: /adoption-process\n\nSystem is ready for your implementation.`);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-red-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-100/20 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-red-50/10 to-transparent rounded-full blur-3xl"
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
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="mb-8 lg:mb-0 lg:max-w-xl">
            <motion.div variants={titleVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
                <FaHeart className="text-red-600" />
                <span className="font-semibold text-sm">ADOPTION PROCESS</span>
              </div>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-4"
              variants={titleVariants}
            >
              <span className="block">Simple Steps To</span>
              <span className="relative">
                <span className="text-red-600">Your New Best</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "220px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
              <span className="block">Friend</span>
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              variants={titleVariants}
            >
              Our streamlined adoption process ensures a smooth journey from meeting 
              your potential pet to bringing them home with love and care.
            </motion.p>
          </div>

          <motion.button
            onClick={handleLearnMore}
            variants={titleVariants}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden w-full lg:w-auto justify-center"
          >
            <span className="relative z-10">Detailed Guide</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Step Card */}
              <div className={`relative bg-white rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border ${
                index === 0 
                  ? 'border-2 border-dashed border-red-400' 
                  : 'border-red-100'
              }`}>
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4">
                  <div className={`relative bg-gradient-to-br ${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}>
                    <div className="text-2xl font-bold">{step.step}</div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <motion.h3 
                    className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Time Badge */}
                  <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${step.gradient} text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                    <FaCheckCircle className="text-red-500 text-xs" />
                    <span>Time: {step.time}</span>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <motion.div 
                      className="w-8 h-0.5 bg-gradient-to-r from-red-300 to-red-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: '32px' }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    <motion.div 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-r-2 border-t-2 border-red-400 rotate-45"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-2 -right-2 w-6 h-6">
                <motion.div 
                  className={`w-full h-full border-t-2 border-r-2 ${
                    index === 0 ? 'border-red-400' : 'border-red-300'
                  } rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-6 h-6">
                <motion.div 
                  className={`w-full h-full border-b-2 border-l-2 ${
                    index === 0 ? 'border-red-400' : 'border-red-300'
                  } rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 md:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col lg:flex-row items-center justify-center gap-8 bg-gradient-to-r from-red-50 to-white rounded-3xl p-6 lg:p-8 border border-red-100 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <FaUserFriends className="text-white text-xl" />
              </div>
              <div className="text-left">
                <p className="font-bold text-black text-lg">Need Help?</p>
                <p className="text-gray-600 text-sm">Our adoption counselors are here to guide you</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                FAQ
              </motion.button>
            </div>
          </div>
          
          {/* Process Note */}
          <motion.p 
            className="mt-8 text-gray-600 max-w-2xl mx-auto text-sm lg:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold text-red-600">Note:</span> The adoption process typically takes 5-7 days, 
            but may vary based on individual circumstances. We're committed to finding the perfect match for both pets and families.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdoptionInfo;
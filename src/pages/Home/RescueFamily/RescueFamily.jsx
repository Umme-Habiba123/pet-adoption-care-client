import { FaHeart, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const RescueFamily = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      console.log('Subscribed with email:', email);
      setEmail('');
      
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r max-w-7xl mx-auto from-white to-gray-50 border-2 border-red-100 shadow-lg rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2 text-gray-900">
            <FaHeart className="text-red-500" size={20} />
            Join Our Rescue Family
          </h3>
          <p className="text-gray-600 text-sm">
            Get heartwarming rescue stories, pet care tips, and adoption updates
          </p>
        </div>
        
        {subscribed ? (
          <div className="bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <p className="text-green-700 font-medium text-sm">
              Thank you for joining! 🎉
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required
              className="px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 flex-1 min-w-0"
            />
            <button 
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <FaEnvelope className="inline mr-2" size={14} />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RescueFamily;
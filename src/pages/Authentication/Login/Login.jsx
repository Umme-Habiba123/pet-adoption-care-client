import { useState } from 'react';
import { FaPaw, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Brand & Info */}
          <div className="hidden md:flex flex-col justify-center">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaPaw size={28} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">PerRescue</h1>
                  <p className="text-red-100">Saving Lives, One Paw at a Time</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2">Welcome Back!</h3>
                  <p className="text-red-100">
                    Access your rescue dashboard, manage adoptions, and continue your journey with us.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <span>Manage your adoption applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <span>Track your rescued pets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <span>Connect with our rescue community</span>
                  </div>
                </div>

                <div className="bg-black/20 rounded-2xl p-4 text-center">
                  <p className="text-sm">Not a member yet?</p>
                  <Link to="/register" className="inline-block mt-2 bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-full font-bold transition-colors">
                    Join Our Family
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <FaPaw className="text-red-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 mt-2">Sign in to your PerRescue account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <FaEnvelope className="text-gray-400" size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-red-600 hover:text-red-700 font-medium">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <FaLock className="text-gray-400" size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-red-200"
              >
                Sign In
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <FaGoogle className="text-red-600" />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  onClick={handleFacebookLogin}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <FaFacebookF className="text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <FaTwitter className="text-blue-400" />
                  <span className="text-sm font-medium">Twitter</span>
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-red-600 hover:text-red-700 font-bold">
                  Sign up now
                </Link>
              </p>
            </div>

            {/* Mobile Branding */}
            <div className="md:hidden mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <FaPaw className="text-red-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">PerRescue</h3>
                  <p className="text-sm text-gray-600">Saving Lives, One Paw at a Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
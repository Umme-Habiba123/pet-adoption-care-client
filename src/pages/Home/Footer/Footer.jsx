import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, PawPrint, Shield, Users, Calendar } from 'lucide-react';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 mt-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <PawPrint size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-red-600">Per</span>Rescue
                </h2>
                <p className="text-sm text-gray-400">Saving Lives, One Paw at a Time</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              We're not just finding homes for pets; we're building families. 
              Every adoption is a promise of forever love and care.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/mahiya.rahman.540132" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/mahiya_mimu/" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/mahiya_rehman" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mahiya-rehman/" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <CiLinkedin  size={20}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-red-500">Quick</span> Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Adopt a Pet", emoji: "🐕" },
                { name: "Available Pets", emoji: "🐈" },
                { name: "Adoption Process", emoji: "📋" },
                { name: "Foster Program", emoji: "🏠" },
                { name: "Volunteer", emoji: "🤝" },
                { name: "Success Stories", emoji: "✨" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white flex items-center gap-3 transition-colors group"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.emoji}</span>
                    <span className="group-hover:translate-x-2 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rescue Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-red-500">Rescue</span> Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Emergency Rescue", icon: <Shield size={16} /> },
                { name: "Veterinary Care", icon: "💊" },
                { name: "Pet Training", icon: "🎓" },
                { name: "Behavior Counseling", icon: "🧠" },
                { name: "Spay/Neuter Clinic", icon: "🏥" },
                { name: "Pet Food Bank", icon: "🍖" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white flex items-center gap-3 transition-colors group"
                  >
                    <span className="group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-2 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <span className="text-red-500">Contact</span> Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-400">123 Rescue Lane</p>
                  <p className="text-gray-400">Pet City, PC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-red-500 flex-shrink-0" size={18} />
                <a href="tel:1800-PERRESCUE" className="text-gray-400 hover:text-white transition-colors">
                  1800-PERRESCUE
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-red-500 flex-shrink-0" size={18} />
                <a href="mailto:help@perrescue.com" className="text-gray-400 hover:text-white transition-colors">
                  help@perrescue.com
                </a>
              </div>

              {/* Rescue Hours */}
              <div className="pt- border-t border-gray-800">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={18} className="text-red-500" />
                  <h4 className="font-bold">Rescue Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Mon-Fri</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-500">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} PerRescue. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Made with ❤️ for every furry friend in need
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">
                24/7 Rescue Hotline Active
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Floating Button */}
        <a 
          href="tel:1800-PERRESCUE" 
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 z-50 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <Phone size={20} />
          <span className="hidden sm:inline font-bold">EMERGENCY</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
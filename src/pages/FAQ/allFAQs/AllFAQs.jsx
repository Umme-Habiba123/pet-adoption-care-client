import { useState } from "react";
import { ChevronDown, Home, Phone, Mail, Calendar } from "lucide-react";
import { useNavigate } from "react-router";

const AllFAQs = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const allFAQs = [
    {
      category: "Adoption Process",
      questions: [
        {
          q: "What is the adoption process at PerRescue?",
          a: "Our adoption process includes: 1) Browse available pets online, 2) Schedule a meet-and-greet, 3) Submit application, 4) Home visit verification, 5) Final adoption paperwork."
        },
        {
          q: "How long does the adoption process take?",
          a: "Typically 3-7 days. Emergency cases can be faster. We prioritize both speed and thorough screening."
        },
        {
          q: "What are the adoption requirements?",
          a: "Valid ID, proof of address, willingness for home check, and commitment to pet care. No breed restrictions for apartments."
        }
      ]
    },
    {
      category: "Health & Medical",
      questions: [
        {
          q: "Are all animals vaccinated?",
          a: "Yes! All pets receive complete vaccinations, deworming, spay/neuter surgery, and microchipping before adoption."
        },
        {
          q: "What if my adopted pet gets sick?",
          a: "Free 14-day post-adoption vet consultation included. We also offer discounted healthcare plans."
        },
        {
          q: "Do you provide medical records?",
          a: "Complete medical history and vaccination records provided at adoption."
        }
      ]
    },
    {
      category: "Fees & Donations",
      questions: [
        {
          q: "How much does adoption cost?",
          a: "Adoption fees range from ₹500 - ₹5000 depending on age, breed, and medical needs."
        },
        {
          q: "What does the adoption fee cover?",
          a: "Covers all veterinary expenses, food during stay, microchipping, and administrative costs."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer flexible payment options for qualified adopters."
        }
      ]
    },
    {
      category: "Post-Adoption Support",
      questions: [
        {
          q: "What support do you offer after adoption?",
          a: "24/7 helpline, free training sessions, behavioral counseling, and lifetime support."
        },
        {
          q: "Can I return the pet if it doesn't work out?",
          a: "30-day trial period with full return option. We always take our rescues back."
        },
        {
          q: "Do you offer pet training?",
          a: "Free basic obedience training included with every adoption."
        }
      ]
    }
  ];

  const toggleQuestion = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Home size={20} />
              Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-red-600">Per</span>Rescue FAQs
            </h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find detailed answers to all your questions about pet adoption, care, and our services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {allFAQs.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="bg-red-100 text-red-600 p-2 rounded-lg">
                  {catIndex === 0 && "🏠"}
                  {catIndex === 1 && "💊"}
                  {catIndex === 2 && "💰"}
                  {catIndex === 3 && "🛠️"}
                </span>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const isActive = activeIndex === `${catIndex}-${qIndex}`;
                  return (
                    <div key={qIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(catIndex, qIndex)}
                        className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-red-600 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-gray-300 mb-8">Our team is here to help you 24/7</p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-red-400" />
                <h4 className="font-bold">Call Us</h4>
              </div>
              <p className="text-gray-300">24/7 Helpline</p>
              <p className="text-xl font-bold mt-2">1800-PERRESCUE</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-red-400" />
                <h4 className="font-bold">Email</h4>
              </div>
              <p className="text-gray-300">Response within 2 hours</p>
              <p className="text-lg font-bold mt-2">help@perrescue.com</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-red-400" />
                <h4 className="font-bold">Schedule</h4>
              </div>
              <p className="text-gray-300">Virtual Consultation</p>
              <button className="mt-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-red-600 hover:text-red-700 font-bold flex items-center justify-center gap-2 mx-auto"
          >
            Back to Top ↑
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} PerRescue. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Committed to finding forever homes for every rescue.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllFAQs;
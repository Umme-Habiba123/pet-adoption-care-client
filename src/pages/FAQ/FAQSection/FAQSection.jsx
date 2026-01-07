import { Plus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the adoption process at PerRescue?",
      answer: "Our 5-step adoption process: Browse pets online → Schedule meet-and-greet → Application review → Home assessment → Adoption finalization with lifetime support."
    },
    {
      question: "Can I return the pet if it's not a good fit?",
      answer: "Yes! We offer a 30-day trial period. If things don't work out, we'll take the pet back and help find a better match."
    },
    {
      question: "Are all animals vaccinated and healthy?",
      answer: "Every animal receives complete vet care: vaccinations, deworming, spay/neuter surgery, microchipping, and full health screening."
    },
    {
      question: "What support services do you provide?",
      answer: "Post-adoption support including free vet check-up, behavior training, grooming discounts, and 24/7 helpline for your adopted pet."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      {/* TOP - TITLE & DESCRIPTION */}
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-red-600 font-semibold mb-2 text-sm sm:text-base uppercase tracking-wider">
          ❤️‍🩹 Frequently Asked Questions
        </p>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
          Your Questions, <span className="text-red-600">Our Answers</span>
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Everything you need to know about rescuing, adopting, and caring 
          for your new furry companion from PerRescue.
        </p>
      </div>

      {/* MAIN CONTENT - IMAGE BETWEEN LEFT & RIGHT */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* LEFT SIDE - BASIC INFO */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              Why Choose PerRescue?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 p-1 rounded">✓</span>
                <span className="text-sm text-gray-700">100% Health Guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 p-1 rounded">✓</span>
                <span className="text-sm text-gray-700">Lifetime Support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 p-1 rounded">✓</span>
                <span className="text-sm text-gray-700">30-Day Trial Period</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 p-1 rounded">✓</span>
                <span className="text-sm text-gray-700">Free Training Sessions</span>
              </li>
            </ul>
          </div>

          <div className="bg-black text-white rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">Emergency Rescue</h3>
            <p className="text-gray-300 text-sm mb-6">
              24/7 helpline for urgent pet rescue situations
            </p>
            <a 
              href="tel:1800-PERRESCUE"
              className="inline-block bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 text-sm font-bold transition-colors w-full text-center"
            >
              Call: 1800-PERRESCUE
            </a>
          </div>
        </div>

        {/* MIDDLE - IMAGE */}
        <div className="lg:w-1/3 relative">
          <div className="sticky top-24">
            <div className="border-2 border-dashed border-red-300 rounded-2xl p-3 hover:border-red-400 transition-all duration-300 group">
              <img
                src="/src/assets/adoption.jpg.jpg"
                alt="Happy adoption moment at PerRescue"
                className="rounded-xl w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full px-4 py-2 shadow-xl">
              <span className="font-bold text-sm">850+ Rescues</span>
            </div>
            
            {/* Bottom Tag */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg border">
              <span className="font-bold text-red-600 text-sm">❤️ Forever Home Promise</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FAQ LIST */}
        <div className="lg:w-1/3 space-y-4">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Common Questions
            </h3>
            <p className="text-gray-600 text-sm">
              Click on any question to see the detailed answer
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-red-50 transition-colors text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 ${index % 2 === 0 ? 'bg-red-100' : 'bg-gray-100'}`}>
                      <span className={`text-sm ${index % 2 === 0 ? 'text-red-600' : 'text-gray-600'}`}>
                        {index === 0 && "🏠"}
                        {index === 1 && "🔄"}
                        {index === 2 && "💉"}
                        {index === 3 && "🛠️"}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <Plus 
                    size={18}
                    className={`text-red-600 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">
              Didn't find your answer?
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Our team is ready to help you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:help@perrescue.com"
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-3 text-sm font-bold text-center transition-colors flex-1"
              >
                Email Us
              </a>
              <a 
                href="/contact"
                className="bg-black hover:bg-gray-900 text-white rounded-full px-5 py-3 text-sm font-bold text-center transition-colors flex-1"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
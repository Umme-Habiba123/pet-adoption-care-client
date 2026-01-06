import { Plus } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <p className="text-pink-500 font-semibold mb-2">🐾 FAQ</p>

          <h2 className="text-4xl font-bold leading-tight">
            Everything You <br />
            <span className="text-pink-500">Need To Know</span> <br />
            About Pawsly
          </h2>

          <p className="text-gray-500 mt-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button className="btn btn-primary mt-6 rounded-full px-8">
            Learn More →
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* IMAGE */}
          <div className="border-2 border-dashed border-pink-400 rounded-3xl p-2">
            <img
              src="/src/assets/adoption.jpg.jpg"
              alt="Pet Adoption"
              className="rounded-2xl w-72 object-cover"
            />
          </div>

          {/* FAQ LIST */}
          <div className="space-y-4 w-full">
            {[
              "What Is The Adoption Process At Pawsly?",
              "Can I Return The Animal If It Is Not Suitable?",
              "Have All Animals Been Vaccinated And Health Checked?",
              "What Pet Care Services Are Available At Pawsly?",
            ].map((q, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-base-200 px-5 py-4 rounded-full hover:bg-base-300 cursor-pointer transition"
              >
                <p className="text-sm font-medium">{q}</p>
                <Plus size={18} className="text-pink-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

"use client";

export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry leaders with 10+ years of experience",
    },
    {
      icon: "⚡",
      title: "Fast-Track Learning",
      description: "Complete courses in weeks instead of months",
    },
    {
      icon: "💼",
      title: "Job Guarantee",
      description: "Get placed in top companies within 6 months",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Network with 500K+ professionals worldwide",
    },
    {
      icon: "📜",
      title: "Certified Programs",
      description: "Industry-recognized certifications included",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Pay-as-you-learn model, no hidden costs",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Accredian</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive features designed for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-purple-300 hover:shadow-xl transition duration-300 group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>

              {/* Bottom Accent */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

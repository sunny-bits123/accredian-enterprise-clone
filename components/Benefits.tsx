"use client";

export default function Benefits() {
  const benefits = [
    {
      title: "Accelerated Growth",
      description: "40% faster skill development with personalized learning paths",
    },
    {
      title: "Better Outcomes",
      description: "95% of learners achieve their career goals within 6 months",
    },
    {
      title: "Cost Effective",
      description: "Save up to 60% on training costs compared to traditional methods",
    },
  ];

  const metrics = [
    { number: "10K+", label: "Companies Trust Us" },
    { number: "500K+", label: "Professionals Trained" },
    { number: "150+", label: "Countries Served" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Business <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real companies using Accredian
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl gradient-secondary text-white hover:shadow-2xl transition transform hover:scale-105"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {metric.number}
              </p>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

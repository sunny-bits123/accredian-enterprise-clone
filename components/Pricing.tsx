"use client";

import { useState } from "react";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Access to 50+ courses",
        "Certificate of completion",
        "Community support",
        "Mobile app access",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for professionals",
      features: [
        "Access to 1000+ courses",
        "Personalized learning path",
        "1-on-1 mentorship",
        "Priority support",
        "Job placement assistance",
        "Career coaching",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For organizations",
      features: [
        "Unlimited course access",
        "Dedicated account manager",
        "Custom training programs",
        "Analytics dashboard",
        "SSO integration",
        "Bulk user management",
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, all plans come with a 7-day free trial. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl transition transform ${
                plan.popular
                  ? "md:scale-105 border-2 border-purple-500 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50"
                  : "border border-gray-200 bg-white hover:shadow-lg"
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 text-center font-bold rounded-t-xl">
                  ⭐ Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                      : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-purple-600 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-left">{faq.question}</span>
                  <span
                    className={`text-2xl transition transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

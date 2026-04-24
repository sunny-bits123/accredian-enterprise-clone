'use client'

import { useState } from 'react'

const Pricing = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 users',
        '500+ courses',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Best for growing companies',
      features: [
        'Up to 500 users',
        '1000+ courses',
        'Advanced analytics',
        'Priority support',
        'Custom learning paths',
        'Team collaboration',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'All courses + custom content',
        'Custom analytics',
        '24/7 dedicated support',
        'Advanced integrations',
        'White-label options',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and purchase orders for enterprise customers.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no hidden fees. You only pay the monthly subscription price.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer 20% discount on annual subscriptions for all plans.',
    },
  ]

  return (
    <section id="pricing" className="section bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your organization's learning needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'gradient-primary scale-105 shadow-2xl shadow-primary/50'
                  : 'glass hover:bg-slate-700/40'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-accent rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-300 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400 ml-2">/{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-slate-100'
                    : 'border border-slate-500 hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 font-bold">✓</span>
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 cursor-pointer hover:bg-slate-700/40 transition-all"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">{faq.question}</h4>
                  <span className={`text-primary transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="text-slate-400 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

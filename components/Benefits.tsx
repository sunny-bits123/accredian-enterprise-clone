const Benefits = () => {
  const benefits = [
    { label: '10K+', value: 'Enterprise Clients' },
    { label: '500K+', value: 'Professionals Upskilled' },
    { label: '1000+', value: 'Expert Instructors' },
    { label: '50+', value: 'Industry Partnerships' },
  ]

  return (
    <section id="benefits" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Accredian?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Join thousands of companies that trust us with their learning and development.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {benefit.label}
              </div>
              <p className="text-slate-400 text-sm">{benefit.value}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">📈 Measurable ROI</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Increase employee productivity by up to 40%</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Reduce time-to-competency significantly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Improve employee retention rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Lower hiring and training costs</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">🎓 Learning Excellence</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Industry-expert instructors and content</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Personalized learning recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Hands-on projects and real-world case studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                <span>Continuous content updates and improvements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

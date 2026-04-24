const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Courses',
      description: 'Access thousands of expert-led courses across all skill levels and industries.',
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Customized learning paths tailored to individual goals and skill levels.',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track progress with detailed analytics and performance insights.',
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Foster teamwork with built-in collaboration and peer-learning features.',
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Earn recognized certifications upon course completion.',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Accelerate your career with skills that matter in today\'s market.',
    },
  ]

  return (
    <section id="features" className="section bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to build and scale an effective learning program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 hover:bg-slate-700/40 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent mt-4 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

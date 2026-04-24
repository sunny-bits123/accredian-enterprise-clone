const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
          <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ✨ Welcome to Accredian Enterprise
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Organization's
          <span className="block bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
            Learning Future
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Empower your team with cutting-edge courses, personalized learning paths, and measurable skill development.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">500K+</div>
            <div className="text-slate-400 text-sm mt-1">Active Learners</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-slate-400 text-sm mt-1">Expert Courses</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-slate-400 text-sm mt-1">Success Rate</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border border-slate-500 rounded-lg font-semibold hover:bg-slate-800 transition-all">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-50" />
        <div className="h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl opacity-50" />
      </div>
    </section>
  )
}

export default Hero

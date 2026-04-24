const CTA = () => {
  return (
    <section className="section bg-gradient-to-r from-primary/20 to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Organization's Learning?
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Join thousands of companies that are revolutionizing how their teams learn and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border border-slate-500 rounded-lg font-semibold hover:bg-slate-800 transition-all">
            Schedule a Demo
          </button>
        </div>

        <p className="text-slate-400 text-sm mt-8">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CTA

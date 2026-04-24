"use client";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
          Ready to Transform Your Career?
        </h2>

        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slideUp">
          Join thousands of professionals who have already taken the next step.
          Start your free 7-day trial today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slideUp">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
            Schedule Demo
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
          <div>
            <p className="text-3xl font-bold">500K+</p>
            <p className="text-sm text-white/80">Active Learners</p>
          </div>
          <div>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm text-white/80">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-white/80">Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

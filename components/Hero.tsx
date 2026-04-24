"use client";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span>Transform Your</span>{" "}
              <span className="gradient-text">Career Today</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join 500K+ professionals learning from industry experts. Get
              certified, get hired, get ahead.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 text-center">
              <div>
                <p className="text-3xl font-bold gradient-text">500K+</p>
                <p className="text-gray-600">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">1000+</p>
                <p className="text-gray-600">Courses Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">98%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block animate-slideIn">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-1 transform -rotate-3 hover:rotate-0 transition">
              <div className="bg-white rounded-2xl h-96 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

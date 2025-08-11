import React from 'react';
import { mockData } from '../mock';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-[#CA8A04] mb-4 tracking-wider">
              AKJ BUILDERS
            </h1>
            <div className="h-1 w-32 bg-[#CA8A04] mx-auto mb-8"></div>
          </div>

          {/* Hero Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#50535B] mb-8 leading-tight">
            {mockData.company.tagline}
          </h2>

          {/* Video Preview Placeholder */}
          <div className="mb-12 relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl border-4 border-[#CA8A04] overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <div className="text-white ml-1 text-3xl">▶</div>
                  </div>
                  <p className="text-[#50535B] font-medium">Watch Our Story</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#CA8A04] hover:bg-[#B8790A] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore Projects →
            </button>
            <button className="border-2 border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
              Consult Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Simple Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Featured Projects</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' ? 'bg-green-500 text-white' :
                      project.status === 'Under Construction' ? 'bg-[#CA8A04] text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="h-1 w-16 bg-[#CA8A04] mb-4"></div>
                  <h4 className="text-2xl font-bold text-[#50535B] mb-2">{project.title}</h4>
                  <p className="text-[#50535B] mb-2">📍 {project.location}</p>
                  <p className="text-[#50535B] mb-4">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-[#50535B]">
                    <span>{project.sqft} sqft</span>
                    <span className="text-[#CA8A04] font-semibold">{project.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#CA8A04] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">{mockData.stats.yearsInIndustry}+</div>
              <div className="text-xl font-semibold opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">{mockData.stats.sqftBuilt}+</div>
              <div className="text-xl font-semibold opacity-90">Sqft Built</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">{mockData.stats.awardsWon}+</div>
              <div className="text-xl font-semibold opacity-90">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">{mockData.stats.activeSites}</div>
              <div className="text-xl font-semibold opacity-90">Active Sites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold text-[#50535B] mb-6">Ready to Build Your Dream?</h3>
          <p className="text-xl text-[#50535B] mb-12">Contact us today to discuss your next construction project</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#CA8A04] hover:bg-[#B8790A] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              📞 Call Now: {mockData.company.phone}
            </button>
            <button className="border-2 border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
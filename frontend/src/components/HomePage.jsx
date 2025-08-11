import React, { useEffect, useState } from 'react';
import { mockData } from '../mock';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Diagonal Split Layout */}
      <section className="min-h-screen relative flex items-center">
        {/* Diagonal Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-gray-50 to-white transform skew-x-12 origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#CA8A04] opacity-10 transform -skew-y-12"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
            {/* Left Content - Slides in from left */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-1 bg-[#CA8A04]"></div>
                  <span className="text-[#CA8A04] font-bold tracking-widest">CONSTRUCTION EXCELLENCE</span>
                </div>
                <h1 className="text-7xl lg:text-8xl font-black text-[#50535B] leading-none">
                  AKJ
                  <span className="block text-[#CA8A04]">BUILDERS</span>
                </h1>
                <p className="text-2xl text-[#50535B] font-light leading-relaxed max-w-lg">
                  {mockData.company.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center">
                    EXPLORE PROJECTS
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                <button className="border-2 border-[#CA8A04] text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-all duration-300">
                  GET CONSULTATION
                </button>
              </div>
            </div>

            {/* Right Content - Video/Image Area - Slides in from right */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform group">
                        <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                      <p className="text-[#50535B] font-semibold">Watch Our Legacy</p>
                    </div>
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-3xl font-black text-[#CA8A04]">15+</div>
                  <div className="text-sm text-[#50535B] font-semibold">Years Experience</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-[#CA8A04] text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-black">2.5M+</div>
                  <div className="text-sm font-semibold opacity-90">Sqft Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-[#CA8A04] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#CA8A04] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Projects Section - Masonry Grid Layout */}
      <section className="py-32 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-1 origin-top-left"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header - Slides down from top */}
          <div className="text-center mb-20 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">FEATURED PROJECTS</span>
              <div className="w-12 h-1 bg-[#CA8A04]"></div>
            </div>
            <h2 className="text-6xl font-black text-[#50535B] mb-4">Our Masterpieces</h2>
            <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Transforming visions into architectural excellence</p>
          </div>

          {/* Asymmetric Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {mockData.projects.map((project, index) => (
              <div 
                key={project.id}
                className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} group cursor-pointer ${
                  index === 1 ? 'lg:mt-12' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                        project.status === 'Completed' ? 'bg-green-500 text-white' :
                        project.status === 'Under Construction' ? 'bg-[#CA8A04] text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{project.sqft} sqft</span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{project.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-1 bg-[#CA8A04]"></div>
                      <span className="text-[#CA8A04] text-sm font-bold tracking-wide">{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#50535B] mb-3">{project.title}</h3>
                    <p className="text-[#50535B] leading-relaxed mb-6">{project.description}</p>
                    
                    <button className="text-[#CA8A04] font-bold hover:text-[#B8790A] transition-colors flex items-center group">
                      VIEW DETAILS
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Horizontal Split Design */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#CA8A04]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B8790A] transform skew-x-12 origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Animated Numbers */}
            <div className="text-white animate-slide-in-left">
              <div className="space-y-2 mb-12">
                <div className="w-16 h-1 bg-white/50"></div>
                <h2 className="text-5xl font-black">Numbers That Matter</h2>
                <p className="text-xl opacity-90">Building trust through excellence</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="text-5xl font-black">{mockData.stats.yearsInIndustry}+</div>
                  <div className="text-lg opacity-90">Years of Excellence</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-black">{mockData.stats.sqftBuilt}+</div>
                  <div className="text-lg opacity-90">Million Sqft Built</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-black">{mockData.stats.awardsWon}+</div>
                  <div className="text-lg opacity-90">Industry Awards</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-black">{mockData.stats.activeSites}</div>
                  <div className="text-lg opacity-90">Active Projects</div>
                </div>
              </div>
            </div>

            {/* Right - Consulties Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="text-white mb-8">
                <h3 className="text-3xl font-black mb-2">Strategic Partners</h3>
                <p className="opacity-90">Collaborating with industry leaders</p>
              </div>
              
              {mockData.consulties.map((consulty) => (
                <div key={consulty.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={consulty.logo} 
                      alt={consulty.name}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-white/30"
                    />
                    <div className="flex-1 text-white">
                      <h4 className="text-xl font-bold mb-1">{consulty.name}</h4>
                      <p className="text-sm opacity-80 mb-3">Est. {consulty.established}</p>
                      <p className="text-sm opacity-90 leading-relaxed">{consulty.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Creative Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-slide-in-bottom">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">GALLERY</span>
              <div className="w-12 h-1 bg-[#CA8A04]"></div>
            </div>
            <h2 className="text-6xl font-black text-[#50535B] mb-4">Visual Excellence</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mockData.gallery.map((item, index) => (
              <div 
                key={item.id}
                className={`animate-slide-in-${['left', 'top', 'right', 'bottom'][index % 4]} relative group cursor-pointer overflow-hidden rounded-lg ${
                  index % 7 === 0 ? 'col-span-2 row-span-2' :
                  index % 3 === 0 ? 'col-span-1 row-span-2' :
                  'col-span-1 row-span-1'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Diagonal Layout */}
      <section className="py-32 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform skew-y-1 origin-top-left"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 animate-slide-in-top">
            <h2 className="text-6xl font-black text-[#50535B] mb-8">Client Stories</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-[#50535B]">{testimonial.name}</h4>
                    <p className="text-sm text-[#CA8A04] font-semibold">{testimonial.position}</p>
                    <p className="text-sm text-[#50535B]">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#CA8A04] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-[#50535B] italic leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Split Design */}
      <section className="py-32 bg-[#50535B] text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CA8A04] transform -skew-x-12 origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <div className="w-16 h-1 bg-[#CA8A04]"></div>
                <h2 className="text-6xl font-black">Ready to Build Your Vision?</h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  Transform your construction dreams into reality with AKJ Builders. 
                  Let's create something extraordinary together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <button className="bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-all duration-300 transform hover:scale-105">
                  📞 CALL: {mockData.company.phone}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 font-bold tracking-wide hover:bg-white hover:text-[#50535B] transition-all duration-300">
                  GET FREE QUOTE
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Project Inquiry</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-[#CA8A04]"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-[#CA8A04]"
                  />
                  <textarea 
                    placeholder="Project Details"
                    rows="4"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-[#CA8A04] resize-none"
                  ></textarea>
                  <button className="w-full bg-[#CA8A04] text-white py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-colors duration-300">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
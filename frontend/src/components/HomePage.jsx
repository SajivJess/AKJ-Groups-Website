import React from 'react';
import { mockData } from '../mock';
import { Play, ArrowRight, MapPin, Star, Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-[#CA8A04] mb-4 tracking-wider">
              AKJ BUILDERS
            </h1>
            <div className="h-1 w-32 bg-[#CA8A04] mx-auto mb-8 animate-pulse"></div>
          </div>

          {/* Hero Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#50535B] mb-8 leading-tight animate-slide-up">
            {mockData.company.tagline}
          </h2>

          {/* Video Preview */}
          <div className="mb-12 relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl border-4 border-[#CA8A04] overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                  <p className="text-[#50535B] font-medium">Watch Our Story</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[#CA8A04] hover:bg-[#B8790A] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="border-2 border-[#CA8A04] text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl">
              Consult Our Experts
            </Button>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#CA8A04] transform skew-y-1 origin-bottom-left"></div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Featured Projects</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project) => (
              <Card key={project.id} className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="h-1 w-16 bg-[#CA8A04] mb-4"></div>
                  <h4 className="text-2xl font-bold text-[#50535B] mb-2">{project.title}</h4>
                  <p className="text-[#50535B] flex items-center mb-2">
                    <MapPin size={16} className="mr-2 text-[#CA8A04]" />
                    {project.location}
                  </p>
                  <p className="text-[#50535B] mb-4">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-[#50535B]">
                    <span>{project.sqft} sqft</span>
                    <span className="text-[#CA8A04] font-semibold">{project.type}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#CA8A04] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-5xl font-black mb-2">{mockData.stats.yearsInIndustry}+</div>
              <div className="text-xl font-semibold opacity-90">Years Experience</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-black mb-2">{mockData.stats.sqftBuilt}+</div>
              <div className="text-xl font-semibold opacity-90">Sqft Built</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-black mb-2">{mockData.stats.awardsWon}+</div>
              <div className="text-xl font-semibold opacity-90">Awards Won</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl font-black mb-2">{mockData.stats.activeSites}</div>
              <div className="text-xl font-semibold opacity-90">Active Sites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Our Consulties</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {mockData.consulties.map((consulty) => (
              <Card key={consulty.id} className="p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={consulty.logo} 
                    alt={consulty.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="text-2xl font-bold text-[#50535B]">{consulty.name}</h4>
                    <p className="text-[#CA8A04] font-semibold">Est. {consulty.established}</p>
                  </div>
                </div>
                <p className="text-[#50535B] mb-6">{consulty.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h5 className="font-semibold text-[#50535B] mb-2">Partnered Projects:</h5>
                  <ul className="list-disc list-inside text-[#50535B]">
                    {consulty.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Project Gallery</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockData.gallery.slice(0, 8).map((item) => (
              <div key={item.id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CA8A04] hover:bg-[#B8790A] text-white px-8 py-3 text-lg font-semibold rounded-xl">
              View Full Gallery
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Client Testimonials</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="relative">
            <Card className="p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6">
                  <img 
                    src={mockData.testimonials[currentTestimonial].image}
                    alt={mockData.testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(mockData.testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-[#CA8A04] fill-current" size={24} />
                  ))}
                </div>

                <blockquote className="text-2xl text-[#50535B] italic mb-8 leading-relaxed">
                  "{mockData.testimonials[currentTestimonial].review}"
                </blockquote>

                <div>
                  <h4 className="text-xl font-bold text-[#CA8A04] mb-1">
                    {mockData.testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#50535B]">
                    {mockData.testimonials[currentTestimonial].position} at {mockData.testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {mockData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-[#CA8A04]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-[#50535B] mb-4">Latest Updates</h3>
            <div className="h-1 w-24 bg-[#CA8A04] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#50535B] mb-3">
                    <Calendar size={16} className="mr-2 text-[#CA8A04]" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#50535B] mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-[#50535B] mb-4">{post.excerpt}</p>
                  <p className="text-[#CA8A04] font-semibold">By {post.author}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#CA8A04] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-6">Ready to Build Your Dream?</h3>
          <p className="text-xl mb-12 opacity-90">Contact us today to discuss your next construction project</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-[#CA8A04] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
              <Phone className="mr-2" size={20} />
              Call Now: {mockData.company.phone}
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#CA8A04] px-8 py-4 text-lg font-semibold rounded-xl">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
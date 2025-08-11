import React, { useState } from 'react';
import { mockData } from '../mock';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, ThumbsUp, Building } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Reviews', count: mockData.testimonials.length },
    { id: 'residential', name: 'Residential', count: 2 },
    { id: 'commercial', name: 'Commercial', count: 1 }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % mockData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? mockData.testimonials.length - 1 : prev - 1);
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={20} 
          className={`${i < rating ? 'text-[#CA8A04] fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CA8A04] opacity-5 transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">CLIENT EXPERIENCES</span>
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
            </div>
            <h1 className="text-7xl font-black text-[#50535B] mb-6">What Clients Say</h1>
            <p className="text-2xl text-[#50535B] max-w-4xl mx-auto leading-relaxed">
              Discover why clients choose AKJ Builders for their most important construction projects
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left">
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">4.9/5</h3>
              <p className="text-[#50535B] font-semibold">Average Rating</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-slide-in-top" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">500+</h3>
              <p className="text-[#50535B] font-semibold">Happy Clients</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">98%</h3>
              <p className="text-[#50535B] font-semibold">Satisfaction Rate</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">15+</h3>
              <p className="text-[#50535B] font-semibold">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CA8A04] opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#CA8A04] opacity-5 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="text-center mb-8">
                  <StarRating rating={mockData.testimonials[currentTestimonial].rating} />
                  <div className="flex justify-center mb-6">
                  </div>
                  
                  <blockquote className="text-3xl text-[#50535B] italic leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{mockData.testimonials[currentTestimonial].review}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={mockData.testimonials[currentTestimonial].image}
                      alt={mockData.testimonials[currentTestimonial].name}
                      className="w-16 h-16 object-cover rounded-full border-4 border-[#CA8A04]"
                    />
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-[#50535B]">
                        {mockData.testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-[#CA8A04] font-semibold">
                        {mockData.testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-[#50535B] text-sm">
                        {mockData.testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white border-2 border-[#CA8A04] rounded-full flex items-center justify-center text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex space-x-2">
                    {mockData.testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-[#CA8A04]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white border-2 border-[#CA8A04] rounded-full flex items-center justify-center text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#50535B] mb-6">All Client Reviews</h2>
            <p className="text-xl text-[#50535B] max-w-3xl mx-auto">
              Read detailed feedback from our satisfied clients across various project types
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 flex space-x-2 shadow-lg">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-[#CA8A04] text-white shadow-lg'
                      : 'text-[#50535B] hover:bg-gray-100'
                  }`}
                >
                  {filter.name} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#50535B] text-lg">{testimonial.name}</h4>
                    <p className="text-[#CA8A04] font-semibold text-sm">{testimonial.position}</p>
                    <p className="text-[#50535B] text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Review */}
                <blockquote className="text-[#50535B] italic leading-relaxed mb-6">
                  "{testimonial.review}"
                </blockquote>
                
                {/* Project Type Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#CA8A04]/10 text-[#CA8A04] px-3 py-1 rounded-full text-xs font-bold">
                    VERIFIED REVIEW
                  </span>
                  <span className="text-[#50535B] text-sm font-semibold">
                    <Building size={16} className="inline mr-1" />
                    Residential Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#50535B] mb-6">Video Testimonials</h2>
            <p className="text-xl text-[#50535B] max-w-3xl mx-auto">
              Watch our clients share their experiences working with AKJ Builders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div 
                key={video}
                className={`animate-slide-in-${['left', 'top', 'right'][index]} relative group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                    
                    {/* Video Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-[#50535B]">
                      <h4 className="font-bold mb-1">Sarah Johnson</h4>
                      <p className="text-sm opacity-75">Skyline Residences Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#CA8A04] to-[#B8790A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-black/10 transform -skew-x-12 origin-top-left"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Experience the same level of excellence that our clients rave about. Start your construction journey with AKJ Builders today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-colors rounded-lg shadow-lg">
              📞 START YOUR PROJECT
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold tracking-wide hover:bg-white hover:text-[#CA8A04] transition-colors rounded-lg">
              💬 SHARE YOUR REVIEW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
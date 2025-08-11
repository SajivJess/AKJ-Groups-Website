import React, { useState } from 'react';
import { mockData } from '../mock';
import { MapPin, Calendar, Users, Square, Eye, ExternalLink, X, ChevronLeft, ChevronRight, Building, User, DollarSign, Award, Leaf } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ['All', 'Residential', 'Commercial'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? mockData.projects 
    : mockData.projects.filter(project => project.type === selectedFilter);

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-fade-in-scale">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
            <div>
              <h2 className="text-3xl font-black text-[#50535B]">{project.title}</h2>
              <p className="text-[#CA8A04] font-semibold flex items-center mt-1">
                <MapPin size={16} className="mr-1" />
                {project.location}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={24} className="text-[#50535B]" />
            </button>
          </div>

          <div className="p-6">
            {/* Image Carousel */}
            <div className="relative mb-8">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronLeft size={24} className="text-[#50535B]" />
                    </button>
                    
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronRight size={24} className="text-[#50535B]" />
                    </button>
                  </>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                  project.status === 'Completed' ? 'bg-green-500/90 text-white' :
                  project.status === 'Under Construction' ? 'bg-[#CA8A04]/90 text-white' :
                  'bg-blue-500/90 text-white'
                }`}>
                  {project.status}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-[#CA8A04]' : 'border-gray-300'
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Description & Amenities */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#50535B] mb-4">Project Overview</h3>
                  <p className="text-[#50535B] leading-relaxed text-lg mb-4">{project.longDescription || project.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#50535B] mb-4">Key Features & Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#CA8A04] rounded-full flex-shrink-0"></div>
                        <span className="text-[#50535B] font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Specifications */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#50535B] mb-4">Project Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Square className="w-5 h-5 text-[#CA8A04]" />
                        <span className="text-[#50535B] font-semibold">Total Area</span>
                      </div>
                      <span className="text-[#CA8A04] font-bold">{project.sqft} sqft</span>
                    </div>
                    
                    {project.units && (
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-[#CA8A04]" />
                          <span className="text-[#50535B] font-semibold">Total Units</span>
                        </div>
                        <span className="text-[#CA8A04] font-bold">{project.units} units</span>
                      </div>
                    )}

                    {project.floors && (
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Building className="w-5 h-5 text-[#CA8A04]" />
                          <span className="text-[#50535B] font-semibold">Floors</span>
                        </div>
                        <span className="text-[#CA8A04] font-bold">{project.floors} floors</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-[#CA8A04]" />
                        <span className="text-[#50535B] font-semibold">Location</span>
                      </div>
                      <span className="text-[#CA8A04] font-bold">{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                {project.specifications && (
                  <div>
                    <h4 className="text-xl font-bold text-[#50535B] mb-4">Project Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#50535B] flex items-center">
                          <User size={16} className="mr-2 text-[#CA8A04]" />
                          Architect
                        </span>
                        <span className="font-semibold text-[#50535B]">{project.specifications.architect}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50535B] flex items-center">
                          <Building size={16} className="mr-2 text-[#CA8A04]" />
                          Contractor
                        </span>
                        <span className="font-semibold text-[#50535B]">{project.specifications.contractor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50535B] flex items-center">
                          <DollarSign size={16} className="mr-2 text-[#CA8A04]" />
                          Investment
                        </span>
                        <span className="font-semibold text-[#50535B]">{project.specifications.investment}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50535B] flex items-center">
                          <Leaf size={16} className="mr-2 text-[#CA8A04]" />
                          Sustainability
                        </span>
                        <span className="font-semibold text-[#50535B]">{project.specifications.sustainability}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50535B] flex items-center">
                          <Calendar size={16} className="mr-2 text-[#CA8A04]" />
                          Timeline
                        </span>
                        <span className="font-semibold text-[#50535B]">
                          {project.specifications.startDate} - {project.specifications.completionDate || project.specifications.expectedCompletion}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button className="flex-1 bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-colors rounded-xl flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                REQUEST BROCHURE
              </button>
              <button className="flex-1 border-2 border-[#CA8A04] text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-colors rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                SCHEDULE SITE VISIT
              </button>
              <button className="flex-1 bg-green-500 text-white px-8 py-4 font-bold tracking-wide hover:bg-green-600 transition-colors rounded-xl flex items-center justify-center">
                💬 INQUIRE ON WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CA8A04] opacity-5 transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">OUR PORTFOLIO</span>
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
            </div>
            <h1 className="text-7xl font-black text-[#50535B] mb-6">Project Showcase</h1>
            <p className="text-2xl text-[#50535B] max-w-3xl mx-auto leading-relaxed">
              Discover our collection of architectural masterpieces that define modern construction excellence
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-16 animate-slide-in-bottom">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-[#CA8A04] text-white shadow-lg transform scale-105'
                      : 'text-[#50535B] hover:bg-white hover:shadow-md'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                            {project.sqft} sqft
                          </span>
                          <div className="flex space-x-2">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                              <Eye size={18} />
                            </div>
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                              <ExternalLink size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                        project.status === 'Completed' ? 'bg-green-500/90 text-white' :
                        project.status === 'Under Construction' ? 'bg-[#CA8A04]/90 text-white' :
                        'bg-blue-500/90 text-white'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-1 bg-[#CA8A04]"></div>
                      <span className="text-[#CA8A04] font-bold tracking-wide">{project.location}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-[#50535B] mb-4">{project.title}</h3>
                    <p className="text-[#50535B] leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-[#50535B]">
                        <span className="flex items-center space-x-1">
                          <Square size={16} className="text-[#CA8A04]" />
                          <span>{project.sqft} sqft</span>
                        </span>
                        {project.units && (
                          <span className="flex items-center space-x-1">
                            <Users size={16} className="text-[#CA8A04]" />
                            <span>{project.units} units</span>
                          </span>
                        )}
                      </div>
                      
                      <div className="text-[#CA8A04] font-bold text-lg">{project.type}</div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full bg-[#CA8A04] text-white py-4 px-6 font-bold tracking-wide hover:bg-[#B8790A] transition-all duration-300 rounded-xl flex items-center justify-center group"
                      >
                        VIEW FULL DETAILS
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#CA8A04] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#B8790A] transform -skew-x-12 origin-top-left"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 opacity-90">Let's discuss how we can bring your construction vision to life</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-colors rounded-lg shadow-lg">
              📞 CALL: +1 234 567 8900
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold tracking-wide hover:bg-white hover:text-[#CA8A04] transition-colors rounded-lg">
              REQUEST CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
      }} />
    </div>
  );
};

export default ProjectsPage;
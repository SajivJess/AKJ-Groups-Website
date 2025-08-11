import React, { useState } from 'react';
import { mockData } from '../mock';
import { Eye, Download, Share, Filter, Grid, List, X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects', count: mockData.gallery.length },
    { id: 'exterior', name: 'Exterior Views', count: mockData.gallery.filter(img => img.category === 'exterior').length },
    { id: 'interior', name: 'Interior Design', count: mockData.gallery.filter(img => img.category === 'interior').length },
    { id: 'construction', name: 'Construction', count: mockData.gallery.filter(img => img.category === 'construction').length },
    { id: 'amenities', name: 'Amenities', count: mockData.gallery.filter(img => img.category === 'amenities').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? mockData.gallery 
    : mockData.gallery.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const Lightbox = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent z-10 p-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-sm opacity-75">{currentImageIndex + 1} of {filteredImages.length}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <Share size={20} />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <Download size={20} />
              </button>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative max-w-7xl max-h-full px-4">
          <img 
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[80vh] object-contain"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {filteredImages.slice(Math.max(0, currentImageIndex - 2), currentImageIndex + 3).map((img, idx) => (
              <button
                key={img.id}
                onClick={() => {
                  const actualIndex = filteredImages.indexOf(img);
                  setCurrentImageIndex(actualIndex);
                  setSelectedImage(img);
                }}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                  img.id === selectedImage.id ? 'border-[#CA8A04]' : 'border-white/30'
                }`}
              >
                <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#CA8A04] opacity-5 transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">VISUAL SHOWCASE</span>
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
            </div>
            <h1 className="text-7xl font-black text-[#50535B] mb-6">Project Gallery</h1>
            <p className="text-2xl text-[#50535B] max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of architectural photography showcasing construction excellence
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#CA8A04] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-[#50535B] hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-[#50535B] font-semibold">View:</span>
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-[#CA8A04] text-white' : 'text-[#50535B] hover:bg-gray-200'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'masonry' ? 'bg-[#CA8A04] text-white' : 'text-[#50535B] hover:bg-gray-200'
                  }`}
                >
                  <Filter size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`animate-slide-in-${['left', 'top', 'right', 'bottom'][index % 4]} relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm capitalize">
                          {image.category}
                        </span>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Eye size={16} />
                          </div>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Download size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Masonry Grid */
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`break-inside-avoid mb-6 animate-slide-in-${['left', 'top', 'right', 'bottom'][index % 4]} relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className={`overflow-hidden ${
                    index % 7 === 0 ? 'aspect-[4/5]' :
                    index % 3 === 0 ? 'aspect-[3/4]' :
                    'aspect-square'
                  }`}>
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm capitalize">
                          {image.category}
                        </span>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Eye size={16} />
                          </div>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Download size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#CA8A04] to-[#B8790A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-black/10 transform -skew-x-12 origin-top-left"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-in-bottom">
              <h3 className="text-4xl font-black mb-2">{mockData.gallery.length}+</h3>
              <p className="font-semibold opacity-90">High-Quality Images</p>
            </div>
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-4xl font-black mb-2">50+</h3>
              <p className="font-semibold opacity-90">Project Showcases</p>
            </div>
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-black mb-2">4K</h3>
              <p className="font-semibold opacity-90">Ultra HD Quality</p>
            </div>
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-4xl font-black mb-2">24/7</h3>
              <p className="font-semibold opacity-90">Gallery Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-[#50535B] mb-6">Need Professional Photography?</h2>
          <p className="text-xl text-[#50535B] mb-12 max-w-3xl mx-auto">
            Let us document your project with the same level of excellence showcased in our gallery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-colors rounded-lg shadow-lg">
              📸 REQUEST PHOTOGRAPHY
            </button>
            <button className="border-2 border-[#CA8A04] text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-colors rounded-lg">
              💾 DOWNLOAD GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox />
    </div>
  );
};

export default GalleryPage;
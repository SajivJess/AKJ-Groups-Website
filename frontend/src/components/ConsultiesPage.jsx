import React, { useState } from 'react';
import { mockData } from '../mock';
import { Calendar, MapPin, Award, Users, Building, ExternalLink, Mail, Phone } from 'lucide-react';

const ConsultiesPage = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const PartnerModal = ({ partner, onClose }) => {
    if (!partner) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-scale">
          <div className="relative bg-gradient-to-r from-[#CA8A04] to-[#B8790A] p-8 text-white">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-6">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-24 h-24 object-cover rounded-xl border-4 border-white/30"
              />
              <div>
                <h2 className="text-4xl font-black mb-2">{partner.name}</h2>
                <p className="text-xl opacity-90 mb-2">Est. {partner.established}</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    Trusted Partner
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {partner.projects.length} Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <p className="text-lg text-[#50535B] leading-relaxed mb-8">{partner.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#50535B] mb-6">Partnership Projects</h3>
                <div className="space-y-4">
                  {partner.projects.map((project, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Building className="w-5 h-5 text-[#CA8A04]" />
                      <span className="text-[#50535B] font-semibold">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#50535B] mb-6">Expertise Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Award className="w-8 h-8 text-[#CA8A04] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-[#50535B]">Design Excellence</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-8 h-8 text-[#CA8A04] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-[#50535B]">Project Management</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Building className="w-8 h-8 text-[#CA8A04] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-[#50535B]">Construction</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-8 h-8 text-[#CA8A04] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-[#50535B]">Site Planning</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 flex space-x-4">
              <button className="bg-[#CA8A04] text-white px-6 py-3 font-bold tracking-wide hover:bg-[#B8790A] transition-colors rounded-lg flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                CONTACT PARTNER
              </button>
              <button className="border-2 border-[#CA8A04] text-[#CA8A04] px-6 py-3 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-colors rounded-lg flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                VIEW PORTFOLIO
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CA8A04]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#CA8A04] opacity-10 transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">STRATEGIC ALLIANCES</span>
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
            </div>
            <h1 className="text-7xl font-black text-[#50535B] mb-6">Our Partners</h1>
            <p className="text-2xl text-[#50535B] max-w-4xl mx-auto leading-relaxed">
              Collaborating with industry-leading consultants and specialists to deliver unparalleled construction excellence
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slide-in-left">
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">50+</h3>
              <p className="text-[#50535B] font-semibold">Trusted Partners</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">200+</h3>
              <p className="text-[#50535B] font-semibold">Joint Projects</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#50535B] mb-2">15+</h3>
              <p className="text-[#50535B] font-semibold">Years Partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {mockData.consulties.map((partner, index) => (
              <div 
                key={partner.id}
                className={`animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group`}
                onClick={() => setSelectedPartner(partner)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-20 h-20 object-cover rounded-xl border-2 border-gray-200 group-hover:border-[#CA8A04] transition-colors"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#CA8A04] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-[#50535B] mb-2">{partner.name}</h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="flex items-center text-sm text-[#CA8A04] font-semibold">
                          <Calendar className="w-4 h-4 mr-1" />
                          Est. {partner.established}
                        </span>
                        <span className="flex items-center text-sm text-[#50535B]">
                          <Building className="w-4 h-4 mr-1 text-[#CA8A04]" />
                          {partner.projects.length} Projects
                        </span>
                      </div>
                      <p className="text-[#50535B] leading-relaxed">{partner.description}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-[#50535B] mb-3">Recent Collaborations:</h4>
                    <div className="space-y-2">
                      {partner.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#CA8A04] rounded-full"></div>
                          <span className="text-sm text-[#50535B]">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="bg-[#CA8A04]/10 text-[#CA8A04] px-3 py-1 rounded-full text-xs font-bold">
                        TRUSTED PARTNER
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                        ACTIVE
                      </span>
                    </div>
                    
                    <button className="text-[#CA8A04] font-bold hover:text-[#B8790A] transition-colors flex items-center group">
                      LEARN MORE
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

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#CA8A04] to-[#B8790A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-black/10 transform -skew-x-12 origin-top-left"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Partnership Excellence</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our strategic partnerships ensure every project benefits from specialized expertise and innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <p className="opacity-90">Rigorous standards maintained through expert partner oversight</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Specialized Skills</h3>
              <p className="opacity-90">Access to niche expertise and cutting-edge technologies</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrated Solutions</h3>
              <p className="opacity-90">Seamless coordination across all project phases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-[#50535B] mb-6">Interested in Partnership?</h2>
          <p className="text-xl text-[#50535B] mb-12 max-w-3xl mx-auto">
            Join our network of trusted partners and be part of construction excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-colors rounded-lg shadow-lg">
              📋 PARTNERSHIP APPLICATION
            </button>
            <button className="border-2 border-[#CA8A04] text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-colors rounded-lg">
              📞 SCHEDULE MEETING
            </button>
          </div>
        </div>
      </section>

      {/* Partner Modal */}
      <PartnerModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
    </div>
  );
};

export default ConsultiesPage;
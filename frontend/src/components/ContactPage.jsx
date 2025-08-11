import React, { useState } from 'react';
import { mockData } from '../mock';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar, User, Building, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeContact, setActiveContact] = useState('form');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      id: 'form',
      name: 'Contact Form',
      icon: MessageSquare,
      description: 'Send us a detailed message'
    },
    {
      id: 'phone',
      name: 'Direct Call',
      icon: Phone,
      description: 'Speak with our team directly'
    },
    {
      id: 'visit',
      name: 'Office Visit',
      icon: MapPin,
      description: 'Visit our headquarters'
    },
    {
      id: 'schedule',
      name: 'Schedule Meeting',
      icon: Calendar,
      description: 'Book a consultation'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CA8A04] opacity-5 transform skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-in-top">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
              <span className="text-[#CA8A04] font-bold tracking-widest">GET IN TOUCH</span>
              <div className="w-16 h-1 bg-[#CA8A04]"></div>
            </div>
            <h1 className="text-7xl font-black text-[#50535B] mb-6">Contact Us</h1>
            <p className="text-2xl text-[#50535B] max-w-4xl mx-auto leading-relaxed">
              Ready to start your construction project? Let's discuss how we can bring your vision to life with excellence and precision.
            </p>
          </div>

          {/* Contact Method Selection */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setActiveContact(method.id)}
                  className={`animate-slide-in-${['left', 'top', 'bottom', 'right'][index]} p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                    activeContact === method.id
                      ? 'bg-[#CA8A04] text-white border-[#CA8A04] shadow-lg scale-105'
                      : 'bg-white text-[#50535B] border-gray-200 hover:border-[#CA8A04] hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    activeContact === method.id ? 'bg-white/20' : 'bg-[#CA8A04]'
                  }`}>
                    <IconComponent 
                      size={20} 
                      className={activeContact === method.id ? 'text-white' : 'text-white'}
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                  <p className={`text-sm ${
                    activeContact === method.id ? 'text-white/80' : 'text-[#50535B]/70'
                  }`}>
                    {method.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Dynamic Content Based on Selection */}
            <div className="animate-slide-in-left">
              {activeContact === 'form' && (
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-black text-[#50535B] mb-8">Project Inquiry Form</h2>
                  
                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-green-700 font-semibold">Thank you! We'll respond within 24 hours.</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                          placeholder="Enter your phone"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                        >
                          <option value="">Select project type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="renovation">Renovation</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-100k">Under $100k</option>
                          <option value="100k-500k">$100k - $500k</option>
                          <option value="500k-1m">$500k - $1M</option>
                          <option value="over-1m">Over $1M</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="planning">Still planning</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[#50535B] font-semibold mb-2">Project Details</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors resize-none"
                        placeholder="Tell us about your project requirements, location, and any specific needs..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-[#50535B] font-semibold mb-3">Preferred Contact Method</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#CA8A04] focus:ring-[#CA8A04] border-gray-300"
                          />
                          <span className="ml-2 text-[#50535B]">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#CA8A04] focus:ring-[#CA8A04] border-gray-300"
                          />
                          <span className="ml-2 text-[#50535B]">Phone Call</span>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#CA8A04] text-white py-4 px-8 rounded-xl font-bold text-lg tracking-wide hover:bg-[#B8790A] transition-colors flex items-center justify-center group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Project Inquiry
                    </button>
                  </form>
                </div>
              )}

              {activeContact === 'phone' && (
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-black text-[#50535B] mb-8">Direct Contact</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#50535B]">Main Office</h3>
                        <p className="text-2xl font-black text-[#CA8A04] mb-1">{mockData.company.phone}</p>
                        <p className="text-[#50535B]">Available Monday - Friday, 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#50535B]">WhatsApp Business</h3>
                        <p className="text-2xl font-black text-[#CA8A04] mb-1">+{mockData.company.whatsapp}</p>
                        <p className="text-[#50535B]">Quick responses 24/7</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#CA8A04]/10 border border-[#CA8A04]/20 rounded-xl p-6">
                      <h4 className="font-bold text-[#50535B] mb-3">What to expect when you call:</h4>
                      <ul className="space-y-2 text-[#50535B]">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#CA8A04] rounded-full mt-2 mr-3"></div>
                          Immediate connection with a construction expert
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#CA8A04] rounded-full mt-2 mr-3"></div>
                          Preliminary project assessment and consultation
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-[#CA8A04] rounded-full mt-2 mr-3"></div>
                          Scheduling of site visit or detailed discussion
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-[#CA8A04] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#B8790A] transition-colors">
                        📞 Call Now
                      </button>
                      <button className="flex-1 bg-green-500 text-white py-4 px-6 rounded-xl font-bold hover:bg-green-600 transition-colors">
                        💬 WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeContact === 'visit' && (
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-black text-[#50535B] mb-8">Visit Our Office</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#CA8A04] rounded-full flex items-center justify-center mt-1">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#50535B] mb-2">Headquarters</h3>
                        <p className="text-[#50535B] leading-relaxed">{mockData.company.address}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-[#50535B] mb-4">Office Hours</h4>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-[#50535B]">{schedule.day}</span>
                            <span className="text-[#CA8A04] font-semibold">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="text-center text-[#50535B]">
                          <MapPin className="w-12 h-12 mx-auto mb-2 text-[#CA8A04]" />
                          <p className="font-semibold">Interactive Map</p>
                          <p className="text-sm opacity-75">Click to get directions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-[#CA8A04] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#B8790A] transition-colors">
                        🗺️ Get Directions
                      </button>
                      <button className="flex-1 border-2 border-[#CA8A04] text-[#CA8A04] py-3 px-6 rounded-xl font-bold hover:bg-[#CA8A04] hover:text-white transition-colors">
                        📍 Share Location
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeContact === 'schedule' && (
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-black text-[#50535B] mb-8">Schedule a Meeting</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#CA8A04] hover:bg-[#CA8A04]/5 transition-colors">
                        <Calendar className="w-8 h-8 text-[#CA8A04] mx-auto mb-3" />
                        <h3 className="font-bold text-[#50535B] mb-2">Site Consultation</h3>
                        <p className="text-sm text-[#50535B]/70">On-location project assessment</p>
                      </button>
                      
                      <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#CA8A04] hover:bg-[#CA8A04]/5 transition-colors">
                        <Building className="w-8 h-8 text-[#CA8A04] mx-auto mb-3" />
                        <h3 className="font-bold text-[#50535B] mb-2">Office Meeting</h3>
                        <p className="text-sm text-[#50535B]/70">Detailed discussion at our office</p>
                      </button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-[#50535B] mb-4">Available Time Slots</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time) => (
                          <button
                            key={time}
                            className="py-2 px-3 bg-white border border-gray-200 rounded-lg hover:border-[#CA8A04] hover:bg-[#CA8A04] hover:text-white transition-colors text-sm font-semibold"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Preferred Date</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[#50535B] font-semibold mb-2">Meeting Purpose</label>
                        <textarea
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/20 transition-colors resize-none"
                          placeholder="Brief description of what you'd like to discuss..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#CA8A04] text-white py-4 px-8 rounded-xl font-bold text-lg tracking-wide hover:bg-[#B8790A] transition-colors flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information Sidebar */}
            <div className="animate-slide-in-right space-y-8">
              {/* Quick Contact Cards */}
              <div className="bg-gradient-to-br from-[#CA8A04] to-[#B8790A] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-black mb-6">Quick Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold opacity-90">Call Us</p>
                      <p className="text-xl font-bold">{mockData.company.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold opacity-90">Email Us</p>
                      <p className="text-xl font-bold">{mockData.company.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold opacity-90">Response Time</p>
                      <p className="text-xl font-bold">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-black text-[#50535B] mb-6">Why Choose AKJ Builders?</h3>
                
                <div className="space-y-4">
                  {[
                    'Licensed & Insured Contractors',
                    '15+ Years Construction Experience',
                    'Free Project Consultation & Estimates',
                    'Transparent Pricing & Timeline',
                    '24/7 Project Support & Updates'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#CA8A04] flex-shrink-0" />
                      <span className="text-[#50535B] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-red-600 mb-4">Emergency Services</h3>
                <p className="text-red-600 mb-4">
                  For construction emergencies, structural concerns, or urgent repairs:
                </p>
                <button className="w-full bg-red-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-red-600 transition-colors">
                  🚨 Emergency Hotline
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
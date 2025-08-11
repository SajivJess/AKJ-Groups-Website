import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import WhatsAppButton from "./components/WhatsAppButton";

// Updated page components without blog
const ProjectsPage = () => (
  <div className="min-h-screen bg-white pt-24">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-[#50535B] mb-4">Our Projects</h1>
        <div className="h-1 w-24 bg-[#CA8A04] mx-auto mb-8"></div>
        <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Explore our portfolio of exceptional construction projects</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">🏗️</span>
        </div>
        <h2 className="text-3xl font-bold text-[#50535B] mb-4">Detailed Projects Gallery Coming Soon</h2>
        <p className="text-lg text-[#50535B] max-w-lg mx-auto">
          We're preparing an immersive project showcase with detailed case studies, 
          3D walkthroughs, and comprehensive project documentation.
        </p>
      </div>
    </div>
  </div>
);

const ConsultiesPage = () => (
  <div className="min-h-screen bg-white pt-24">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-[#50535B] mb-4">Our Partners</h1>
        <div className="h-1 w-24 bg-[#CA8A04] mx-auto mb-8"></div>
        <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Strategic partnerships that drive construction excellence</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">🤝</span>
        </div>
        <h2 className="text-3xl font-bold text-[#50535B] mb-4">Partner Spotlight Coming Soon</h2>
        <p className="text-lg text-[#50535B] max-w-lg mx-auto">
          Discover our network of trusted consultants, architects, and industry experts 
          who collaborate to deliver outstanding results.
        </p>
      </div>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="min-h-screen bg-white pt-24">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-[#50535B] mb-4">Project Gallery</h1>
        <div className="h-1 w-24 bg-[#CA8A04] mx-auto mb-8"></div>
        <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Visual stories of our construction mastery</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">📸</span>
        </div>
        <h2 className="text-3xl font-bold text-[#50535B] mb-4">Immersive Gallery Experience Coming Soon</h2>
        <p className="text-lg text-[#50535B] max-w-lg mx-auto">
          High-resolution project photography, interactive 360° views, and 
          behind-the-scenes construction documentation.
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <div className="min-h-screen bg-white pt-24">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-[#50535B] mb-4">Client Reviews</h1>
        <div className="h-1 w-24 bg-[#CA8A04] mx-auto mb-8"></div>
        <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Stories of satisfaction from our valued clients</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">⭐</span>
        </div>
        <h2 className="text-3xl font-bold text-[#50535B] mb-4">Comprehensive Reviews Section Coming Soon</h2>
        <p className="text-lg text-[#50535B] max-w-lg mx-auto">
          Detailed client testimonials, video reviews, and case studies showcasing 
          our commitment to customer satisfaction.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-white pt-24">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-[#50535B] mb-4">Contact Us</h1>
        <div className="h-1 w-24 bg-[#CA8A04] mx-auto mb-8"></div>
        <p className="text-xl text-[#50535B] max-w-2xl mx-auto">Let's start building your vision together</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-[#CA8A04] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl">📞</span>
        </div>
        <h2 className="text-3xl font-bold text-[#50535B] mb-4">Advanced Contact Hub Coming Soon</h2>
        <p className="text-lg text-[#50535B] max-w-lg mx-auto mb-8">
          Interactive contact forms, live chat support, project calculators, 
          and direct scheduling with our construction experts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#CA8A04] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#B8790A] transition-all duration-300 rounded-lg">
            📞 Call: +1 234 567 8900
          </button>
          <button className="border-2 border-[#CA8A04] text-[#CA8A04] px-8 py-4 font-bold tracking-wide hover:bg-[#CA8A04] hover:text-white transition-all duration-300 rounded-lg">
            ✉️ Email Us
          </button>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/consulties" element={<ConsultiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import WhatsAppButton from "./components/WhatsAppButton";

// Placeholder components for other pages
const ProjectsPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Our Projects</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed projects page coming soon...</p>
    </div>
  </div>
);

const ConsultiesPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Our Consulties</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed consulties page coming soon...</p>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Project Gallery</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed gallery page coming soon...</p>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Client Reviews</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed testimonials page coming soon...</p>
    </div>
  </div>
);

const BlogPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Blog & Updates</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed blog page coming soon...</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-white pt-20 lg:pl-20">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-[#50535B] mb-8">Contact Us</h1>
      <div className="h-1 w-24 bg-[#CA8A04] mb-12"></div>
      <p className="text-xl text-[#50535B]">Detailed contact page coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main className="lg:pl-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/consulties" element={<ConsultiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ConsultiesPage from "./components/ConsultiesPage";
import GalleryPage from "./components/GalleryPage";
import TestimonialsPage from "./components/TestimonialsPage";
import ContactPage from "./components/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";

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
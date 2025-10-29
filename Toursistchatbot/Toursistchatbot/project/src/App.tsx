import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ImageSlider />
      <main>
        <Features />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
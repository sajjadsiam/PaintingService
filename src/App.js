import React from 'react';
import About from './components/About';
import CTASection from './components/CTASection';
import EstimateSection from './components/EstimateSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import TopBar from './components/TopBar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <TopBar />

      <Navbar />

      <Slider />

      <Services />

      <EstimateSection />

      <About />

      <Projects />

      <Testimonial />

      <CTASection />

      <Footer />
    </div>
  );
}

export default App;

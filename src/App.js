import React, { useState, useEffect } from 'react';
import Scrollbar from "./components/scrollBar/Scrollbar";
import Preloader from './components/preloader/Preloader';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate the preloader
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <div className="max-w-screen-xl mx-auto">
            <Banner />
            <Features />
            <Projects />
            <Resume />
            <Testimonial />
            <Contact />
            <Footer />
            <FooterBottom />
            <Scrollbar />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

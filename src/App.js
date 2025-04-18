import React, { useState } from 'react';
import Preloader from './components/preloader/Preloader';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about us/About';
import Projects from './components/projects/Projects';
import Testimonial from './components/tesimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import Scrollbar from './components/scrollBar/Scrollbar';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div>
          <Navbar />
          <div className="max-w-screen-xl mx-auto">
            <Banner />
            <About />
            <Projects />
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

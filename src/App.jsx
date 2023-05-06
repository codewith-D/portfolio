import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Achievements from "./components/Achievements"
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Internship/>
      <Education/>
      <Achievements/>
      <Certifications/>
      <Skills />
     
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

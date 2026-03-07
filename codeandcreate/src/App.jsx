// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Project from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Expertise from "./Sections/Expertise";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />

      {/* Sections with IDs for scroll targets */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>   
      <section id="projects">
        <Project />
      </section>
      <section id="expertise">
        <Expertise />
      </section>

      <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import CustomCursor from "../components/CustomCursor";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      {/* Terminal Dot Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Sticky IDE Navigation Bar */}
      <NavBar />

      {/* Hero Section with Typewriter Monospace Headline */}
      <Hero />

      {/* Skills / Stack Config Section (stack.config.json) */}
      <Skills />

      {/* Projects Repository Showcase */}
      <Projects />

      {/* Timeline Section (Work Experience & Education Logs) */}
      <About />

      {/* Link-Based Contact Section */}
      <Contact />

      {/* Minimal Terminal Footer */}
      <Footer />
    </div>
  );
};

export default Home;

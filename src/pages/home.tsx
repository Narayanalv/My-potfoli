import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
    return (
        <div style={{ paddingTop: "70px" }}> {/* Offset for fixed navbar */}
            <Hero />
            <About />
            <Projects />
            <Skills />

            <footer className="py-4 text-center text-secondary border-top border-secondary border-opacity-25 mt-5">
                <small>&copy; {new Date().getFullYear()} Lakshmi Narayana. All rights reserved.</small>
            </footer>
        </div>
    );
};

export default Home;
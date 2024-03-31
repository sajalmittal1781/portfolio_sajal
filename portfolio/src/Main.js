import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;

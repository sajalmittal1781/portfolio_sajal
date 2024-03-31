import React from "react";
import about from "../assets/about.png";
import { bluee } from "../constant";

const About = () => {
  return (
    <div
      id="about"
      className="ml-2 mr-2 h-screen flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="flex flex-col lg:flex-row items-center lg:ml-60 mb-8 lg:mb-0">
        <div className="lg:w-96">
          <h1
            style={{ color: "#EEEEEE" }}
            className="ml-2 text-4xl lg:text-7xl font-bold font-mono text-center lg:text-left lg:mx-0"
          >
            About <span style={{ color: bluee }}>Me</span>
          </h1>

          <p className="mt-4 lg:mt-12" style={{ color: "#EEEEEE" }}>
            I am a final year B.Tech student at J.C. Bose University of Science
            and Technology, YMCA, Faridabad, specializing in the MERN stack and
            proficient in DSA. Currently interning as a Software Developer at
            Perceptiviti. Passionate about crafting innovative web solutions and
            enhancing user experiences. Skilled in frontend and backend
            development with expertise in React.js, Node.js, and MongoDB.
            Dedicated problem solver with a strong foundation in Data Structures
            and Algorithms. Committed to continuous learning and staying updated
            with industry trends. Excited about leveraging technology to drive
            positive change. Open to new opportunities and challenges. Let's
            connect!
          </p>
        </div>
      </div>

      <img src={about} alt="home img" className="mb-4 lg:mb-0 mr-4 lg:mr-40" />
    </div>
  );
};

export default About;

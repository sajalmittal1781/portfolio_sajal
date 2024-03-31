import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { bluee, grey } from "../constant";

const Footer = () => {
  return (
    <div style={{ color: "#EEEEEE" }}>
      <hr className="mb-16 mt-20" style={{ borderColor: grey }} />


      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/sajal-mittal-08886b201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/sajalmittal1781" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a
          href="https://leetcode.com/sajalmittal1781/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size={24} />
        </a>
        <a
          href="https://www.instagram.com/sajalmittal1781"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={24}
            style={{ color: "#EEEEEE", ":hover": { color: bluee } }}
          />
        </a>
      </div>
      <div className="text-center mt-4 mb-6">
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        in React
      </div>
    </div>
  );
};

export default Footer;

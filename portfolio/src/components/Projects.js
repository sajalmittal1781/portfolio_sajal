// import React from "react";
// import backgroundImage from '../assets/b3.png';
// import { bluee } from "../constant";
// import p1 from "../assets/p1.png"
// import p2 from "../assets/p2.png"
// import p3 from "../assets/p3.png"

// const Projects = () => {
//   return (
//     <div className="flex flex-col h-screen w-screen bg-contain justify-between items-center relative">
//       <div className="absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.3 }}></div>

//       <div className="relative z-10">
//         <h1
//           style={{ color: "#EEEEEE" }}
//           className="text-7xl font-bold font-mono mt-32"
//         >
//           My Recent <span style={{ color: bluee }}>Projects</span>
//         </h1>
//       </div>

//       <div className="relative z-10 flex justify-center">
//   <div className="flex flex-row gap-8 items-center max-w-screen-lg px-4 py-28">
//     <a href="https://ration-al.vercel.app/home" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
//       <img src={p1} alt="project1" className="w-96 h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"/>
//       <span className="mt-2 text-center text-white font-bold">Ration-al Store</span>
//     </a>

//     <a href="https://blogs-six.vercel.app/auth" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
//       <img src={p2} alt="project2" className="w-96 h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"/>
//       <span className="mt-2 text-center text-white font-bold">Blog!t</span>
//     </a>

//     <a href="https://enviro-map-e4xk.vercel.app/login" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
//       <img src={p3} alt="project3" className="w-96 h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"/>
//       <span className="mt-2 text-center text-white font-bold">Enviro Map</span>
//     </a>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Projects;

import React from "react";
import backgroundImage from "../assets/b3.png";
import { bluee } from "../constant";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const Projects = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-contain justify-between items-center relative">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.3 }}
      ></div>

      <div className=" mt-10 relative z-10">
        {/* <h1
          style={{ color: "#EEEEEE" }}
          className="text-4xl lg:text-7xl font-bold font-mono mt-20"
        >
          My Recent <span style={{ color: bluee }}>Projects</span>
        </h1> */}

        <h1
          style={{ color: "#EEEEEE" }}
          className="text-4xl lg:text-7xl font-bold font-mono mt-20 text-center lg:text-left"
        >
          My Recent <span style={{ color: bluee }}>Projects</span>
        </h1>
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-screen-lg px-4 py-10 lg:py-28">
          <a
            href="https://ration-al.vercel.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={p1}
              alt="project1"
              className="w-64 lg:w-96 h-48 lg:h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
            <span className="mt-2 text-center text-white font-bold">
              Ration-al Store
            </span>
          </a>

          <a
            href="https://blogs-six.vercel.app/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={p2}
              alt="project2"
              className="w-64 lg:w-96 h-48 lg:h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
            <span className="mt-2 text-center text-white font-bold">
              Blog!t
            </span>
          </a>

          <a
            href="https://enviro-map-e4xk.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={p3}
              alt="project3"
              className="w-64 lg:w-96 h-48 lg:h-72 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
            <span className="mt-2 text-center text-white font-bold">
              Enviro Map
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

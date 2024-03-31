// import React from "react";
// import {bluee} from "../constant";

// const Navbar = () => {
//   return (
//     <div className="  flex justify-between items-center py-4 px-6  ">
//       <div style={{color:bluee}} className=" mr-2 text-xl lg:text-3xl font-bold ml-2 lg:ml-4">Sajal Mittal</div>

//       <ul className="flex ml-7 flex-row space-x-8 text-lg mr-8">
//         <li>
//           <a href="#home" className="text-white text-xl hover:text-gray-300">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" className="text-white text-xl hover:text-gray-300">
//             About Me
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="text-white text-xl hover:text-gray-300">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { bluee } from "../constant";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <div style={{ color: bluee }} className="mr-2 text-xl lg:text-3xl font-bold ml-2 lg:ml-4">Sajal Mittal</div>

      <ul className="flex ml-7 flex-row space-x-8 text-lg mr-8">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
            className="text-white text-xl hover:text-gray-300 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={30}
            duration={500}
            className="text-white text-xl hover:text-gray-300 cursor-pointer"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            // offset={-10}
            duration={500}
            className="text-white text-xl hover:text-gray-300 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;


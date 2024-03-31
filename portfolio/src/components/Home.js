// import React from "react";
// import home1 from "../assets/home1.png";
// import home2 from "../assets/h2.png";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { bluee, grey } from "../constant";

// const Home = () => {
//   const downloadPdf = () => {
//     const pdfUrl = "/pdf/Sajal.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Sajal.pdf";
//     document.body.appendChild(link);

//     link.click();

//     document.body.removeChild(link);
//     toast.info("Download Successful !!");
//   };

//   return (
//     <div className="h-screen flex flex-row justify-between items-center ">
//       <ToastContainer />
//       <div className="flex flex-row ml-60  mb-24 ">
//         <img src={home1} className="mt-24 h-28 mr-4" alt="homeimg" />
//         <div className="">
//           <h1
//             style={{ color: "#EEEEEE" }}
//             className="text-7xl font-bold font-mono	"
//           >
//             Creative Web
//           </h1>
//           <h1 style={{ color: bluee }} className="text-7xl font-bold	">
//             Developer
//           </h1>
//           <button
//             style={{ color: "#EEEEEE", backgroundColor: grey }}
//             className=" mt-8 p-2   pl-4 pr-4 rounded-full "
//             onClick={downloadPdf}
//           >
//             Download CV
//           </button>
//         </div>
//       </div>

//       <img src={home2} alt="home img" className="mb-4 mr-40 " />
//     </div>
//   );
// };

// export default Home;



import React from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/h2.png";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { bluee, grey } from "../constant";

const Home = () => {
  const downloadPdf = () => {
    const pdfUrl = "/pdf/Sajal.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sajal.pdf";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    toast.info("Download Successful !!");
  };

  return (
    <div id="home" className="h-screen flex flex-col lg:flex-row justify-between items-center ">
      <ToastContainer />
      <div className="flex flex-row lg:flex-row items-center lg:ml-60 mb-8 lg:mb-0 ">
        <img src={home1} className="mt-8 lg:mt-24 h-28 lg:mr-4" alt="homeimg" />
        <div className="text-center lg:text-left">
          <h1 style={{ color: "#EEEEEE" }} className="text-4xl lg:text-7xl font-bold font-mono">
            Creative Web
          </h1>
          <h1 style={{ color: bluee }} className="text-4xl lg:text-7xl font-bold">
            Developer
          </h1>
          <button
            style={{ color: "#EEEEEE", backgroundColor: grey }}
            className="mt-4 lg:mt-8 p-2 pl-4 pr-4 rounded-full"
            onClick={downloadPdf}
          >
            Download CV
          </button>
        </div>
      </div>

      <img src={home2} alt="home img" className="ml-8 mb-4 lg:mb-0 mr-4 lg:mr-40" />
    </div>
  );
};

export default Home;

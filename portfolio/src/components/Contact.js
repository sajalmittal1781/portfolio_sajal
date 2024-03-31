// import React, { useState } from "react";
// import contact from "../assets/contact.png";
// import { bluee, grey } from "../constant";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/send-email', formData);
//       toast.info('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       toast.info('Error sending email');
//     }
//   };


//   return (
//     <div className="h-screen flex flex-row justify-between items-center ">
//         <ToastContainer/>
//       <div className="ml-60 mt-24">
//         <h1
//           style={{ color: "#EEEEEE" }}
//           className="text-6xl font-bold font-mono	"
//         >
//           Got a project in
//         </h1>
//         <h1 style={{ color: bluee }} className="text-7xl font-bold	">
//           mind?
//         </h1>
//         <img src={contact} className="mt-8 h-96 mr-8" alt="homeimg" />
//       </div>

//       <div className="mr-12">
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label
//                 className="pl-3"
//                 style={{ color: "#EEEEEE" }}
//                 htmlFor="name"
//               >
//                 Your Name
//               </label>
//               <input
//                 name="name"
//                 onChange={handleChange}
//                 type="text"
//                 id="name"
//                 style={{ backgroundColor: grey }}
//                 className="rounded-3xl p-4 w-full"
//                 placeholder="Name"
//               />
//             </div>
//             <div className="w-1/2">
//               <label
//                 className="pl-3"
//                 style={{ color: "#EEEEEE" }}
//                 htmlFor="email"
//               >
//                 Your Email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 onChange={handleChange}
//                 style={{ backgroundColor: grey }}
//                 className="rounded-3xl p-4 w-full"
//                 placeholder="Email"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               className="pl-3"
//               style={{ color: "#EEEEEE" }}
//               htmlFor="message"
//             >
//               Your Message
//             </label>
//             <textarea
//               name="message"
//               onChange={handleChange}
//               style={{color:"#EEEEEE", backgroundColor: grey, resize: "none" }}
//               id="message"
//               rows="13"
//               //   style={{ backgroundColor: grey }}
//               className="rounded-3xl p-4 w-full"
//               placeholder="Message"
//             />
//           </div>
//           <button
//             type="submit"
//             style={{ color: "#EEEEEE", backgroundColor: bluee }}
//             className=" mt-1 p-2  shadow-md 	shadow-sky-200		 pl-4 pr-4 rounded-full w-44 "
//             // onClick={downloadPdf}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import contact from "../assets/contact.png";
import { bluee, grey } from "../constant";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', formData);
      toast.info('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.info('Error sending email');
    }
  };

  return (
    <div className="h-full   flex flex-col lg:flex-row justify-between items-center">
      <ToastContainer />
      <div id="contact"  className="lg:ml-60 mt-72 lg:mt-32  lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1 style={{ color: "#EEEEEE" }} className="text-4xl ml-10 lg:text-6xl font-bold font-mono">
          Got a project in <span style={{ color: bluee }}>mind?</span>
        </h1>
        <img src={contact} className="mt-8 lg:h-96" alt="homeimg" />
      </div>

      <div className="lg:mr-12 lg:w-1/2">
        <form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleSubmit}>
          <label className="pl-3" style={{ color: "#EEEEEE" }} htmlFor="name">
            Your Name
          </label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            id="name"
            style={{ backgroundColor: grey }}
            className="rounded-3xl p-4 w-full"
            placeholder="Name"
          />

          <label className="pl-3" style={{ color: "#EEEEEE" }} htmlFor="email">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            style={{ backgroundColor: grey }}
            className="rounded-3xl p-4 w-full"
            placeholder="Email"
          />

          <label className="pl-3" style={{ color: "#EEEEEE" }} htmlFor="message">
            Your Message
          </label>
          <textarea
            name="message"
            onChange={handleChange}
            style={{ color: "#EEEEEE", backgroundColor: grey, resize: "none" }}
            id="message"
            rows="6"
            className="rounded-3xl p-4 w-full"
            placeholder="Message"
          />

          <button
            type="submit"
            style={{ color: "#EEEEEE", backgroundColor: bluee }}
            className="mt-1 p-2 shadow-md shadow-sky-200 pl-4 pr-4 rounded-full w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

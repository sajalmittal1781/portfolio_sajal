require("dotenv").config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
const allowedOrigins = ['http://localhost:3000','https://portfolio-sajal.vercel.app'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "sajalmittal1781@gmail.com",
    subject: "New message from contact form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

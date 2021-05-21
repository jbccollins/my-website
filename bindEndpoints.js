/*
  I find that handling requests from the client ends up cluttering up server.js and making it a hot unreadable mess.
  To help deal with that I've pulled that stuff out into this file. If you don't have any endpoints you can safetly
  remove the import/usage of bindEndpoints from server.js :)
*/
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

import {
  API_SEND_EMAIL,
  RESUME_DOWNLOAD,
} from './common/constants/urls';

// Find your credentials here: https://app.mailgun.com/app/sending/domains
const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD,
  }
});

// Gmail is obnoxious about this: https://community.nodemailer.com/using-gmail/
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.EMAIL_PASSWORD,
//   }
// });

const bindEndpoints = app => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.post(API_SEND_EMAIL, (req, res) => {
    const { FromAddress, FromName, Body } = req.body;
    const message = `
      <div>From Address: ${FromAddress}</div>
      <div>From Name: ${FromName}</div>
      <br/>
      <div>${Body}</div>
    `;

    const mailOptions = {
      from: FromAddress, // sender address
      to: process.env.EMAIL_ADDRESS, // list of receivers
      subject: `My Website Email: ${FromName}`, // Subject line
      html: message// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
      if(err) {
        console.log(err)
        res.send(err);
      } else {
        console.log(info);
        res.send(info);
      }
    });
  });

  // This does not work locally due to the port redirect. You gotta hit localhost:5001/resume.
  app.get(RESUME_DOWNLOAD, (req, res) => res.download('./client/src/assets/resume/james_collins_resume_2021_v1.pdf', "James-Collins-Resume.pdf"))
};

export default bindEndpoints;
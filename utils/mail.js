require('dotenv').config();
const nodemailer = require('nodemailer');
const mailTool = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.mailsender,
    pass: process.env.mailsenderpassword
  }
})

module.exports = {
  mailTool,
}
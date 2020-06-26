var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bhatiasingh450@gmail.com',
      pass: 'f4508bind'
    }
  });
  
  var mailOptions = {
    from: 'bhatiasingh450@gmail.com',
    to: 'kaurginni1999@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
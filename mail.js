const nodemailer = require('nodemailer');
const mail = require('./config.json');
const smtpTransport = nodemailer.createTransport(mail);
const mailOptions = {
  from: `양권성 <${mail.auth.user}>`,
  to: 'yanggs@doore.link',
  subject: 'Nodemailer 테스트',
  text: '평문 보내기 테스ss트'
};
smtpTransport.sendMail(mailOptions, err => {
  if(err) return console.error(err);
  console.log('메일 전송 성공!');
});
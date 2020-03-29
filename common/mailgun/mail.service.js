const nodemailer = require('nodemailer');
const {mail} = require('../../database/config/config');

let transporter = nodemailer.createTransport({
        service: mail.type,
        auth: {
            user: mail.email,
            pass: mail.password,
        }
    }
);

let sendSingleMail = ({ to, subject, text }) => {
    let mailOptions = {
        from: mail.email,
        to,
        subject,
        text
    };
    transporter.sendMail(mailOptions, (err, data) => { err ? console.log(err) : console.log(data); })
};

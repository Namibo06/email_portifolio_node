const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports.sendEmail= async(req,res) => {
    const { first_name, last_name, email_from, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.PASS_EMAIL
        }
    });

    const messageHTML = `
        Nome: ${first_name + " " + last_name}

        Email: ${email_from}

        Assunto: ${subject}

        Mensagem: ${message}
    `;

    let mailOptions = {
        from: email_from,
        to: process.env.MY_EMAIL,
        subject: subject,
        text: messageHTML
    };

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Email enviado com sucesso"});
    }catch(error){
        res.status(500).json({message: "Erro: " + error});
    }
}
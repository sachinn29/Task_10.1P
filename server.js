const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sachin.arora080@gmail.com',
        pass: 'ytagwwdhrtxriprg',
    },
});

app.post('/subscribe', async (req, res) => {
    const email = req.body.email;

    const mailOptions = {
        from: 'sachin.arora080@gmail.com',  // Sender's email address
        to: email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    try {
        // Send mail
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Email sent successfully ', error);
        res.status(500).send('Email sent successfully');
    }
});

app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});

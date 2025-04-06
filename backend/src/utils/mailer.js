const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const sendVerifiedEmail = async (email, code) => {
    try {
        // Read the email template
        const htmlTemplate = await fs.readFile(path.join(__dirname, 'utils/template.html'), 'utf-8');

        // Read the image as an attachment
        const imagePath = path.join(__dirname, 'assets/1.png');

        const info = await transporter.sendMail({
            from: `"Glow Investment" <${process.env.MAIL_USER}>`,
            to: email,
            subject: 'Your Verification Code',
            text: `Your verification code is ${code}`,
            html: htmlTemplate.replace('[Recipient]', email).replace('[CODE]', code), // Replace placeholders
            attachments: [
                {
                    filename: '1.png',
                    path: imagePath,
                    cid: 'image1@glow' // Content-ID for embedding
                }
            ]
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Failed to send email', error);
        throw error;
    }
};

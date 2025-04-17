const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zvertex.247@gmail.com',
    pass: process.env.EMAIL_PASS, // Store Gmail App Password in .env
  },
});

router.post('/', async (req, res) => {
  const { name, email, resume } = req.body;

  try {
    await transporter.sendMail({
      from: '"Ravi Legal Associates" <zvertex.247@gmail.com>',
      to: 'info@ravilegal.com', // Firm's receiving email
      replyTo: email,
      subject: `Career Application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nResume: ${resume}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Resume:</strong> ${resume}</p>`,
    });

    res.status(200).json({ message: 'Application received. We will review and contact you soon.' });
  } catch (error) {
    console.error('Careers email error:', error);
    res.status(500).json({ error: 'Failed to submit application. Please try again later.' });
  }
});

module.exports = router;
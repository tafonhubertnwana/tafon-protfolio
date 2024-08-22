// pages/api/send-email.js

import { Resend } from 'resend';
import { Email } from 'react-email';

// Initialize Resend with your API key
const resend = new Resend('re_fjsvkVWG_Q4d9Fsmw7NJ5TUgCiKJ8irYH'); // Replace with your actual API key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Define your email content
      const emailContent = (
        <Email>
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </Email>
      );

      // Send the email using Resend
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tafonsoftwarespecialist@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: emailContent,
      });

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

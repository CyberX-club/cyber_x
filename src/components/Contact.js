// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Optional CSS if you want to style

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      <p><strong>Teacher-in-charge:</strong> Ms. Sarika Kaushal</p>
      <p>
        Email us at: <a href="mailto:cybersecurity@dpsrkp.net">cybersecurity@dpsrkp.net</a>
      </p>

      <form action="mailto:cybersecurity@dpsrkp.net" method="POST" encType="text/plain">
        <label>Your Name:</label><br />
        <input type="text" name="name" required /><br />

        <label>Your Email:</label><br />
        <input type="email" name="email" required /><br />

        <label>Your Message:</label><br />
        <textarea name="message" rows="5" required></textarea><br />

        <button type="submit">Send Message</button>
      </form>

      <div className="social-links" style={{ marginTop: "20px" }}>
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/CyberX.CLUB" target="_blank" rel="noreferrer">Instagram</a> |
        <a href="https://twitter.com/CyberX" target="_blank" rel="noreferrer">Twitter</a> |
        <a href="https://www.facebook.com/CyberX" target="_blank" rel="noreferrer">Facebook</a> |
        <a href="https://www.linkedin.com/company/cyberx" target="_blank" rel="noreferrer">LinkedIn</a> |
        <a href="https://github.com/CyberX-club/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;

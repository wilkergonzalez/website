import React from 'react';
import './Contact.css';
import Layout from './Layout';

const Contact = () => {
  const contactInfo = {
    name: "Wilker Gonzalez",
    title: "Software Development Student",
    email: "wilkerg1011@gmail.com",
    phone: "801-889-3058",
    location: "Salt Lake City, UT",
    linkedin: "https://linkedin.com/in/wilkergonzalez/",
    github: "https://github.com/wilkergonzalez",
    website: "https://www.linkedin.com/in/wilkergonzalez/"
  };

  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm always interested in hearing about new opportunities and collaborations</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <span className="info-label">Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="info-value">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-details">
                  <span className="info-label">Phone</span>
                  <a href={`tel:${contactInfo.phone}`} className="info-value">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h2>Connect With Me</h2>
            <div className="social-grid">
              <a href={contactInfo.linkedin} className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">💼</div>
                <span>LinkedIn</span>
              </a>

              <a href={contactInfo.github} className="social-link github" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">💻</div>
                <span>GitHub</span>
              </a>

              <a href={contactInfo.website} className="social-link website" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">🌐</div>
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Me a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
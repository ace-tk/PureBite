import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <div className="container sec-nav-container">
          <div className="sec-nav-links">
            <Link to="/" className="sec-nav-link">Home</Link>
            <Link to="/shop" className="sec-nav-link">Shop</Link>
            <Link to="/about" className="sec-nav-link active">About</Link>
          </div>
          <div className="sec-nav-actions">
            <div className="search-bar">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Search products..." />
            </div>
            <button className="profile-btn" aria-label="Profile" onClick={() => navigate('/dashboard')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <h1>About Us</h1>
            <p>We're here to help. Feel free to reach out<br/>with any questions or concerns.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content container">
        <section className="our-story">
          <h2>Our Story</h2>
          <p>PureBite is dedicated to providing fresh, high-quality organic produce sourced directly from trusted farms.
Our goal is to make healthy eating simple, accessible, and sustainable for everyone.

We carefully curate our products to ensure freshness, nutrition, and environmental responsibility in every order.</p>
        </section>

        <section className="about-cards">
          <div className="about-card">
            <div className="card-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c0 0-6 2-6 9 0 4 6 11 6 11s6-7 6-11c0-7-6-9-6-9z"></path>
              </svg>
              <h3>Our Mission</h3>
            </div>
            <p>Our mission is to promote healthier lifestyles by delivering organic, nutritious, and eco-friendly products to our customers.
We aim to support sustainable farming practices while making clean eating convenient and affordable.</p>
          </div>
          
          <div className="about-card">
            <div className="card-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h3>Email Us</h3>
            </div>
            <p>Have questions or need assistance? We’re here to help!</p>
            <div className="contact-details">
              <a href="mailto:support@purebite.com" className="contact-email">support@purebite.com</a>
              <p className="office-hours">
                <span>Monday – Friday</span><br/>
                <span>9:00 AM – 5:00 PM</span>
              </p>
              <button className="btn btn-secondary contact-btn" onClick={() => window.location.href = 'mailto:support@purebite.com'}>
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .sec-nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .secondary-navbar {
          background-color: #F8F9F8;
          border-bottom: 1px solid #EAEAEA;
          padding: 0.75rem 0;
        }

        .sec-nav-links {
          display: flex;
          gap: 2rem;
        }

        .sec-nav-link {
          font-weight: 600;
          color: var(--color-text-muted);
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .sec-nav-link.active, .sec-nav-link:hover {
          color: var(--color-primary);
        }

        .sec-nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid #EAEAEA;
          border-radius: var(--radius-md);
          padding: 0.5rem 1rem;
          width: 300px;
          transition: border-color 0.2s;
        }

        .search-bar:focus-within {
          border-color: var(--color-primary);
        }

        .search-icon {
          color: var(--color-text-muted);
          margin-right: 0.5rem;
        }

        .search-bar input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }

        .search-bar input::placeholder {
          color: #A0A0A0;
        }

        .profile-btn {
          background-color: #F0F0F0;
          color: var(--color-text-main);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .profile-btn:hover {
          background-color: var(--color-primary);
          color: white;
          transform: scale(1.05);
        }

        .about-hero {
          background: linear-gradient(to right, #F9FDF9 30%, rgba(249, 253, 249, 0.8) 60%), url('/about_hero_bg.png') no-repeat center center;
          background-size: cover;
          padding: 8rem 0;
          border-bottom: 1px solid #EAEAEA;
        }

        .about-hero-content {
          max-width: 500px;
        }

        .about-hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .about-hero-content p {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .about-content {
          padding: 6rem 1rem;
        }

        .our-story {
          margin-bottom: 4rem;
          text-align: center;
        }

        .our-story h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
        }

        .our-story p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .about-card {
          background-color: var(--color-white);
          border: 1px solid #EAEAEA;
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .about-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--color-text-main);
        }

        .about-card p {
          color: var(--color-text-muted);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .contact-details {
          margin-top: 1.5rem;
          border-top: 1px solid #F0F0F0;
          padding-top: 1.5rem;
        }

        .contact-email {
          display: block;
          font-weight: 700;
          color: var(--color-primary);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          text-decoration: none;
        }

        .office-hours {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .contact-btn {
          width: fit-content;
          padding: 0.75rem 2rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default About;

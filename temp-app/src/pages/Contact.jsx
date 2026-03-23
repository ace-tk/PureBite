import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-page">
      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <div className="container sec-nav-container">
          <div className="sec-nav-links">
            <Link to="/" className="sec-nav-link">Home</Link>
            <Link to="/shop" className="sec-nav-link">Shop</Link>
            <Link to="/about" className="sec-nav-link">
              About 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
          </div>
          <div className="sec-nav-search">
            <div className="search-bar">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Search products..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We're here to help. Feel free to reach out with any questions or concerns.</p>
        </div>

        <div className="contact-methods grid-3">
          <div className="method-card">
            <div className="method-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h3>Email Us</h3>
            </div>
            <p className="method-detail">support@purebite.com</p>
            <p className="method-sub">Your needs & onsite support</p>
          </div>

          <div className="method-card">
            <div className="method-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3>Call Us</h3>
            </div>
            <p className="method-detail">(123) 456-07800</p>
            <p className="method-sub">Monday - Friday, 9 AM - 5 PM (ET)</p>
          </div>

          <div className="method-card">
            <div className="method-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3>Visit Us</h3>
            </div>
            <p className="method-detail">122 Green Way, Springfield, USA</p>
            <button className="btn-directions" onClick={() => navigate('/about')}>Get Directions</button>
          </div>
        </div>

        <div className="team-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid grid-3">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sara Thompson" className="team-img" />
              <div className="team-info">
                <h4>Sara Thompson</h4>
                <p className="team-role">Founder & CEO</p>
                <div className="team-rating">
                  <div className="stars">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <span className="reviews">(233) Reviews</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="David Lee" className="team-img" />
              <div className="team-info">
                <h4>David Lee</h4>
                <p className="team-role">Chief Operations Officer</p>
                <div className="team-rating">
                  <div className="stars">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <span className="reviews">(213) Reviews</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Emily Chen" className="team-img" />
              <div className="team-info">
                <h4>Emily Chen</h4>
                <p className="team-role">Nutritionist & Quality Manager</p>
                <div className="team-rating">
                  <div className="stars">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <span className="reviews">(213) Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          background-color: #F4F6F4;
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        .secondary-navbar {
          background-color: #FAFCFA;
          border-bottom: 1px solid #EAEAEA;
          padding: 1rem 0;
        }

        .sec-nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sec-nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .sec-nav-link {
          font-weight: 600;
          color: #2D372B;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }

        .sec-nav-search {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          margin-left: 2rem;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid #EAEAEA;
          border-radius: 8px;
          padding: 0.65rem 1rem;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }

        .search-icon {
          color: #A0A0A0;
          margin-right: 0.75rem;
        }

        .search-bar input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 1rem;
          color: var(--color-text-main);
        }

        .search-bar input::placeholder {
          color: #A0A0A0;
        }

        .contact-content {
          margin-top: 3.5rem;
        }

        .contact-header {
          margin-bottom: 3rem;
        }

        .contact-header h1 {
          font-size: 2.8rem;
          color: #2D372B;
          margin-bottom: 0.75rem;
        }

        .contact-header p {
          color: #5A5A5A;
          font-size: 1.15rem;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .method-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .method-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .method-title h3 {
          font-size: 1.35rem;
          color: #5A6A5A;
          font-weight: 500;
        }

        .method-title svg {
          color: #4A6B53;
        }

        .method-detail {
          font-weight: 500;
          color: #2D372B;
          font-size: 1.05rem;
          margin-bottom: 0.75rem;
        }

        .method-sub {
          color: #6C757D;
          font-size: 0.85rem;
        }

        .btn-directions {
          background-color: #385E42;
          color: white;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background-color 0.2s;
        }

        .btn-directions:hover {
          background-color: #2D4A31;
        }

        .team-section {
          margin-top: 5rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D372B;
          margin-bottom: 3rem;
        }

        .team-card {
           background: #FFFFFF;
           border-radius: 12px;
           overflow: hidden;
           box-shadow: 0 4px 15px rgba(0,0,0,0.04);
           border: 1px solid rgba(0,0,0,0.02);
        }

        .team-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .team-info {
          padding: 1.75rem;
        }

        .team-info h4 {
          font-size: 1.35rem;
          color: #2D372B;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .team-role {
          color: #5A5A5A;
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .team-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          display: flex;
          gap: 0.15rem;
        }

        .reviews {
          color: #6C757D;
          font-size: 0.85rem;
          font-weight: 500;
        }

        @media (max-width: 968px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
          
          .sec-nav-container {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .sec-nav-search {
            margin-left: 0;
            width: 100%;
            justify-content: flex-start;
          }
          
          .search-bar {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Contact;

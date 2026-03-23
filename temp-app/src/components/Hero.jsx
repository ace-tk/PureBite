import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Hero = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">100% Organic & Fresh</span>
          <h1 className="headline">
            Fresh Grocery <br />
            <span className="highlight">Delivered</span> to Your Door
          </h1>
          <p className="subheadline">
            Experience the taste of nature with our locally sourced, organic produce.
            Healthy living made simple and affordable.
          </p>
          <div className="cta-group">
            <button className="btn btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
            <button className="btn btn-outline" onClick={() => navigate('/about')}>View Process</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">15k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Organic Certified</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          {/* Placeholder for Hero Image - using a CSS visual for now */}
          <div className="hero-visual">
            <div className="circle-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Fresh Vegetables Basket"
              className="hero-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 4rem 0;
          background: linear-gradient(to right, #F9FDF9 50%, #F0F7F1 50%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: var(--color-secondary);
          color: var(--color-primary);
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .headline {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .highlight {
          color: var(--color-accent);
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background-color: rgba(244, 162, 97, 0.2);
          z-index: -1;
          border-radius: 4px;
        }

        .subheadline {
          font-size: 1.125rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid #E5E5E5;
          padding-top: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-visual {
          position: relative;
          z-index: 1;
        }

        .circle-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background-color: #E2EFE5;
          border-radius: 50%;
          z-index: -1;
        }

        .hero-img {
          border-radius: 50%;
          box-shadow: var(--shadow-lg);
          width: 500px;
          height: 500px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hero-img:hover {
          transform: scale(1.02);
        }

        @media (max-width: 968px) {
          .hero {
            background: #F9FDF9;
            padding: 2rem 0;
            text-align: center;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cta-group {
            justify-content: center;
          }

          .stats {
            justify-content: center;
          }

           .headline {
            font-size: 2.5rem;
           }
           
           .circle-bg {
             width: 300px;
             height: 300px;
           }

           .hero-img {
             width: 260px;
             height: 260px;
             margin-top: 20px;
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;

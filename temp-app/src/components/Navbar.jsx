import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          PureBite<span className="dot">.</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Desktop Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
      
      <style>{`
        .navbar {
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .dot {
          color: var(--color-accent);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text-main);
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-btn {
          padding: 0.5rem;
          color: var(--color-text-main);
          transition: color 0.2s;
        }

        .icon-btn:hover {
          color: var(--color-primary);
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: var(--color-text-main);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-white);
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-md);
            clip-path: circle(0% at 100% 0);
            transition: clip-path 0.4s ease-in-out;
          }

          .nav-links.active {
            clip-path: circle(150% at 100% 0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

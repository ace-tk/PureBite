import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-page">
      <div className="container works-container">
        
        <header className="works-header">
          <h1>How It Works</h1>
          <p>Enjoy fresh, organic produce delivered to your doorstep in three easy steps</p>
        </header>

        {/* Progress Tracker Tracker */}
        <div className="process-tracker">
          <div className="tracker-line"></div>
          <div className="tracker-steps">
            <div className="tracker-step">1</div>
            <div className="tracker-step">2</div>
            <div className="tracker-step">3</div>
            <div className="tracker-step">4</div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-card-header">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3>Customize Your Box</h3>
            </div>
            <p className="step-desc">
              Browse our selection of organic boxes & add individual items to suit your needs.
            </p>
            <button className="btn btn-primary step-btn">Choose Your Box</button>
            <div className="step-img-wrapper">
              <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=600&q=80" alt="Customize your box" className="step-img" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-card-header">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h3>Choose Frequency</h3>
            </div>
            <p className="step-desc">
              Select your delivery frequency: weekly, bi-weekly, or monthly.
            </p>
            <button className="btn btn-primary step-btn">Select Schedule</button>
            <div className="step-img-wrapper">
              <img src="https://images.unsplash.com/photo-1588964895597-cfccd6e2b0d9?auto=format&fit=crop&w=600&q=80" alt="Choose Frequency" className="step-img" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-card-header">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3>Get Your Delivery</h3>
            </div>
            <p className="step-desc">
              Receive your box of fresh, organic goodies right at your doorstep on your chosen schedule.
            </p>
            <button className="btn btn-primary step-btn">Place Your Order</button>
            <div className="step-img-wrapper">
              <img src="https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=600&q=80" alt="Get Your Delivery" className="step-img" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="step-card">
            <div className="step-card-header">
              <div className="step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Enjoy & Flexibility</h3>
            </div>
            <p className="step-desc">
              Savor your healthy goodies! Easily skip, pause, or adjust your order anytime.
            </p>
            <button className="btn btn-primary step-btn">View FAQ</button>
            <div className="step-img-wrapper">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80" alt="Enjoy and flexibility" className="step-img" />
            </div>
          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="features-bar">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Free Delivery</h4>
              <p>On orders over Rs 500</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <div className="feature-text">
              <h4>100% Organic</h4>
              <p>Certified USDA Organic</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </div>
            <div className="feature-text">
              <h4>Skip or Pause Anytime</h4>
              <p>No commitment required</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;

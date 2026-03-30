import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const IconDashboard = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const IconOrders = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconSubs = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconAddress = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconPayment = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const IconProfile = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const IconLeaf = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>;
const IconBag = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>;
const IconRefresh = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>;

const MOCK_ORDERS = [
  {
    id: "PB-1234",
    name: "Weekly Organic Box",
    items: "1 items",
    date: "Apr 20, 2025",
    status: "Delivered",
    total: "₹799",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "PB-1233",
    name: "Juicing Essentials Box",
    items: "1 items",
    date: "Apr 13, 2025",
    status: "Delivered",
    total: "₹649",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "PB-1232",
    name: "Seasonal Harvest Box",
    items: "1 items",
    date: "Apr 6, 2025",
    status: "Delivered",
    total: "₹1199",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200"
  }
];

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  
  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "User", "email": "user@example.com"}');
  const userInitials = user.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';

  const menuItems = [
    { label: 'Dashboard', icon: <IconDashboard /> },
    { label: 'Orders', icon: <IconOrders /> },
    { label: 'Subscriptions', icon: <IconRefresh /> },
    { label: 'Addresses', icon: <IconAddress /> },
    { label: 'Payment Methods', icon: <IconPayment /> },
    { label: 'Profile Settings', icon: <IconProfile /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="dash-layout container">
      {/* Sidebar Overlay/Grid */}
      <aside className="dash-sidebar">
        <nav className="dash-nav">
          {menuItems.map(item => (
            <button 
              key={item.label}
              className={`dash-nav-item ${activeMenu === item.label ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.label)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          {/* Logout Button inside Sidebar nav */}
          <button className="dash-nav-item text-danger" onClick={handleLogout} style={{ marginTop: 'auto', color: 'var(--color-accent)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span>Logout</span>
          </button>
        </nav>

        <div className="dash-promo-card">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" alt="Fresh vegetables" className="promo-img"/>
          <div className="promo-content">
            <h4>Give $10, Get $10</h4>
            <p>Refer a friend and you'll both get a $10 credit toward your next box.</p>
            <button className="btn btn-outline promo-btn">Refer & Earn</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dash-main">
        <header className="dash-header">
          <h1>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
          <p>Here's an overview of your account activity and updates.</p>
        </header>

        {/* Top Stat Cards */}
        <section className="dash-stats">
          <div className="dash-card stat-card">
            <div className="stat-icon-wrapper"><IconBag /></div>
            <div className="stat-info">
              <span className="stat-label">Total Orders</span>
              <span className="stat-value">12</span>
              <a href="#" className="stat-link">View Orders →</a>
            </div>
          </div>
          <div className="dash-card stat-card">
            <div className="stat-icon-wrapper"><IconRefresh /></div>
            <div className="stat-info">
              <span className="stat-label">Active Subscription</span>
              <span className="stat-value text-md">Weekly Organic Box</span>
              <a href="#" className="stat-link">Manage →</a>
            </div>
          </div>
          <div className="dash-card stat-card">
            <div className="stat-icon-wrapper"><IconLeaf /></div>
            <div className="stat-info">
              <span className="stat-label">PurePoints Balance</span>
              <span className="stat-value">350</span>
              <a href="#" className="stat-link">Rewards Center →</a>
            </div>
          </div>
        </section>

        {/* 2-Column Grid Area */}
        <div className="dash-content-grid">
          
          {/* Left Column (Main Focus) */}
          <div className="dash-col-left">
            {/* Recent Orders */}
            <div className="dash-card section-card">
              <div className="card-header">
                <h2>Recent Orders</h2>
                <button className="btn-text">View All Orders</button>
              </div>
              <div className="table-header">
                <span></span>
                <span>Order</span>
                <span>Date</span>
                <span>Status</span>
                <span className="text-right">Total</span>
                <span></span>
              </div>
              <div className="order-list">
                {MOCK_ORDERS.map(order => (
                  <div className="order-item" key={order.id}>
                    <img src={order.image} alt={order.name} className="order-img" />
                    <div className="order-details">
                      <span className="order-id">Order #{order.id}</span>
                      <span className="order-name">{order.name}</span>
                      <span className="order-items">{order.items}</span>
                    </div>
                    <div className="order-date">{order.date}</div>
                    <div className="order-status">
                      <span className="badge badge-success">{order.status}</span>
                    </div>
                    <div className="order-total">{order.total}</div>
                    <div className="order-action">
                      <button className="btn-outline-sm" onClick={() => navigate('/shop')}>Reorder</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manage Subscription */}
            <div className="dash-card section-card">
               <div className="card-header">
                <h2>Manage Your Subscription</h2>
              </div>
              <div className="subscription-manage">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" alt="Box" className="sub-img" />
                <div className="sub-details">
                  <div className="sub-title-row">
                    <h3>Weekly Organic Box</h3>
                    <span className="badge badge-success">Active</span>
                  </div>
                  <p className="sub-meta">Every Friday • $29.99 per box</p>
                  <p className="sub-desc">Your weekly dose of fresh, organic fruits and vegetables, delivered every Friday morning.</p>
                  <div className="sub-actions">
                    <button className="btn btn-primary" onClick={() => navigate('/shop')}>Customize Next Box</button>
                    <button className="btn-text">Skip</button>
                    <button className="btn-text">Pause</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Widgets) */}
          <div className="dash-col-right">
            {/* Profile Card */}
            <div className="dash-card profile-card">
              <div className="profile-avatar">{userInitials}</div>
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <span className="profile-email">{user.email}</span>
              </div>
              <a href="#" className="stat-link right-link">View Profile →</a>
            </div>

            {/* Quick Actions */}
            <div className="dash-card widget-card">
              <h3>Quick Actions</h3>
              <ul className="quick-actions-list">
                <li><a href="#"><IconBag /> Shop Now</a></li>
                <li><a href="#"><IconRefresh /> Manage Subscription</a></li>
                <li><a href="#"><IconAddress /> Add Delivery Address</a></li>
                <li><a href="#"><IconPayment /> Update Payment Method</a></li>
              </ul>
            </div>

            {/* Next Delivery Card */}
            <div className="dash-card widget-card">
              <h3><IconBag /> Next Delivery</h3>
              <div className="delivery-info">
                <div className="delivery-date">
                  <span>Wednesday, May 1</span>
                  <span className="badge badge-neutral">In 7 days</span>
                </div>
                {/* <p>Your Weekly Organic Box is on the way! You can customize your items before the cutoff.</p> */}
                <button className="btn btn-primary w-100 mt-3" onClick={() => navigate('/shop')}>Manage Subscription</button>
                <button className="btn-text w-100 text-center mt-2" style={{fontSize: '0.85rem'}}>Skip Next Delivery</button>
              </div>
            </div>

            {/* PurePoints Card */}
            <div className="dash-card widget-card">
              <h3><IconLeaf /> PurePoints & Rewards</h3>
              <div className="points-display">
                <span className="points-amount">350</span>
                <span className="points-label">PurePoints</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{width: '60%'}}></div>
              </div>
              <p className="points-meta">650 points until your next $10 credit</p>
              <button className="btn btn-outline w-100 mt-3">Visit Rewards Center</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;

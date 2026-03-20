import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-content">
        <div className="card">
          <h3>Your recent orders</h3>
          <p>You have no recent orders.</p>
        </div>
        <div className="card">
          <h3>Subscription Status</h3>
          <p>Active: Weekly Organic Box</p>
        </div>
      </div>

      <style>{`
        .dashboard-container {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid #E5E5E5;
          padding-bottom: 1rem;
        }
        .dashboard-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
          border: 1px solid #E5E5E5;
        }
        .card h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

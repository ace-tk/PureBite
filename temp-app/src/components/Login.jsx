import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@purebite.com' && password === 'password123') {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Try user@purebite.com / password123');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to access your PureBite account</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@purebite.com"
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password123"
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
      
      <style>{`
        .login-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F9FDF9;
        }
        .login-card {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 400px;
        }
        .login-card h2 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .login-card p {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          font-size: 1rem;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--color-secondary);
        }
        .error-message {
          background-color: #FDE8E8;
          color: #9B1C1C;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        .w-100 {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Login;

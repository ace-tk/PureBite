import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../index.css';

const Signup = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>
        <p>Join PureBite for fresh, healthy meals</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required 
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ marginBottom: 0 }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Login</Link>
          </p>
        </div>
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
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Signup;

import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const navigateToAccount = () => navigate('/account');

  return (
    <div className="login-container">
      <h2 className="login-title">Signin to your PopX account</h2>
      <p className="login-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mb-4">
        <label className="login-label">Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="login-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="login-label">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button
        className="login-btn"
        onClick={navigateToAccount}
      >
        Login
      </button>
    </div>
  );
} 
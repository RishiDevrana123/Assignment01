import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-inner">
        <h2 className="welcome-title">Welcome to PopX</h2>
        <p className="welcome-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button
          className="welcome-btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button
          className="welcome-btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
} 
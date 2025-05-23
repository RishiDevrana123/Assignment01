import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [agency, setAgency] = useState('yes');
  const [fullName, setFullName] = useState('Marry Doe');
  const [phoneNumber, setPhoneNumber] = useState('Marry Doe');
  const [email, setEmail] = useState('Marry Doe');
  const [password, setPassword] = useState('Marry Doe');
  const [companyName, setCompanyName] = useState('Marry Doe');

  const navigate = useNavigate();
  const navigateToAccount = () => navigate('/account');

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create your PopX account</h2>
      <form className="signup-form">
        <div>
          <label className="signup-label">Full Name<span className="required">*</span></label>
          <input className="signup-input" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <label className="signup-label">Phone number<span className="required">*</span></label>
          <input className="signup-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label className="signup-label">Email address<span className="required">*</span></label>
          <input className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="signup-label">Password <span className="required">*</span></label>
          <input type="password" className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label className="signup-label">Company name</label>
          <input className="signup-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div>
          <label className="signup-label">Are you an Agency?<span className="required">*</span></label>
          <div className="signup-radio-group">
            <label className="signup-radio-label">
              <input type="radio" name="agency" value="yes" checked={agency === 'yes'} onChange={() => setAgency('yes')} className="signup-radio" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="signup-radio-label">
              <input type="radio" name="agency" value="no" checked={agency === 'no'} onChange={() => setAgency('no')} className="signup-radio" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <button type="button" className="signup-btn" onClick={navigateToAccount}>Create Account</button>
      </form>
    </div>
  );
} 
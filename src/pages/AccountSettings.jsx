import './AccountSettings.css';

export default function AccountSettings() {
  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>
      <div className="account-card">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="account-img"
        />
        <div>
          <div className="account-name">
            Marry Doe
            <span className="account-badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1em',height:'1em',verticalAlign:'middle'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0h-7.5m7.5 0v1.5a2.25 2.25 0 01-2.25 2.25h-3A2.25 2.25 0 018.25 10.5V9m7.5 0V5.25M6.75 21h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 7.5v11.25A2.25 2.25 0 006.75 21z" />
              </svg>
            </span>
          </div>
          <div className="account-email">Marry@Gmail.Com</div>
        </div>
      </div>
      <div>
        <p className="account-desc">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam</p>
      </div>
    </div>
  );
} 
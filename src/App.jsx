import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <div className="app-bg-center">
      <div className="app-mobile-container">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<AccountSettings />} />
            <Route path="*" element={<Navigate to="/account" replace />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

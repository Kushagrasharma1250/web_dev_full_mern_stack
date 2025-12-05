import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MERN Task Manager</h1>
      </div>
      <div className="navbar-menu">
        {user && (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

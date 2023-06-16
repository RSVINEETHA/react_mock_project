import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ activeTab, onTabClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 80,
        right: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Link
        to="/"
        onClick={() => onTabClick('Introduction')}
        style={{ color: activeTab === 'Introduction' ? 'red' : 'black', margin: '0 10px' }}
      >
        Introduction
      </Link>
      <Link
        to="/team"
        onClick={() => onTabClick('Team')}
        style={{ color: activeTab === 'Team' ? 'red' : 'black', margin: '0 10px' }}
      >
        Team
      </Link>
      <Link
        to="/about"
        onClick={() => onTabClick('What We Do')}
        style={{ color: activeTab === 'What We Do' ? 'red' : 'black', margin: '0 10px' }}
      >
        About us
      </Link>
      <Link
        to="/signin"
        onClick={() => onTabClick('Sign In')}
        style={{ color: activeTab === 'Sign In' ? 'red' : 'black', margin: '0 10px' }}
      >
        Sign In
      </Link>
    </div>
  );
}

export default Sidebar;

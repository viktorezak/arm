import React from 'react';
import './navbar.css';

const Navbar = ({ user, onMenuClick }) => {
  return (
    <nav className="navbar">
      <button className="menu-button" onClick={onMenuClick}>☰</button>
      <h1>АРМ БЮДЖЕТИРОВАНИЕ</h1>
      <div className="user-info">
        {user ? (
          <div>
            <span className="user-name">{user.name} ({user.role})</span>
            <button className="logout-button" onClick={user.logout}>Выйти</button>
          </div>
        ) : (
          <button className="login-button" onClick={user.login}>Вход</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


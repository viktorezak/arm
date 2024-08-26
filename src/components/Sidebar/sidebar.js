import React from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Закрыть</button>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/admin">Администрирование</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({ sheets, activeSheet, onSheetChange }) => {
  return (
    <div className="tabs">
      {sheets.map((sheet, index) => (
        <button
          key={index}
          className={activeSheet === index ? 'active' : ''}
          onClick={() => onSheetChange(index)}
        >
          {sheet.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
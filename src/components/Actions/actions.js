import React from 'react';
import './actions.css';

const Actions = ({ onExport, onGetData }) => {
  return (
    <div className="actions">
      <button onClick={onExport}>Экспорт</button>
      <button onClick={onGetData}>Получить данные</button>
    </div>
  );
};

export default Actions;
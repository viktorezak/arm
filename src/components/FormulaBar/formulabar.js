import React from 'react';
import './formulabar.css'

const FormulaBar = ({ selectedCell, selectedFormula }) => {
  return (
    <div className="formula-bar">
      <span className="selected-cell">{selectedCell}</span>
      <span>fx</span>
      <input type="text" value={selectedFormula} readOnly />
    </div>
  );
};

export default FormulaBar;
import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Filters from './components/Filters/filters';
import FormulaBar from './components/FormulaBar/formulabar';
import Actions from './components/Actions/actions';
import Table from './components/Table/table';
import Tabs from './components/Tabs/tabs';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(''); // Здесь будет состояние для пользователя
  const [filters, setFilters] = useState({});
  const [selectedCell, setSelectedCell] = useState('');
  const [selectedFormula, setSelectedFormula] = useState('');
  const [data, setData] = useState([
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'],
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5'],
    ['150', '643', '0.32', '11', '=A6*(B6*C6)+D6'],
    ['172', '474', '0.51', '11', '=A7*(B7*C7)+D7'],
    ['188', '371', '0.59', '11', '=A8*(B8*C8)+D8'],
    ['162', '731', '0.21', '10', '=A9*(B9*C9)+D9'],
  ]); // Табличные данные
  const [activeSheet, setActiveSheet] = useState(0);
  const [sheets, setSheets] = useState([{ name: 'Лист1' }, { name: 'Лист2' }]);

  const handleMenuClick = () => setIsSidebarOpen(!isSidebarOpen);
  const handleFiltersChange = (filters) => setFilters(filters);
  const handleCellSelect = (cell) => setSelectedCell(cell);
  const handleFormulaSelect = (formula) => setSelectedFormula(formula);
  const handleCellChange = (changes) => {
    // Обработка изменений в ячейке
  };
  const handleExport = () => {
    // Логика для экспорта данных
  };
  const handleGetData = () => {
    // Логика для получения данных
  };

  return (
    <div className="App">
      <Navbar user={user} onMenuClick={handleMenuClick} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleMenuClick} />
      <Filters onFiltersChange={handleFiltersChange} />
      <FormulaBar selectedCell={selectedCell} selectedFormula={selectedFormula} />
      <Actions onExport={handleExport} onGetData={handleGetData} />
      <Tabs sheets={sheets} activeSheet={activeSheet} onSheetChange={setActiveSheet} />
      <Table data={data} onCellSelect={handleCellSelect} onFormulaSelect={handleFormulaSelect}  onCellChange={handleCellChange} />
    </div>
  );
}

export default App;

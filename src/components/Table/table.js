import React, { useRef } from 'react';
import { HyperFormula } from 'hyperformula';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, ruRU } from 'handsontable/i18n';
import 'handsontable/dist/handsontable.full.min.css';
import './table.css';

registerAllModules();
registerLanguageDictionary(ruRU);

const Table = ({ data, onCellSelect, onFormulaSelect, onCellChange }) => {
  const hotRef = useRef(null);

  const getFormulaFromCell = (row, column) => {
    // Получаем экземпляр HyperFormula
    const hfInstance = hotRef.current.hotInstance.getPlugin('formulas').engine;

    // Проверяем, есть ли формула в указанной ячейке
    const cellFormula = hfInstance.getCellFormula({ row, col: column, sheet: 0 });

    return cellFormula;
  };




  return (
    <HotTable
      ref={hotRef}
      data={data}
      formulas={{
        engine: HyperFormula,
      }}
      colHeaders={true}
      rowHeaders={true}
      contextMenu={true}
      language="ru-RU"
      fixedRowsBottom={2}
      stretchH="all"
      height="auto" 
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      afterSelection={(row, column) => {
        const rowHeader = hotRef.current.hotInstance.getRowHeader(row);
        const colHeader = hotRef.current.hotInstance.getColHeader(column);

        // Получение координат ячейки
        onCellSelect(`${colHeader}${rowHeader}`);

        // Получение формулы (если есть)
        const formula = getFormulaFromCell(row, column);
        if (formula) {
          onFormulaSelect(formula);  // Передаем формулу
        } else {
          onFormulaSelect('Нет формулы');  // Сообщение, если формулы нет
        }
      }}
      afterChange={(changes) => {
        onCellChange(changes);
      }}
    />
  );
};

export default Table;
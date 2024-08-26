import React, { useState } from 'react';
import './filters.css';

const Filters = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    year: '',
    direction: '',
    form: '',
    ivc: '',
    periodType: '',
    monthStart: '',
    monthEnd: ''
  });

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    onFiltersChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters-container-inline">
      <div className="filter-item-inline">
        <label htmlFor="year">Выбор года:</label>
        <select id="year" onChange={(e) => handleFilterChange('year', e.target.value)}>
          <option value="">Год</option>
          {/* Заполнить список годов */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="direction">Выбор направления:</label>
        <select id="direction" onChange={(e) => handleFilterChange('direction', e.target.value)}>
          <option value="">Направление</option>
          {/* Заполнить список направлений */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="form">Выбор формы:</label>
        <select id="form" onChange={(e) => handleFilterChange('form', e.target.value)}>
          <option value="">Форма</option>
          {/* Заполнить список форм */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="ivc">Выбор ИВЦ:</label>
        <select id="ivc" onChange={(e) => handleFilterChange('ivc', e.target.value)}>
          <option value="">ИВЦ</option>
          {/* Заполнить список ИВЦ */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="periodType">Выбор типа периода</label>
        <select id="periodType" onChange={(e) => handleFilterChange('periodType', e.target.value)}>
          <option value="">Тип периода</option>
          {/* Заполнить список типов периодов */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="monthStart">Месяц начала</label>
        <select id="monthStart" onChange={(e) => handleFilterChange('monthStart', e.target.value)}>
          <option value="">Начало</option>
          {/* Заполнить список месяцев */}
        </select>
      </div>
      <div className="filter-item-inline">
        <label htmlFor="monthEnd">Месяц окончания</label>
        <select id="monthEnd" onChange={(e) => handleFilterChange('monthEnd', e.target.value)}>
          <option value="">Окончание</option>
          {/* Заполнить список месяцев */}
        </select>
      </div>
    </div>
  );
};

export default Filters;
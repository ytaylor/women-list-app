import { useState, useEffect } from 'react';
import List from './components/List';
import Filters from './components/Filters';
import data from './data/women.json';
import './styles/App.scss';


const App = () => {
  const [filters, setFilters] = useState({ country: '', field: '' });

  const countries = [...new Set(data.map(w => w.country))];
  const fields = [...new Set(data.map(w => w.field))];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = data.filter(w =>
    (!filters.country || w.country === filters.country) &&
    (!filters.field || w.field === filters.field)
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>AfroLegacy</h1>
        <p>Celebrando el legado, la lucha y los logros de mujeres negras extraordinarias</p>
      </header>

      <Filters countries={countries} fields={fields} selected={filters} onChange={handleFilterChange} />
      <List women={filtered} />
    </div>
  );
};

export default App;

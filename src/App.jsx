import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { useState } from "react";

import List from "./components/List";
import AddWoman from "./components/AddWoman";
import AcercaDe from "./components/AcercaDe";

import data from "./data/women.json";
import "./styles/App.scss";

const App = () => {
  const [women, setWomen] = useState(data);

  const handleAddWoman = (newWoman) => {
    const id = women.length + 1;
    setWomen([...women, { id, ...newWoman }]);
  };

  return (
    <Router>
      <header className="header-elegante">
        <div className="header-inner">
          <h1 className="logo"><Link to="/">Black Heroines</Link></h1>
          <p className="subtitle">Celebrando el legado de mujeres negras extraordinarias</p>
          <nav className="nav-elegante">
            <Link to="/">Inicio</Link>
            <Link to="/nueva">Añadir mujer</Link>
            <Link to="/acerca">Acerca</Link>
          </nav>
        </div>
      </header>


      <main className="app">
        <Routes>
          <Route path="/" element={<List women={women} />} />
          <Route path="/nueva" element={<AddWoman onAdd={handleAddWoman} />} />
          <Route path="/acerca" element={<AcercaDe />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

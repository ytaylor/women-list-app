import "./styles/App.scss";
import List from "./components/List";
import data from "./data/women.json";
import Filters from "./components/Filters";

function App() {
  return (
    <div>
      <Filters
        countries={countries}
        fields={fields}
        selected={filters}
        onChange={handleFilterChange}
      />
      <List women={data} />
    </div>
  );
}

export default App;

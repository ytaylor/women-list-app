import "../styles/App.scss";
import Filters from "./Filters";

function App() {
  return (
    <div>
      <Filters
        countries={countries}
        fields={fields}
        selected={filters}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default App;

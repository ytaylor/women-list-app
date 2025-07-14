import '../styles/App.scss';
import List from './components/List';
import data from './data/women.json';

function App() {
  return (
    <div>
      <List women={data} />
    </div>
  )
}

export default App;

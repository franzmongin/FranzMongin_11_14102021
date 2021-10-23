import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Location from './components/Location/Location'
import Tag from './components/Tag/Tag'

function App() {
  return (
    <div className="App">
      <Location/>
      <Tag/>
      <Dropdown dropdownWidth='half'/>
    </div>
  );
}

export default App;

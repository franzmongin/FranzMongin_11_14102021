import './App.css';
import Dropdown from './components/Dropdown';
import Location from './components/Location'
import Tag from './components/Tag'

function App() {
  return (
    <div className="App">
      <Location/>
      <Tag/>
      <Dropdown dropDownWidth="half"/>
    </div>
  );
}

export default App;

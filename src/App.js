import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Location from './components/Location/Location'
import Tag from './components/Tag/Tag'
import React from "react";
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LocationCard from './pages/LocationCard/LocationCard';
import About from './pages/About/About';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/location:id"><LocationCard/></Route>
        <Route path="/about"><About/></Route>
        <Dropdown heading='Equipements' dropdownWidth='half'/>
        <Dropdown heading='Fiabilité'/>
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;

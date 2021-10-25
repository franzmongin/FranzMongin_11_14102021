import React, { Component } from 'react'
import TopBar from '../../components/TopBar/TopBar';
import './Home.css'
import data from '../../data/data.js'
import Location from '../../components/Location/Location';


class Home extends Component {
  constructor(props){
    super(props)
    this.state= {locations :{data}}
    console.log(data)
    console.log(this.state.locations.data)
  }
  componentDidMount(){
    console.log(this.state.locations.data)
  }
  render() {
    // const list = this.state.locations.map(e => <Location/>)
    return <div className="homepage">
        <TopBar/>
        <div className="banner">
             <span className="layer">Chez vous, partout et ailleurs</span>
        </div>
        <div className="locations-list">
          {this.state.locations.data.map((e)=>{
            return <Location data={e} key={`location-${e.id}`}/>
          })}
        </div>
    </div>

  }
}

export default Home;
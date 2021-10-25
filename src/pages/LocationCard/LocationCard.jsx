import React, { Component } from 'react'
import TopBar from '../../components/TopBar/TopBar';
import './LocationCard.css'
import data from '../../data/data.js'
import Footer from '../../components/Footer/Footer';
import Carroussel from '../../components/Carroussel/Carroussel';



class LocationCard extends Component {
  constructor(props){
    super(props);
    this.state = {id: props.match.params.id}
    this.location = data.filter(location => location.id === this.state.id)[0]
  }
  
  render() {
    return <><div className="location-card page">
        <TopBar/>
        <Carroussel pictures={this.location.pictures}/>
        
    </div>
    <Footer/></>

  }
}

export default LocationCard;
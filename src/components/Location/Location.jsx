import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Location.css'


class Location extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return <Link to={`location/${this.props.data.id}`} className="location-container" style={{ 
      backgroundImage: `url("${this.props.data.cover}")` 
    }}><div className="">
      <div className="location-title">
        {this.props.data.title}
      </div>
    </div>
    </Link>

  }
}

export default Location;
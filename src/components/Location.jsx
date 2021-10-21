import React, { Component } from 'react'
import styled from 'styled-components'


const Coucou = styled.div`
    width:340px;
    height:340px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-color: #FF6060

`

class Location extends Component {
  render() {
    return <Coucou/>

  }
}

export default Location;
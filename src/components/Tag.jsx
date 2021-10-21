import React, { Component } from 'react'
import styled from 'styled-components'


const Coucou = styled.div`
    width:150px;
    height:25px;
    background: #FF6060;
    border-radius:10px;
    display:flex;
    justify-content:center;
    span{
        color:white;
        font-size:14px;
        font-weight:500;
    }
`

class Tag extends Component {
  render() {
    return (
    <Coucou>
        <span>coucou</span>
    </Coucou>
    )
    
  }
}

export default Tag;
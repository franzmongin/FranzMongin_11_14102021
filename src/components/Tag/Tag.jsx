import React, { Component } from 'react'
import styled from 'styled-components'
import './Tag.css'


const TagContainer = styled.div`
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
    <div className="tag">
        <span>coucou</span>
    </div>
    )
    
  }
}

export default Tag;
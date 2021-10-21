import React, { Component } from 'react'
import styled from 'styled-components'


const Coucou = styled.div`
    width:${props=> props.dropDownWidth === 'half'? "582px": "1023px"};
    height:25px;
    background: #FF6060;
    border-radius:10px;
    display:flex;
    justify-content:center;
    span{
        color:white;
        font-size:14px;
        font-weight:500;
        display: ${props=> props.oppened? 'block': 'none' }
    }
`

class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {openned: false}
    }
  render() {
    return (
    <Coucou openned={this.state.oppened} dropDownWidth ={this.props.dropDownWidth}>
        <span>coucou</span>
    </Coucou>
    )
    
  }
}

export default Dropdown;
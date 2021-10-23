import React, { Component } from 'react'
import styled from 'styled-components'
import './Dropdown.css'



class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {openned: false}
    }
  render() {
    if(this.props.dropdownWidth=== 'half'){
        return (
                
            <div className="dropdown dropdown-half">
                <div className="dropdown-heading"></div>
                <div className="dropdown-content"></div>
            </div>
        )
    }else{
        return (
    
        <div className="dropdown">
            <div className="dropdown-heading"></div>
            <div className="dropdown-content"></div>
        </div>
        )
    }
  }
}

export default Dropdown;
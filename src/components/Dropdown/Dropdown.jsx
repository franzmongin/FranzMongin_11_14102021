import React, { Component } from 'react'
import './Dropdown.css'
import upArrow from './up-arrow.svg'
import downArrow from './down-arrow.svg'


class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {openned: false}
        this.handleClickDropdown = this.handleClickDropdown.bind(this)
    }
    handleClickDropdown(){
        this.state.openned===false? this.setState({openned:true}) : this.setState({openned:false});
    }

  render() {
        return (
                
            <div className={`dropdown ${ this.props.dropdownWidth=== 'half'? 'dropdown-half': ''}`}>
                <div onClick={this.handleClickDropdown} className="dropdown-heading">
                    <span>{this.props.heading}</span>
                    {this.state.openned===false? <img className="up-arrow" src={upArrow} alt="up arrow" width="20px"/>
                    :
                    <img className="down-arrow" src={downArrow} alt="down arrow" width="20px"/>}</div>
                {this.state.openned === true ?  <div className="dropdown-content"></div>: ''}
            </div>
        )
  }
}

export default Dropdown;
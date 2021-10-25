import React, { Component } from 'react'
import './Carroussel.css'
import data from '../../data/data.js'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'



class Carroussel extends Component {
  constructor(props){
    super(props);
    this.state = {pictures: props.pictures, currentPicture: 0}
    this.maxImage = this.state.pictures.length - 1
    console.log(this.maxImage)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
  }
  handleClickNext(){
      if(this.state.currentPicture === this.maxImage){
        this.setState({currentPicture: 0})
      }else{
    this.setState(function(previousState) {
        return {
            currentPicture: previousState.currentPicture + 1
        };
    });
    }
  }
  handleClickPrevious(){
      if(this.state.currentPicture === 0){
        this.setState({currentPicture: this.maxImage })
      }else{
        this.setState(function(previousState) {
                return {
                    currentPicture: previousState.currentPicture - 1
                };
        });
      }
    
  }
  render() {
    return <div className="carroussel" style={{ 
      backgroundImage: `url("${this.state.pictures[this.state.currentPicture]}")` 
    }}>
        <img src={leftArrow} alt="previous" className="left-arrow" width="50px" onClick={this.handleClickPrevious}/>
        <img src={rightArrow} alt="next" className="right-arrow" width="50px" onClick={this.handleClickNext}/>
    </div>

  }
}

export default Carroussel;
import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import './TopBar.css'
import {Link} from 'react-router-dom'



class TopBar extends Component {
    constructor(props){
        super(props)
        this.state ={pathName:''}
    }
    
    componentDidMount(){
        const pathName = window.location.pathname;
        this.setState({pathName: pathName})  

    }
  render() {
      
    return <div className="top-bar">
        <img src={logo} alt="kasa" />
        <nav>
            {this.state.pathName === '/'?<ul>
                
                <li className='current-page-link'>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>: <ul>
                
                <li >
                    <Link to="/">Accueil</Link>
                </li>
                <li className='current-page-link'>
                    <Link to="/">A propos</Link>
                </li>
            </ul>}
            
        </nav>
        
    </div>

  }
}

export default TopBar;
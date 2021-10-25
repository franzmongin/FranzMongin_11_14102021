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
            <ul>
                
                <li className={`page-link ${this.state.pathName === '/' ? 'current-page-link': ''}`}>
                    <Link to="/">Accueil</Link>
                </li>
                <li className={`page-link ${this.state.pathName === '/about' ? 'current-page-link': ''}`}>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
            
        </nav>
        
    </div>

  }
}

export default TopBar;
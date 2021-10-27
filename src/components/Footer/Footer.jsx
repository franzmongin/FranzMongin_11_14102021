import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from './logo-footer.svg'



class Footer extends Component {
    constructor(props){
        super(props)
    }
    
  render() {
      
    return <div className="footer">
        <img src={logo} alt="" />
        <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </div>

  }
}

export default Footer;
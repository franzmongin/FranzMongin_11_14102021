import React, { Component } from 'react'
import './Footer.css'
import logo from './logo-footer.svg'



class Footer extends Component {
    
  render() {
      
    return <div className="footer">
        <img src={logo} alt="" />
        <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </div>

  }
}

export default Footer;
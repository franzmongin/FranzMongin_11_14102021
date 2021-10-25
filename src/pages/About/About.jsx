import React, { Component } from 'react'
import TopBar from '../../components/TopBar/TopBar';


class About extends Component {
  render() {
    // const list = this.state.locations.map(e => <Location/>)
    return <div className="about">
      <TopBar/>
        A propos
    </div>

  }
}

export default About;
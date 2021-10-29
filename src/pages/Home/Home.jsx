import React, { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.css";
import data from "../../data/data.js";
import Location from "../../components/Location/Location";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: { data } };
  }
  render() {
    return (
      <>
        <div className="homepage page">
          <TopBar />
          <div className="banner">
            <div className="layer">
              <span className="layer-1st-part">Chez vous,</span>
              <span className="layer-2nd-part">partout et ailleurs</span>
            </div>
          </div>
          <div className="locations-container">
            <div className="locations-list">
              {this.state.locations.data.map((e) => {
                return <Location data={e} key={`location-${e.id}`} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;

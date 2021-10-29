import React, { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./LocationCard.css";
import data from "../../data/data.js";
import Footer from "../../components/Footer/Footer";
import Carroussel from "../../components/Carroussel/Carroussel";
import redStar from "./red-star.svg";
import greyStar from "./grey-star.svg";
import { Redirect } from "react-router-dom";

class LocationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: data.filter(
        (location) => location.id === props.match.params.id
      )[0],
    };
  }
  componentDidMount() {}

  render() {
    let ids = [];
    data.forEach((e) => {
      ids.push(e.id);
    });
    console.log(ids);
    if (!ids.includes(this.props.match.params.id)) {
      return <Redirect to="/error404" />;
    } else {
      const rating = this.state.location.rating;
      let redStars = [];
      let greyStars = [];
      for (let i = 0; i < rating; i++) {
        redStars.push(i);
      }
      for (let i = 0; i < 5 - rating; i++) {
        greyStars.push(i);
      }
      return (
        <>
          <div className="location-card page">
            <TopBar />
            <main>
              <Carroussel pictures={this.state.location.pictures} />
              <div className="location-properties">
                <div className="heading-and-tags">
                  <div className="heading">
                    <h1>{this.state.location.title}</h1>
                    <h2>{this.state.location.location}</h2>
                  </div>
                  <div className="location-tags">
                    {this.state.location.tags.map((e) => {
                      return <Tag key={`tag-${e.toLowerCase()}`} tagName={e} />;
                    })}
                  </div>
                </div>
                <div className="host-and-rate">
                  <div className="host">
                    <div className="host-name">
                      <span className="firstname" style={{ display: "block" }}>
                        {this.state.location.host.name.substring(
                          0,
                          this.state.location.host.name.indexOf(" ")
                        )}
                      </span>
                      <span className="lastname" style={{ display: "block" }}>
                        {this.state.location.host.name.substring(
                          this.state.location.host.name.indexOf(" ") + 1
                        )}
                      </span>
                    </div>
                    <div className="host-avatar-container">
                      <img
                        src={this.state.location.host.picture}
                        alt={this.state.location.host.picture}
                        className="host-avatar"
                      />
                    </div>
                  </div>
                  <div className="location-rate">
                    {redStars.map((e, index) => {
                      return (
                        <img
                          src={redStar}
                          className="star"
                          id={`red-star-${index}`}
                          key={`red-star-${index}`}
                          alt="red star"
                        />
                      );
                    })}
                    {greyStars.map((e, index) => {
                      return (
                        <img
                          src={greyStar}
                          className="star"
                          id={`grey-star-${index}`}
                          key={`grey-star-${index}`}
                          alt="grey star"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <Dropdown
                dropdownWidth="half"
                heading="Description"
                content={this.state.location.description}
              />
              <Dropdown
                dropdownWidth="half"
                heading="Equipements"
                content={this.state.location.equipments}
              />
            </main>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default LocationCard;

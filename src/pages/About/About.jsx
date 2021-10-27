import React, { Component } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdowns: [
        {
          heading: "Fiabilité",
          content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        },
        {
          heading: "Respect",
          content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          heading: "Service",
          content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
          heading: "Sécurité",
          content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="about-page page">
          <TopBar />
          <div className="banner" style>

          </div>
          {this.state.dropdowns.map((e) => {
            return <Dropdown heading={e.heading} content={e.content} />;
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default About;

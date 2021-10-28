import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import "./ErrorPage.css";
import logo from "./404-logo.svg";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="error-page page">
          <TopBar />
          <div className="error-page-content">
            <img src={logo} alt="404-logo" width="600" className="logo" />
            <span className="error-message">
              Oups! La page que vous demandez n'existe pas
            </span>
            <Link to="/" className="back-home-link">
              Retourner sur la page d'accueil
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ErrorPage;

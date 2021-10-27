import React, { Component } from "react";
import "./Dropdown.css";
import upArrow from "./up-arrow.svg";
import downArrow from "./down-arrow.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.getDropdownContent = this.getDropdownContent.bind(this);
    this.newContent = this.getDropdownContent(props.content);
    this.state = { openned: false, content: this.newContent };
    this.handleClickDropdown = this.handleClickDropdown.bind(this);
  }
  componentDidMount() {}
  handleClickDropdown() {
    this.state.openned === false
      ? this.setState({ openned: true })
      : this.setState({ openned: false });
  }
  getDropdownContent(content) {
    if (Array.isArray(content)) {
      return (
        <ul className="dropdown-content-list">
          {content.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      );
    }
    return content;
  }

  render() {
    return (
      <div
        className={`dropdown ${
          this.props.dropdownWidth === "half" ? "dropdown-half-desktop" : ""
        }`}
      >
        <div onClick={this.handleClickDropdown} className="dropdown-heading">
          <span className="dropdown-title">{this.props.heading}</span>
          {this.state.openned === false ? (
            <img
              className="up-arrow"
              src={downArrow}
              alt="up arrow"
              width="20px"
            />
          ) : (
            <img
              className="down-arrow"
              src={upArrow}
              alt="down arrow"
              width="20px"
            />
          )}
        </div>
        {this.state.openned === true ? (
          <div className="dropdown-content">{this.state.content}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Dropdown;

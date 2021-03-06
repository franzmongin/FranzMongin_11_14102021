import React, { Component } from "react";
import styled from "styled-components";
import "./Tag.css";

const TagContainer = styled.div`
  width: 150px;
  height: 25px;
  background: #ff6060;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  span {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;

class Tag extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tag">
        <span>{this.props.tagName}</span>
      </div>
    );
  }
}

export default Tag;

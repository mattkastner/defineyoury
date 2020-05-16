import React, { Component } from "react";
import button from "../../../utilities/assets/images/button.png";

class Cards extends Component {
  render() {
    return (
      <div className="card box">
        <div className="images">
          <img
            src={this.props.img}
            className="card-img-top imgcard"
            alt="img"
          />
          <img src={button} className="btnimg" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title title">{this.props.title}</h5>
          <p className="card-text description">{this.props.description}</p>
          <a href="#" className="text-warning linkcard">
            {this.props.linkTitle}
          </a>
        </div>
      </div>
    );
  }
}

export default Cards;

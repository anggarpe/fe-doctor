import React, { Component } from "react";
import "../../assets/css/card.css";

export default class ServiceHomeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="avatar">
          <img
            className="serv avatar"
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="title-container">
          <h5 className="title">{this.props.title}</h5>
        </div>
        
          <p className="des">{this.props.desc}</p>
        
      </div>
    );
  }
}

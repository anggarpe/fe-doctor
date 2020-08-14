import React, { Component } from "react";
// import ControlledCarousel from "../components/Carousel";
import ServiceHome from "../components/service_home";
import "./Styles.css"

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          {/* <ControlledCarousel /> */}
          <ServiceHome />
        </div>
      </div>
    );
  }
}

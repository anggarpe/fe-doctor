import React, { Component } from "react";

//style css
import "../assets/css/container.css"

//import component
// import ControlledCarousel from "../components/Carousel";
import ServiceHome from "../components/service_home";


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

import React, { Component } from "react";

//style css
import "../assets/css/container.css"

//import component
// import ControlledCarousel from "../components/Carousel";
import ServiceHome from "../components/service_home";
import Page from "./Page";



export default class home extends Component {
  render() {
    return (
      <Page>
        <div className="home">
          {/* <ControlledCarousel /> */}
          <ServiceHome />
        </div>
      </Page>
    );
  }
}

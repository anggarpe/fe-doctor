import React, { Component } from "react";
import "./Style.css";
import ServiceHomeCard from "./card/ServiceHomeCard";

export default class ServiceHome extends Component {
  render() {
    return (
      <div className="item-container">
        <img className="banner" src="./images/banner.jpg" alt="banner" />
        <div className="subitem-container">
          <div className="text-service-container">
            <h3>OUR SERVICES</h3>
          </div>
          <div className="service-home-list">
            <ServiceHomeCard
              image="https://picsum.photos/id/219/200"
              title="GENERAL CHECK UP"
              desc="Diperuntukkan bagi pasien yang memerlukan pemeriksaan hematology,
            kimia darah, natif (pemeriksaan faces)"
            />
            <ServiceHomeCard
              image="https://picsum.photos/id/284/200"
              title="SURGERY"
              desc="Kanker, Tumor, Kutil, Patah Tulang, Kebiri, dan lain-lain"
            />
            <ServiceHomeCard
              image="https://picsum.photos/id/1025/200"
              title="DAY CARE"
              desc="Khusus Hewan Anjing dan Kucing"
            />
          </div>
          <a href="/service">
            <button className="all-service">View All Service</button>
          </a>
        </div>
      </div>
    );
  }
}

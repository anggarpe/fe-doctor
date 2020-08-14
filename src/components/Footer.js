import React, { Component } from "react";
import "./Style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container-footer">
          <div className="row no-gutters">
            <div className="col no-gutters">
              <div className="leftside">
                <h4>CONTACT US</h4>
                <ul className="list-unstyled">
                  <li>Address: Gg. Kelinci No.20</li>
                  <li>Kandang Jaran, Kota Mati</li>
                  <li>Daerah Khusus Ibu Ibu</li>
                </ul>
              </div>
            </div>

            <div className="col no-gutters">
              <div className="rightside"></div>
            </div>
          </div>
          {/* <hr /> */}
        </div>

        <div className="foot">
          <div className="row">
            <p className="col-lg">
              &copy;{new Date().getFullYear()} KLINIK HEWAN JACE | All Right
              Reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

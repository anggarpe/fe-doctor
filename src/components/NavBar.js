import React, { Component } from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import "../assets/css/component.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="bg-light justify-content-between"
        sticky="top"
      >
        {/* <Nav className="center"> */}
        <Navbar.Brand href="#home"> 
        KLINIK HEWAN JACE
          {/* <img className="logo" src="images/logo.png" alt="logo" /> */}
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="#facility">Facilities</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
        {/* </Nav> */}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

        // <nav>
        // <img className="logo" src="images/logo.png" alt="logo" />
        //   <ul className="nav__links">
        //     <Link to="/">
        //     <li>
        //       <a href="/">Home</a>
        //     </li>
        //     </Link>
        //     <li>
        //       <a href="/service">Services</a>
        //     </li>
        //     <li>
        //       <a href="#Home">Facilities</a>
        //     </li>
        //     <li>
        //       <a href="#Home">About Us</a>
        //     </li>
        //   </ul>
        // <a className="cta" href="#ContactUs"><button>Contact</button></a>
        // </nav>
    );
  }
}

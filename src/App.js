import React from "react";
import "./App.css";
import Home from "./containers/home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Service from "./containers/Service";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <Home/> */}
        <Service/>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
        </Switch>
    </Router> */}
        <Footer />
      </div>
  );
}

export default App;

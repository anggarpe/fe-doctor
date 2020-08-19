import React from "react";
import "./App.css";
import Home from "./containers/home";
import { Route } from "react-router-dom";
import Servicess from "./containers/Service";
import Facility from "./containers/facility";

function App() {
  return (
      <>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Servicess} />
          <Route path="/facility" component={Facility}/>
    </>

  );
}

export default App;

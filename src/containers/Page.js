import React, {Component} from 'react';
import NavBar from "../components/NavBar";
import Home from "./home";
import Footer from "../components/Footer";
import {withRouter} from 'react-router-dom'

class Page extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default withRouter(Page);
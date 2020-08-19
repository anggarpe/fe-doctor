import React, {Component} from 'react';
import CardService from "../components/card/CardService";
import CardFacility from "../components/card/cardFacility";
import Page from "./Page";

class Facility extends Component {
    render() {
        return (
            <Page>

            <div className="service">
                <div className="service-list">
                    <CardFacility/>
                </div>
            </div>
            </Page>
        );
    }
}

export default Facility;
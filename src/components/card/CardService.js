import React, { Component } from 'react'
import "../../assets/css/card.css"

export default class CardService extends Component {
    render() {
        return (
            <div className="card-container"> 
                <a className="link" href="#detail_service">
                <div>
                    <img className="card-avatar" src={this.props.image} alt="ugd"/>
                </div>
                <div>
        <h3 className="title">{this.props.title}</h3>
        <h5 className="subtitle">{this.props.subtitle}</h5>
                </div>
                </a>
            </div>
        )
    }
}

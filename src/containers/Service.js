import React, { Component } from 'react'
import CardService from '../components/card/CardService'
import "../assets/css/container.css"

export default class Service extends Component {
    render() {
        return (
            <div className="service">
                <div className="service-animal">
                    <h5>MELAYANI HEWAN</h5>
                    <div className="service-list">
                        <text>ANJING</text>
                        <text>KUCING</text>
                        <text>IGUANA</text>
                        <text>ANJING</text>
                        <text>KUCING</text>
                        <text>IGUANA</text>
                        <text>ANJING</text>
                        <text>KUCING</text>
                        <text>IGUANA</text>
                        <text>ANJING</text>
                        <text>KUCING</text>
                        <text>GAJAH</text>
                        <text>IGUANA</text>
                    </div>
                </div>
                <div className="service-list">

                <CardService image="https://picsum.photos/100" title="UGD" subtitle="EMERGENCY"/>
                <CardService image="https://picsum.photos/100" title="KONSULTASI" subtitle="CONSULTATION"/>
                <CardService image="https://picsum.photos/100" title="LAB" subtitle="LAB"/>
                <CardService image="https://picsum.photos/100" title="OPERASI BEDAH" subtitle="SURGERY"/>
                <CardService image="https://picsum.photos/100" title="GIPS & PIN" subtitle=""/>
                <CardService image="https://picsum.photos/100" title="PERAWATAN AKUPUNTUR" subtitle="ACUPUNCTURE"/>
                <CardService image="https://picsum.photos/100" title="RAWAT INAP" subtitle="INPATIENT"/>
                <CardService image="https://picsum.photos/100" title="VAKSINASI" subtitle="VACCINE"/>
                </div>
                
            </div>
        )
    }
}

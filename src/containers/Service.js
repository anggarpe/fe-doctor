import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from "../config/axious"
import Axios from "axios";
import CardService from '../components/card/CardService'
import "../assets/css/container.css"
import Page from "./Page";

 class Service extends Component {
    componentDidMount() {
     let varietyUrl = "/variety";
     let serviceUrl = "/service";

     const reqVariety = axios.get(varietyUrl);
     const reqService = axios.get(serviceUrl);

     Axios.all([reqVariety, reqService])
         .then(Axios.spread((...response)=>{
             console.log("ini hasil fetch yaa ",response[1].data.data.result)
             this.props.fetch(response[0].data.data.result)
             this.props.fet(response[1].data.data.result)
         })).catch(e => {
             console.log("error nih fetchingnya ", e)
     })


        // axios.get("/variety").then(res => {
        //     console.log(res.data.data);
        //     this.props.fetch(res.data.data.result);
        // }).catch(e=>{
        //     console.log("Failed to get data: ",e)
        // })
    }




     render() {
        console.log("ini data lho",this.props.srvRdc)
         // if (this.props.varRdc.length === 0) return "Loading"
        let variet = this.props.varRdc.map((data, index)=>{
            return (
                <text key={index}>{data.name.toUpperCase()}</text>
            )
        })

         let serv = this.props.srvRdc.map((data, index)=>{
             return (
                 <CardService key={index} image={data.image} title={data.name.toUpperCase()} subtitle={data.subtitle.toUpperCase()}/>
             )
         })
        return (
            <Page>
            <div className="service">
                <div className="service-animal">
                    <h5 id="animal">MELAYANI HEWAN</h5>
                    <div className="animal-list">
                        {variet}
                    </div>
                </div>
                <div className="service-list">
                    {serv}
                </div>
                
            </div>
            </Page>
        )
    }
}

const mapStateToProps = (state) =>({
    varRdc: state.variety.varieties,
    srvRdc: state.service.services,
})

const mapDispatchToProps = (dispatch) =>{
    return {
        fetch: (data) => dispatch({type: "ADD_VARIETY", data:data}),
        fet: (b) => dispatch({type: "ADD_SERVICE", data:b})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);

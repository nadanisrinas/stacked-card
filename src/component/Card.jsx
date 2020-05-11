import React,{useState,useEfect} from "react"
import CardLayer from "./CardLayer.jsx"
import "../assets/scss/Card.scss"


const Card = (props) => {
    return(
        <div className="cards-box">
            {props.children}
        </div>    
    )
}

export default Card
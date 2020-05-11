import React from "react"
import {withRouter} from "react-router-dom"
import "../assets/scss/Modal.scss"
const Modal = (props) => {
    console.log(props);
    const onHandleBack = () => {
        props.history.goBack();
    }
    return(
        <div className="container">
            <div className="modal-wrapper">
                <div className="modal">
                <p>{props.location.content}</p> 
                <div className="btn btn-back" onClick={onHandleBack}><i className="fa fa-share"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Modal
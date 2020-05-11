import React from "react"

const CardLayer = (props) => {
    return(
        <div className="card" onClick={props.detail(props.id)}>
            <div className="content-placeholder">
                <div className="row">
                    <div className="img" data-letter={props.content}></div>
                    <div className="img-text"></div>
                </div>
                <div className="text text--l"></div>
                <div className="text text--m"></div>
                <div className="text text--s"></div>
            </div>
        </div>
    )
}

export default CardLayer
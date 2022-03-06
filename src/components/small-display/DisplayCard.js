import React from "react";



function DisplayCard(props) {
    return (
        <div className="displayCardWrap">
            <div className="cardHead">
                <h4>{props.name}</h4>
            </div>
            <div className="pic">
                <img src={`../img/${props.img}`} />
            </div>
            <div className="addyWrap">
                <p>{props.street}</p>
                <p>{props.city}, {props.state} {props.zip}</p>
            </div>
        </div>
    )
}

export default DisplayCard;
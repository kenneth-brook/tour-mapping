import React from "react";
import { useNavigate } from "react-router-dom";



function DisplayCard(props) {
    console.log(props.id)
    let navigate = useNavigate();
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
            <div>
                <button onClick={() => {
                    navigate(`/location/${props.id}`)
                }}>More Info</button>
            </div>
        </div>
    )
}

export default DisplayCard;
import React from "react";

import DisplayCard from "../small-display/DisplayCard";

import { attractionData } from "../../data/attraction";

function Attractions() {
    const portData = attractionData
    return (
        <div className="attractionsWrap">
            <h3>Local Attractions</h3>
            <div className="attractionCardWrap">
            {portData.map((card) => {
                return (
                  <DisplayCard
                  key={card.id}
                  name={card.name}
                  street={card.street}
                  city={card.city}
                  state={card.state}
                  zip={card.zip}
                  img={card.img}
                   />  
                ); 
            })}
            
        </div>
        </div>
    )
}

export default Attractions;
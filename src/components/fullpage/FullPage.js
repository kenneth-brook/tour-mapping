import React from "react";
import { useParams } from "react-router-dom";

import { attractionData } from "../../data/attraction";



function FullPage() {
    const data = attractionData
    const { id } = useParams()
    const goodId = parseInt({ id }.id)
    let dataFilter = attractionData.filter(obj => {
        return obj.id === goodId
    })
    console.log(dataFilter)
    return (
        <div className="fullPageWrap">
            <div className="fullPageHead">
                <h4>{dataFilter[0].name}</h4>
            </div>
            <div className="pic">
                <img src={`../img/${dataFilter[0].img}`} />
            </div>
            <div className="addyWrap">
                <p>{dataFilter[0].street}</p>
                <p>{dataFilter[0].city}, {dataFilter[0].state} {dataFilter[0].zip}</p>
            </div>
        </div>
    )
}

export default FullPage;
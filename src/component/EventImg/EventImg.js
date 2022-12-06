import React from "react";
import './EventImgStyle.css';

function EventImg({img, header, details}){
    return(
        <div className="col">
            <img src={img} alt="/" />
            <h4>{header}</h4>
            <p>{details}</p>
            <button className="ctn">Read More</button>
        </div>
    )
}

export default EventImg;



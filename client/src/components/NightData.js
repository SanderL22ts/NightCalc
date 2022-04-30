import React, { Component } from 'react'
import { getSunset } from "./logic/Calculate"

const NightData = ({ lat, long, date}) => {
    const sunset = getSunset(lat, long, date);

    return (
        <div>
            
            {sunset}
        </div>



    )

}

export default NightData
import React, {useState} from 'react';
import AddHours from './AddHours';

export default function CurrentHours () {


    return(
    <>
        <p>Your current hours displayed</p>
        <p>Cumulative Hours: {AddHours.current} </p>
        <p>Core Hours: {AddHours.coreHours} </p>
        <p>Regular Location Hours: {AddHours.regLocationHours}</p>
    </>
    )
}
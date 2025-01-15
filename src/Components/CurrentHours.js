import React, {useState} from 'react';
import AddHours from './AddHours';
import { Container } from 'react-bootstrap';

export default function CurrentHours () {

    console.log("here");
    console.log({AddHours});
    return(

    <Container>
        <div className="text-center">
        <p><strong>Your current hours displayed</strong></p>
        <p>Cumulative Hours: {AddHours.current} </p>
        <p>Core Hours: {AddHours.coreHours} </p>
        <p>Regular Location Hours: {AddHours.regLocationHours}</p>
        </div>

        
    </Container>

    
    )

   
}
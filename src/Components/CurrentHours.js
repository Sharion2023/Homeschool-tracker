import React, {useState} from 'react';
import AddHours from './AddHours';
import { Container } from 'react-bootstrap';

export default function CurrentHours () {


    return(

    <Container>
        <div className="text-center">
        <p>Your current hours displayed</p>
        <p>Cumulative Hours: {AddHours.current} </p>
        <p>Core Hours: {AddHours.coreHours} </p>
        <p>Regular Location Hours: {AddHours.regLocationHours}</p>
        </div>
    </Container>
    )
}
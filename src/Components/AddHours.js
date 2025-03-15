import {useState} from 'react';
import Button from 'react-bootstrap/Button'

 export default function AddHours () {



    return (
        <form className='text-center'>
            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3" value = {addHours} onChange= {handleHoursChange}>
                <option selected>Hours to log</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3">3.5</option>
                </select>
            </div>

            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3" value = {location} onChange= {handleLocationChange}>
                <option selected>Location</option>
                <option value="Home">Home Location</option>
                <option value="Other">Other</option>

                 </select>
            </div>

            <input class="btn btn-primary" type="submit" value="Submit" onSubmit={handleSubmit}></input>
             <Button>My Button</Button>
        </form>
        
        
   
    )
}
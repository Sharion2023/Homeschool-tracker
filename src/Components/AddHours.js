 import React, {useState} from 'react';

 export default function AddHours () {
     const [location, setLocation] = useState('');

     const handleLocationChange = (event) => {
        setLocation(event.target.value);
        console.log(location);
        };

     const handleSubmit = (event) => {
         event.preventDefault(); // Prevents the default form submission behavior
         // Process the submitted text here
        console.log('location changed');
         console.log('Submitted location:', location);
         // Reset the text field after submission (optional)
         setLocation('');
       };
       console.log(location)
  console.log('here');


    return (
        <form>
            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3">
                <option selected>Hours to log</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
        </form>
        
        
   
    )
}
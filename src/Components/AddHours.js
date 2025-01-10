import {useState} from 'react';
import Button from 'react-bootstrap/Button'

 export default function AddHours () {
     const [location, setLocation] = useState('');
     const [addHours, setAddHours] = useState(0);
     const [current, setCurrentHours] = useState (0);
     const [coreHours, setCoreHours] = useState (0);
     const [regLocationHours, setRegLocationHours] = useState (0);

     const handleLocationChange = (event) => {
        setLocation(event.target.value);
        console.log(location);
        };

     const handleHoursChange = (event) => {
        setAddHours(event.target.value);
        console.log(addHours);
        }

     const handleSubmit = (event) => {
         event.preventDefault(); // Prevents the default form submission behavior
         // Process the submitted text here
        console.log('location changed');
         console.log('Submitted location:', location);
         console.log('hours changed');
                  console.log('Submitted hours:', addHours);
         // Reset the text field after submission (optional)
         //setLocation('');
       };

       console.log(location)
        console.log('here');
        console.log(current);


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
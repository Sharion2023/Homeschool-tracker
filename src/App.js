import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddHours from "./Components/AddHours";
import Home from "./Components/Home";
import CurrentHours from "./Components/CurrentHours";
import { Link } from "react-router-dom";
import AddNewClass from "./Components/AddNewClass";
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  const [location, setLocation] = useState("");
  const [addHours, setAddHours] = useState(0);
  const [current, setCurrentHours] = useState(0);
  const [coreHours, setCoreHours] = useState(0);
  const [regLocationHours, setRegLocationHours] = useState(0);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };

  const handleHoursChange = (event) => {
    setAddHours(event.target.value);
    console.log(addHours);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Process the submitted text here
    console.log("location changed");
    console.log("Submitted location:", location);
    console.log("hours changed");
    console.log("Submitted hours:", addHours);
    // Reset the text field after submission (optional)
    //setLocation('');
  };

  console.log(location);
  console.log("here");
  console.log(current);

  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/AddHours" element={<AddHours />} />
    //   <Route path="/CurrentHours" element={<CurrentHours />} />
    //   <Route path="/AddNewClass" element={<AddNewClass />} />
    // </Routes>

    <>
      <Home />
      <AddHours addHours={addHours} setAddHours={setAddHours} />
      <CurrentHours />
      <AddNewClass location={location} setLocation={setLocation} />
    </>
  );
}

export default App;

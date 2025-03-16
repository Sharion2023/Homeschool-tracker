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
import { useState } from "react";
import AddNewClass from "./Components/AddNewClass";
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  const [current, setCurrentHours] = useState(0);
  const [coreHours, setCoreHours] = useState(0);
  const [regLocationHours, setRegLocationHours] = useState(0);

  // console.log(location);
  // console.log("here");
  // console.log(current);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/AddHours"
        element={<AddHours />}
        // addHours={addHours}
        // setAddHours={setAddHours}
        // location={location}
        // setLocation={setLocation}
      />
      <Route
        path="/CurrentHours"
        element={<CurrentHours />}
        current={current}
        setCurrent={setCurrentHours}
      />
      <Route path="/AddNewClass" element={<AddNewClass />} />
    </Routes>

    // <>
    //   <Home />
    //   <AddHours
    //     addHours={addHours}
    //     setAddHours={setAddHours}
    //     location={location}
    //     setLocation={setLocation}
    //   />
    //   <CurrentHours current={current} setCurrent={setCurrentHours} />
    //   <AddNewClass />
    // </>
  );
}

export default App;

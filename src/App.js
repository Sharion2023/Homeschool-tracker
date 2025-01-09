import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import AddHours from './Components/AddHours';
import Home from './Components/Home';
import CurrentHours from './Components/CurrentHours';
import { Link } from 'react-router-dom';
import AddNewClass from './Components/AddNewClass';
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  return (  
      



          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path= '/AddHours' element = {<AddHours/>} />
            <Route path= '/CurrentHours' element = {<CurrentHours/>} />
            <Route path= '/AddNewClass' element = {<AddNewClass/>} />
          </Routes>

    
        
  
  );
}

export default App;

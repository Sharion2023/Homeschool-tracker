import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import AddHours from './Pages/AddHours';
import { Routes,Route, Router } from 'react-router-dom';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  return (
    
    

    <div>
          <AddHours/>

        <Router>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path= "/AddHours" element = {<AddHours/>}></Route>
          </Routes>
        </Router>

     
    </div>
  
  );
}

export default App;

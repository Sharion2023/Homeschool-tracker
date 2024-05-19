import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import AddClass from './Components/AddHours';
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        <p>
          Welcome to Homeschool Hours Tracker
        </p>
      </h1>

      <form class="form-inline" action="/action_page.php">
        <div class="form-group">
      
    
      <a href='/AddClass'>
        <button type="button">Current Hours</button>
        </a>
      
        <a href='/AddClass'>
        <button type="button">Add Hours</button>
        </a>

      </div>
      </form>


    </div>
  );
}

export default App;

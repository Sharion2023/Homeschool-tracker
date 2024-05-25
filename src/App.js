import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import AddHours from './Pages/AddHours';
/*import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-KIT_CODE/icons'

library.add(...all)*/

function App() {
  return (
    
    <div >
      <main className='container'>
        <div>
          <h1 className="App-header">
            <p>
              Welcome to Homeschool Hours Tracker
            </p>
          </h1>
        </div>

        <div className='container'>

          <form class="form-inline" action="/action_page.php">
            <div class="form-group">
      
    
            <a className='btn btn-lg btn primary' href='/AddClass' role='button'>
            Current Hours
            </a>
      
           <a href='/AddClass'>
            <button type="button">Add Hours</button>
            </a>

            </div>
          </form>
          <AddHours/>
        </div>

      </main>
    </div>
  
  );
}

export default App;

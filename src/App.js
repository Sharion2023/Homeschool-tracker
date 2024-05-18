import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import AddClass from './Components/AddClass';
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


      <body>
      <AddClass/>
      </body>


    </div>
  );
}

export default App;

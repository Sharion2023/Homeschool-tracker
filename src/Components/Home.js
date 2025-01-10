import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'


 export default function Home()  {
    return(
        <>
        <h1 className="text-center">
        <FontAwesomeIcon icon={faSchool} />
        </h1>
        <hr></hr>


    <div className="text-center">

          <h2 className=".App-header">
            <p>
              Welcome to Homeschool Hours Tracker
            </p>
          </h2>
          <hr></hr>
    </div>

    <section>

    <div className='container'>

    <form class="form-inline" action="/action_page.php">
      <div className="text-center">


        <a className='btn btn-lg btn primary' href='/CurrentHours' role='button'>
        <button type="button">Current Hours</button>
        </a>

        <a className='btn btn-lg btn primary' href='/AddHours' role='button'>
        <button type="button">Add Hours</button>
        </a>

        <a className='btn btn-lg btn primary' href='/AddNewClass' role='button'>
        <button type="button">Add New Class</button>
        </a>

      </div>
    </form>
    </div>
    </section>
    </>
    )
}
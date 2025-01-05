import React from "react" 
 
 export default function Home()  {
    return(
        <>
    <div>

          <h1 className=".App-header">
            <p>
              Welcome to Homeschool Hours Tracker
            </p>
          </h1>
    </div>

    <section>

    <div className='container'>

    <form class="form-inline" action="/action_page.php">
      <div class="form-control">


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
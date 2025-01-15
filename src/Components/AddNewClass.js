export default function AddNewClass () {

    return(

        <div class="d-flex justify-content-center align-items-center min-vh-100" >
    
            <div class="card p-4 shadow" >
            <h4 class="card-title text-center mb-4">Enter your new class information</h4>

        <form >
            <div class="form-group" class="mt-4 mb-3">
                <label for="formGroupExampleInput">Class Name</label>
                <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Input class name"></input>
            </div>

            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3">
                <option selected>Class category</option>
                <option value="1">Math</option>
                <option value="2">Reading</option>
                <option value="3">Social Studies</option>
                <option value="4">Science</option>
                <option value="5">Language Arts</option>
                <option value="6">Elective</option>
                </select>
            </div>

            <input class="btn btn-primary" type="submit" value="Submit"></input>
    
        </form>

            </div>
        </div>
    )
}
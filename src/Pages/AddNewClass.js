export default function AddNewClass () {
    <form>
        <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Input class name"></input>
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
    
    </form>
}
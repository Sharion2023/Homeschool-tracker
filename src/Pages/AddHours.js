export default function AddHours () {
    return (
        <form>
            

            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3">
                <option selected>Hours to log</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>

            <div className="form-group">
                <select class="custom-select custom-select-lg mb-3">
                <option selected>Location</option>
                <option value="1">Home Location</option>
                <option value="2">Other</option>
                </select>
            </div>
        </form>
        
        
   
    )
}
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AddHours} from "./Pages/AddHours";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/addhours" exact>
                    <AddHours/>
                </Route>
            </Switch>
        </Router>

    )
}
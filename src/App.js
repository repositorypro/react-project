import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./components/Home";
import {Signup} from "./components/Signup";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
                <hr/>
            </nav>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
    );
}

export default App;

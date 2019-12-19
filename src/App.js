import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import MainFeed from "./components/MainFeed";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route eaxct path="/feed">
                    <MainFeed/>
                </Route>
                <Route eaxct path="/login">
                    <SignInPage/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
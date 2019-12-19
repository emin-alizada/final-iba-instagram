import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import MainFeed from "./components/MainFeed";
import UserProfile from "./components/userProfile";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";

function App() {

  return (
    <div className="App">
        {/*{isGuest && {*/}

        {/*}}*/}
        <Router>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route  path="/feed">
                    <MainFeed/>
                </Route>
                <Route  path="/login">
                    <SignInPage/>
                </Route>
                <Route  path="/profile">
                    <UserProfile/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
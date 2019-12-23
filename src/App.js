import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import SignInPage from "./components/SignInPage";
import MainFeed from "./components/MainFeed";
import UserProfile from "./components/userProfile";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import PostComment from "./components/sharedComponents/postComment";
import SearcResults from "./components/sharedComponents/searchResults";
import SettingPage from "./components/settingsPage";
import SharePost from "./components/sharedComponents/sharePost";

function App() {

  return (
    <div className="App">
{/*<SignInPage/>*/}
        {/*{isGuest && {*/}
        {/*}}*/}
        <SettingPage/>
        {/*<Router>*/}
        {/*    <Switch>*/}
        {/*        <Redirect exact from="/" to="/login" />*/}
        {/*        <Route  path="/feed" component={MainFeed} />*/}
        {/*        <Route  path="/login" component={SignInPage}/>*/}
        {/*        <Route  path="/profile" component={UserProfile}/>*/}
        {/*    </Switch>*/}
        {/*</Router>*/}

    </div>
  );
}

export default App;
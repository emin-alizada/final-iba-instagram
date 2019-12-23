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


import {connect} from "react-redux"


class App extends React.Component {
    render() {
        return (
            <div className="App">
                {console.log("authorized in app:", this.props.isAuthorized)}
                <Router>
                    {this.props.isAuthorized ?
                        <Switch>
                            <Route path="/feed" component={MainFeed}/>
                            {/*<Route path="/login" component={SignInPage}/>*/}
                            <Route path="/profile" component={UserProfile}/>
                            <Redirect to="/feed"/>
                        </Switch>
                        :
                        <Switch>
                            <Route path="/login" component={SignInPage}/>
                            <Redirect to="/login"/>
                        </Switch>
                    }
                </Router>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
        isAuthorized: store.currentUser.isAuthorized
    }
};


export default connect(mapStateToProps)(App);





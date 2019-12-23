import React from "react";
import "./css/SignInPage.scss";
import SignInPanel from './SigninRegisterPanel/index'
import ShareTheMoment from "./ShareTheMoment";
import './css/SiginPage-media.scss'
import PostComment from "../sharedComponents/postComment";
import RegisterPanel from "./RegisterPanel";
import Navbar from "../sharedComponents/Navbar";
import SettingPage from "../settingsPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";

class SignInPage extends React.Component {
    render() {
        console.log("Sign in page", this.props);
        return (
            <div className={"sign-in-page"}>
                {/*<Navbar/>*/}
                <Switch>
                    <Route exact path={`/login`} component={SignInPanel}/>
                    <Route exact path={`/login/signup`} component={RegisterPanel}/>
                </Switch>
                <ShareTheMoment/>
                {/*<PostComment/>*/}

            </div>
        );
    }
}

export default SignInPage;
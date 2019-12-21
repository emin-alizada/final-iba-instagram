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
        return (
            <div className={"sign-in-page"}>
                <Navbar/>
                <Switch>
                    <Route exact path={`/login`}>
                        <SignInPanel/>
                    </Route>
                    <Route exact path={`/login/signup`}>
                        <RegisterPanel/>
                    </Route>
                </Switch>
                <ShareTheMoment/>
                {/*<PostComment/>*/}
            </div>
        );
    }
}

export default SignInPage;
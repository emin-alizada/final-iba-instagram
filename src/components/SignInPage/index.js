import React from "react";
import "./css/SignInPage.scss";
import SignInPanel from './SigninRegisterPanel/index'
import ShareTheMoment from "./ShareTheMoment";
import './css/SiginPage-media.scss'
import PostComment from "../sharedComponents/postComment";
import RegisterPanel from "./RegisterPanel";
import Navbar from "../sharedComponents/Navbar";
import SettingPage from "../settingsPage";



class SignInPage extends React.Component {
    render() {
        return (
            <div className={"sign-in-page"}>
                <Navbar/>
                {/*<SignInPanel/>*/}
                <RegisterPanel/>
                <ShareTheMoment/>
                {/*<PostComment/>*/}
                <SettingPage/>

            </div>
        );
    }
}

export default SignInPage;
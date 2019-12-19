import React from "react";
import "./css/SignInPage.scss";
import SignInPanel from './SigninRegisterPanel/index'
import ShareTheMoment from "./ShareTheMoment";
import './css/SiginPage-media.scss'
import PostComment from "../sharedComponents/postComment";



class SignInPage extends React.Component {
    render() {
        return (
            <div className={"sign-in-page"}>
                <SignInPanel/>
                <ShareTheMoment/>
                <PostComment/>


            </div>
        );
    }
}

export default SignInPage;
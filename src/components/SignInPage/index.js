import React from "react";
import "./css/SignInPage.scss";
import Signinpanel from './SigninRegisterPanel/index'
import Sharethemoment from "./ShareTheMoment";
import './css/SiginPage-media.scss'



class Signinpage extends React.Component {
    render() {
        return (
            <div className={"sign-in-page"}>
                <Signinpanel/>
                <Sharethemoment/>

            </div>
        );
    }
}

export default Signinpage;
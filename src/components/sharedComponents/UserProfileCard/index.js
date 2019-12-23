import React, {Component} from 'react';
import "./UserProfileCard.scss"
import Icon from "../Icon";
import ProfilePhoto from "../profilePhoto";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

class UserProfileCard extends Component {
    render() {
        return (
            <div className={"userInfoContainer"}>
                <div className={"userInfoContainer_setting"}>
                    <Link to={`/profile/settings`}>
                        <Icon name={"settings"}/>
                    </Link>
                </div>
                <div className={"userInfoContainer_userInfo"}>
                    <ProfilePhoto source={require("./img/profilePhoto1.png")}/>
                    <p className={"userInfoContainer_nickname"}>anna_white</p>
                    <p className={"userInfoContainer_bio"}>Graphic designer, UX/UI Student</p>
                    <div className={"followInfoContainer"}>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Post</p>
                            <p className={"followInfo_counter"}>30</p>
                        </div>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Followers</p>
                            <p className={"followInfo_counter"}>100</p>
                        </div>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Following</p>
                            <p className={"followInfo_counter"}>150</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfileCard;
import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";
import Navbar from "../sharedComponents/Navbar";
import "./mainFeed.scss"
import Icon from "../sharedComponents/Icon/index";

import SettingPage from "../settingsPage";
import {Route} from "react-router-dom";

class MainFeed extends Component {
    render() {
        console.log('MainFeed = ', this.props);

        return (
            <div>
                <Navbar/>

                <Route path="/feed/settings" component={SettingPage}/>
                <div className={"bgc"}>
                    <div className={"container container-for-feed"}>
                        <Feed/>
                        <div className={"userProfileCardContainer"}>
                            <div className={"userProfileCardContainer_settingContainer"}>
                                <Icon name={"settings"}/>
                            </div>
                            <div className={"userProfileCardContainer_userInfo"}>
                                <img src={require("./img/profilePhoto1.png")} className={"userProfileCardContainer_profilePhoto"}/>
                                <p className={"userProfileCardContainer_username"}>Username</p>
                                <div className={"userProfileCardContainer_followContainer"}>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Post</p>
                                        <p className={"userProfileCardContainer_followCounter"}>10</p>
                                    </div>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Followers</p>
                                        <p className={"userProfileCardContainer_followCounter"}>150</p>
                                    </div>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Following</p>
                                        <p className={"userProfileCardContainer_followCounter"}>110</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFeed;
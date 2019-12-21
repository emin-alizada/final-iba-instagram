import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";
import Navbar from "../sharedComponents/Navbar";
import "./mainFeed.scss"
import UserProfileCard from "../sharedComponents/UserProfileCard";
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
                        <div className={"fixed-main-feed-profile"}>
                            <div className={"fixed-main-feed-profile-wrapper"}>
                                <MainFeedProfile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFeed;
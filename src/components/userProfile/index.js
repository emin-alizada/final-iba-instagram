import React from "react";
import "./css/pageContainer.scss";
import  "./css/userProfile.scss";
import "./css/wallpaper.scss";
import "./css/centerContainer.scss";
import "./css/userInfo.scss";
import "./css/userMedia.scss";
import MediaCard from "./mediaCard/index"
import Icon from "../sharedComponents/Icon";
import Navbar from "../sharedComponents/Navbar/index"
import ProfilePhoto from "../sharedComponents/profilePhoto/index";
import UserProfileCard from "../sharedComponents/UserProfileCard";
import SettingPage from "../settingsPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

class UserProfile extends React.Component {
    render() {
        return (
            <div className={"pageContainer"}>
                <Navbar/>
                <Route path={`/profile/settings`} component={SettingPage}/>
                <div className={"userProfileContainer"}>
                    <div className={"wallpaper"}></div>
                    <div className={"centerContainer"}>
                       <UserProfileCard/>
                        <div className={"userMediaContainer"}>
                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>

                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>

                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>

                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>

                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>

                            <MediaCard/>
                            <MediaCard/>
                            <MediaCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
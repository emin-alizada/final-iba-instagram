import React from "react";
import "./css/pageContainer.scss";
import  "./css/userProfile.scss";
import "./css/wallpaper.scss";
import "./css/centerContainer.scss";
import "./css/userInfo.scss";
import "./css/userMedia.scss";
import MediaCard from "./mediaCard/index"

class UserProfile extends React.Component {
    render() {
        return (
            <div className={"pageContainer"}>
                <div className={"userProfileContainer"}>
                    <div className={"wallpaper"}></div>
                    <div className={"centerContainer"}>
                        <div className={"userInfoContainer"}></div>
                        <div className={"userMediaContainer"}>
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
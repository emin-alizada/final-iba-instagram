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


class UserProfile extends React.Component {
    render() {
        return (
            <div className={"pageContainer"}>
                <Navbar/>
                <div className={"userProfileContainer"}>
                    <div className={"wallpaper"}></div>
                    <div className={"centerContainer"}>
                        <div className={"userInfoContainer"}>
                            <div className={"userInfoContainer_setting"}>
                                <Icon name={"settings"}></Icon>
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
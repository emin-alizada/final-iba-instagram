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

import {connect} from "react-redux"


class UserProfileCard extends Component {
    render() {
        console.log("from user profile card", this.props.user);
        return (
            <div className={"userInfoContainer"}>
                <div className={"userInfoContainer_setting"}>
                    <Link to={`/profile/settings`}>
                        <Icon name={"settings"}/>
                    </Link>
                </div>
                <div className={"userInfoContainer_userInfo"}>
                    <ProfilePhoto source={this.props.user.profile_photo}/>
                    <p className={"userInfoContainer_nickname"}>{this.props.user.username}</p>
                    <p className={"userInfoContainer_bio"}>{this.props.user.description}</p>
                    <div className={"followInfoContainer"}>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Post</p>
                            <p className={"followInfo_counter"}>{this.props.user.count_posts}</p>
                        </div>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Followers</p>
                            <p className={"followInfo_counter"}>{this.props.user.number_followers}</p>
                        </div>
                        <div className={"followInfoContainer_followInfo"}>
                            <p className={"followInfo_text"}>Following</p>
                            <p className={"followInfo_counter"}>{this.props.user.number_follow}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};

export default connect(mapStateToProps)(UserProfileCard);
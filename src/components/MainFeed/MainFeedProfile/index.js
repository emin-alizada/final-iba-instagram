import React, {Component} from 'react';
import "./mainFeedProfile.scss"
import Icon from "../../sharedComponents/Icon";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";
import SettingPage from "../../settingsPage";

import {connect} from "react-redux"


class MainFeedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            user: {},
        };
    }


    render() {
        {console.log(this.props.user)}
        return (
            <div className={"main-feed-profile"}>
                <div className={"main-feed-profile-settings"}>
                    <Link to={`/feed/settings`}>
                        <Icon name={"settings"}/>
                    </Link>
                </div>
                <img src={this.props.user.profile_photo} className={"main-feed-profile-photo"} alt=""/>
                <h3 className={"main-feed-profile-username"}>{this.props.user.username}</h3>
                <div className={"main-feed-profile-info"}>
                    <div className="main-feed-profile-info-text">
                        <p>Post</p>
                        <p>{this.props.user.count_posts}</p>
                    </div>
                    <div className="main-feed-profile-info-text">
                        <p>Following</p>
                        <p>{this.props.user.number_follow}</p>
                    </div>
                    <div className="main-feed-profile-info-text">
                        <p>Followers</p>
                        <p>{this.props.user.number_followers}</p>
                    </div>
                </div>
                <div className={"main-feed-profile-icons"}>
                    <div className={"main-feed-profile-icons-wrapper"}><Icon name={"likeNotification"}/></div>
                    <div className={"main-feed-profile-icons-wrapper"}><Icon name={"subscriptionNotification"}/></div>
                    <div className={"main-feed-profile-icons-wrapper"}><Icon name={"commentNotification"}/></div>
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

export default connect(mapStateToProps)(MainFeedProfile);
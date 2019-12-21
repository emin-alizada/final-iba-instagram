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

class MainFeedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            user: {},
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            await fetch("https://my-json-server.typicode.com/emin-alizada/fakeServer/users/1")
                .then(result => result.json())
                .then( user => {
                        this.setState({
                            isLoaded: true,
                            user: user,
                        })
                    }
                );
        };
        fetchData();
    };


    render() {
        return (
            <div className={"main-feed-profile"}>
                <div className={"main-feed-profile-settings"}>
                    <Link to={`/feed/settings`}>
                        <Icon name={"settings"}/>
                    </Link>
                </div>
                <img src={this.state.user.profile_photo} className={"main-feed-profile-photo"} alt=""/>
                <h3 className={"main-feed-profile-username"}>{this.state.user.username}</h3>
                <div className={"main-feed-profile-info"}>
                    <div className="main-feed-profile-info-text">
                        <p>Post</p>
                        <p>23</p>
                    </div>
                    <div className="main-feed-profile-info-text">
                        <p>Following</p>
                        <p>{this.state.user.number_followers}</p>
                    </div>
                    <div className="main-feed-profile-info-text">
                        <p>Followers</p>
                        <p>{this.state.user.number_follow}</p>
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

export default MainFeedProfile;
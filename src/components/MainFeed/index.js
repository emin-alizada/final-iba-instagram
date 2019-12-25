import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";
import Navbar from "../sharedComponents/Navbar";
import "./mainFeed.scss"
import Icon from "../sharedComponents/Icon/index";

import SettingPage from "../settingsPage";
import {Link, Route} from "react-router-dom";
import SearcResults from "../sharedComponents/searchResults"
import SharePost from "../sharedComponents/sharePost"
import PostComment from "../sharedComponents/postComment";


import {connect} from "react-redux"

class MainFeed extends Component {
    render() {
        return (
            <div>
                <Route path="/feed" component={Navbar}/>


                <Route path="/feed/settings" component={SettingPage}/>
                <Route path="/feed/search_username" component={SearcResults}/>
                <Route path="/feed/recommendations" component={SearcResults}/>
                <Route path="/feed/post" component={PostComment}/>
                <Route path="/feed/new" component={SharePost}/>
                <div className={"bgc"}>
                    <div className={"container container-for-feed"}>
                        <Route path="/feed" component={Feed}/>
                        <div className={"userProfileCardContainer"}>
                            <div className={"userProfileCardContainer_settingContainer"}>
                                <Link to={`/feed/settings`}>
                                    <Icon name={"settings"}/>
                                </Link>
                            </div>
                            <div className={"userProfileCardContainer_userInfo"}>
                                <img src={this.props.user.profile_photo}
                                     className={"userProfileCardContainer_profilePhoto"}/>
                                <p className={"userProfileCardContainer_username"}>{this.props.user.username}</p>
                                <div className={"userProfileCardContainer_followContainer"}>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Post</p>
                                        <p className={"userProfileCardContainer_followCounter"}>{this.props.user.count_posts}</p>
                                    </div>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Followers</p>
                                        <p className={"userProfileCardContainer_followCounter"}>{this.props.user.number_followers}</p>
                                    </div>
                                    <div className={"userProfileCardContainer_followInfo"}>
                                        <p className={"userProfileCardContainer_followType"}>Following</p>
                                        <p className={"userProfileCardContainer_followCounter"}>{this.props.user.number_follow}</p>
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

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};

export default connect(mapStateToProps)(MainFeed);
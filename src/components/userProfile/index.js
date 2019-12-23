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

import ShareBtn from '../sharedComponents/sharePostBTN/index'
import SearcResults from "../sharedComponents/searchResults";


import UserProfileCard from "../sharedComponents/UserProfileCard";
import SettingPage from "../settingsPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import {connect} from "react-redux"
import Preloader from "../sharedComponents/Proloader";


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserPosts: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const fetchData = async () => {
            await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}/posts`)
                .then(result => result.json())
                .then( async posts => {
                    this.setState({
                        isLoaded: true,
                        currentUserPosts: posts,
                    });
                });
        };
        fetchData();
    }

    render() {
        return (
            <div className={"pageContainer"}>
                <Navbar/>
                <Route path={`/profile/settings`} component={SettingPage}/>
                {this.state.isLoaded ?
                    <div className={"userProfileContainer"}>
                        <div className={"wallpaper"}></div>
                        <div className={"centerContainer"}>
                            <UserProfileCard/>
                            <div className={"userMediaContainer"}>
                                {this.state.currentUserPosts.map( post => (
                                    <MediaCard key={post.id} image_url={post.image_url}  like_counter={post.like_counter} comments_counter={post.comments_counter} />
                                ))}

                            </div>
                        </div>
                    </div>
                    :<Preloader/>
                }
                {console.log(this.state.currentUserPosts)}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};


export default connect(mapStateToProps)(UserProfile);
import './icon.scss'
import React, {Component} from 'react';

import commentNotification from "./img/commentNotification.png"
import commentPost from "./img/commentPost.png"
import likeNotification from "./img/likeNotification.png"
import likePost from "./img/likePost.png"
import logo from "./img/logo.png"
import options from "./img/options.png"
import passwordLogIn from "./img/passwordLogIn.png"
import profile from "./img/profile.png"
import save from "./img/save.png"
import search from "./img/search.png"
import settings from "./img/settings.png"
import sharePost from "./img/sharePost.png"
import subscriptionNotification from "./img/subscriptionNotification.png"
import usernameLogIn from "./img/usernameLogIn.png"
import styled from 'styled-components';

class Icon extends Component {
    render() {
        const icons = [
            {
                type: "commentNotification",
                url: commentNotification,
                classes: ""
            },
            {
                type: "commentPost",
                url: commentPost,
                classes: "mediaCard_btnIcon"
            },
            {
                type: "likeNotification",
                url: likeNotification,
                classes: "mediaCard_btnIcon"
            },
            {
                type: "likePost",
                url: likePost,
                classes: ""
            },
            {
                type: "logo",
                url: logo,
                classes: "elementContainer_logo"
            },
            {
                type: "options",
                url: options,
                classes: "options-button"
            },
            {
                type: "passwordLogIn",
                url: passwordLogIn,
                classes: "password-icon"
            },
            {
                type: "profile",
                url: profile,
                classes: "leftMenu_profileIcon"
            },
            {
                type: "save",
                url: save,
                classes: ""
            },
            {
                type: "search",
                url: search,
                classes: "leftMenu_searchIcon"
            },
            {
                type: "settings",
                url: settings,
                classes: "userInfoContainer_setting_icon"
            },
            {
                type: "sharePost",
                url: sharePost,
                classes: "sharePost"
            },
            {
                type: "subscriptionNotification",
                url: subscriptionNotification,
                classes: ""
            },
            {
                type: "usernameLogIn",
                url: usernameLogIn,
                classes: "username-icon"
            },
        ];
        const icon = icons.find(icon =>{
            return this.props.name === icon.type
        });
        // console.log(icon.url);
        return (
            //if we need send then this implementation
            <img //style={{
                //     width: this.props.size,
                //     height:this.props.size,
                //     objectFit: 'contain',
                //     objectPosition: 'center'
                // }}
                 src={icon.url}
                 className={icon.classes} alt=""/>
        );
    }
}

export default Icon;
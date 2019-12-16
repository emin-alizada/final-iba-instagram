import './icon.scss'
import React, {Component} from 'react';

class Icon extends Component {
    render() {
        const icons = [
            {
                type: "commentNotification",
                url: "img/commentNotification.png",
                classes: ""
            },
            {
                type: "commentPost",
                url: "img/commentPost.png",
                classes: "feed-post-footer-icon"
            },
            {
                type: "likeNotification",
                url: "img/likeNotification.png",
                classes: ""
            },
            {
                type: "likePost.png",
                url: "img/likePost.png",
                classes: "feed-post-footer-icon"
            },
            {
                type: "logo",
                url: "img/logo.png",
                classes: ""
            },
            {
                type: "options",
                url: "img/options.png",
                classes: "feed-post-footer-icon"
            },
            {
                type: "passwordLogIn",
                url: "img/passwordLogIn.png",
                classes: ""
            },
            {
                type: "profile",
                url: "img/profile.png",
                classes: ""
            },
            {
                type: "save",
                url: "img/save.png",
                classes: "feed-post-footer-icon"
            },
            {
                type: "search",
                url: "img/search.png",
                classes: ""
            },
            {
                type: "settings",
                url: "img/settings.png",
                classes: ""
            },
            {
                type: "sharePost",
                url: "img/sharePost.png",
                classes: "feed-post-footer-icon"
            },
            {
                type: "subscriptionNotification",
                url: "img/subscriptionNotification.png",
                classes: ""
            },
            {
                type: "usernameLogIn",
                url: "img/usernameLogIn.png",
                classes: ""
            },
        ];
        const icon = icons.find(icon =>{
            return this.props.name === icon.type
        });
        return (
            <img src="./img/usernameLogIn.png" className={icon.classes} alt=""/>
        );
    }
}

export default Icon;
import React, {Component} from 'react';
import "./feed.scss"
import Preloader from "../../sharedComponents/Proloader";
import Icon from "../../sharedComponents/Icon/index";

import {connect} from "react-redux"


class Feed extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            posts: [],
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}/feed`)
                .then(result => result.json())
                .then( async posts => {
                    this.setState({
                        isLoaded: true,
                        posts: posts,
                    });
                });
        };
        fetchData();
    };


    render() {
        // {console.log(this.props.user)}
        {console.log(this.state.posts)}
        return (
            <div className="feed">
                {this.state.posts.map(item => 
                    <div className={"feed_card"} key={item.id}>
                    <div className={"feed_header"}>
                        <div className={"feed_header_container"}>
                            <img src={item.user.profile_photo} className={"feed_profilePhoto"}/>
                            <div className={"feed_userInfo"}>
                            <p className={"feed_username"}>{item.user.username}</p>
                            <p className={"feed_postDate"}>{}</p>
                        </div>
                    </div>
                        <Icon name={"options"} className={"feed_option"}/>
                    </div>
                    <img src={item.image_url} className={"feed_postImage"}/>
                    <div className={"feed_footer"}>
                        <div className={"feed_iconContainer"}>
                            <div className={"feed_icon"}>
                                <Icon name={"likeNotification"}/>
                                <span>{item.like_counter}</span>
                            </div>
                            <div className={"feed_icon"}>
                                <Icon name={"commentPost"}/>
                                <span>{item.comments_counter}</span>
                            </div>
                        </div>
                        <div className={"feed_descriptionContainer"}>
                           <p><b className={"feed_descriptionUsername"}>{`${item.user.username}`}</b> {item.description}</p>
                        </div>
                        <p className={"feed_commentCounter"}>view {item.comments_counter} comments</p>
                        <div className={"feed_commentContainer"}>
                            <input type="text" placeholder="write comment..." className={"feed_inputComment"}/>
                            <button className={"feed_sendBtn"}>send</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        );
    }

}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};

export default connect(mapStateToProps)(Feed);
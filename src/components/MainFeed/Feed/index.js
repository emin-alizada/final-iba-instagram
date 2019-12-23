import React, {Component} from 'react';
import "./feed.scss"
import Preloader from "../../sharedComponents/Proloader";
import Icon from "../../sharedComponents/Icon";

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
                {this.state.isLoaded ? this.state.posts.map((item, i) => (
                    <div key={item.id} className="feed-post">
                        <div className="feed-post-header">
                            <img src={item.user.profile_photo} className="feed-post-header-pp" alt=""/>
                                <div className="feed-post-header-text">
                                    <h3 className="feed-post-header-text-username">{item.user.username}</h3>
                                    <p className="feed-post-header-text-date">{item.date} 09:41</p>
                                </div>
                                <Icon name={"sharePost"}/>
                                <Icon name={"options"}/>
                        </div>
                        <img src={item.image_url} className="feed-post-photo" alt=""/>
                            <div className="feed-post-footer">
                                <div className="feed-post-footer-icon"><Icon name={"likePost"}/></div>
                                <div className="feed-post-footer-icon"><Icon name={"commentPost"}/></div>
                                <div className="feed-post-footer-icon"><Icon name={"save"}/></div>
                            </div>
                        <div className="feed-post-comment-container">
                            <div className="feed-post-comment">
                                <p className="feed-post-comment-username">{item.user.username}</p>
                                <p className="feed-post-comment-itself">{item.description}</p>
                            </div>
                            <a className="feed-post-comment-view-all" href="#">view all Comments</a>
                            <form className="feed-post-comment-new" onSubmit={event => {
                                event.preventDefault();
                                const comment ={
                                    comment_itself: event.target.querySelector("input").value,
                                    commenter:{
                                        id: this.props.user.id
                                    }
                                };
                                console.log("comment:", comment);
                                console.log("item id:", item.id);
                                const sendComment = async () => {
                                    await fetch(`https://fp-instagram.herokuapp.com/posts/${item.id}/comments`,{
                                        headers: {
                                            "Content-Type": "application/json",
                                            "Accept": "application/json",
                                            // "Origin": "http://localhost:3000"
                                        },
                                        method: "POST",
                                        body: JSON.stringify(comment)
                                    }).then(response => {
                                        alert("Comment is added");
                                    });
                                };
                                    sendComment();
                                    console.log("Fetch is called");
                            }} action="">
                                <input type="text" className="feed-post-comment-new-text"
                                       placeholder="write comment..."/>
                                    <input type="submit" value="send" className="feed-post-comment-new-submit"/>
                            </form>
                        </div>
                    </div>
                )) : <Preloader/>}
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
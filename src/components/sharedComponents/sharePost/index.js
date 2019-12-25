import React from "react";
import "./css/sharePost.scss"
import Icon from "../Icon";
import './css/sharePost-media.scss'

import {connect} from "react-redux"


class SharePost extends React.Component{
    render() {
        return(
            <div className={"share-post"}  onClick={event=>{
                if(event.target===event.currentTarget){
                    this.props.history.goBack();
                }
            }}>
                <div className="share-post-window">
                    <Icon name={"logo"}/>
<p className="share-post-window-header">Share Your Moments</p>
                    <form action="" className={"share-post-form"} onSubmit={event => {
                        event.preventDefault();
                        const post = {
                            description: event.target.querySelectorAll("input")[0].value,
                            image_url: event.target.querySelectorAll("input")[1].value
                        };
                        const addPost = async () => {
                            console.log(this.props.user.id);
                            await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}/posts`, {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",
                                    // "Origin": "http://localhost:3000"
                                },
                                method: "POST",
                                body: JSON.stringify(post)
                            }).then(response => {
                                alert("Posted Successfully");
                            });
                        };
                        addPost();
                    }}>
                        <input type="text" placeholder={"Add a Caption"} className={"post-description"}/>
                        <input type="text" placeholder={"Post URL"} className={"post-url"} />
                        <input type="submit" className={"share-post-btn"}/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};

export default connect(mapStateToProps)(SharePost);
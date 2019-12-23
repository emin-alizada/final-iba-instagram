import React from "react";
import "./css/sharePost.scss"
import Icon from "../Icon";
import './css/sharePost-media.scss'
class SharePost extends React.Component{
    render() {
        return(
            <div className={"share-post"}>
                <div className="share-post-window">
                    <Icon name={"logo"}/>
<p className="share-post-window-header">Share Your Moments</p>
                    <form action="" className={"share-post-form"}>
                        <input type="text" placeholder={"Add a Caption"} className={"post-description"}/>
                        <input type="text" placeholder={"Post URL"} className={"post-url"} />
                        <input type="submit" className={"share-post-btn"}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SharePost;
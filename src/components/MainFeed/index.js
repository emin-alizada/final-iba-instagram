import React, {Component} from 'react';
import Feed from "./Feed";
import MainFeedProfile from "./MainFeedProfile";
import Navbar from "../sharedComponents/Navbar";
import "./mainFeed.scss"
import PostComment from "../sharedComponents/postComment";
import SharePost from "../sharedComponents/sharePost";

class MainFeed extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {/*<PostComment/>*/}
                <SharePost/>
                <div className={"bgc"}>
                    <div className={"container container-for-feed"}>
                        <Feed/>
                        <div className={"fixed-main-feed-profile"}>
                            <div className={"fixed-main-feed-profile-wrapper"}>
                                <MainFeedProfile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFeed;
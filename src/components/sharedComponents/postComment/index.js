import React from "react";
import Icon from "../Icon";
import './css/postComment.scss'
import PostedComment from "./postedComment";
class PostComment extends React.Component {
    render() {

        return (

            <div className={"post-comment"}>
                <div className={"post-comment-window"}>
                    <img src={require("./img/post-comment-dog.png")} alt=""/>
                    <div className={"comment-section"}>
                        <div className="comment-section-top">
                            <div className={"comment-section-user"}>
                                <img src={require("./img/laura-comment.png")} alt="" className={"comment-section-user-img"}/>
                                <p className={"comment-section-username"}>laura.stanley</p>
                            </div>
                            <Icon name = {"options"}/>
                        </div>

                        <div className={"posted-comments"}>
                            <PostedComment/>
                            <PostedComment/>
                            {/*<div className={"comment"}>*/}
                            {/*    <img src={require("img/maria-comment.png")} alt="" className={"commenter-img"}/>*/}
                            {/*    <div className={"comment-details"}>*/}
                            {/*        <div className={"commenter-name-and-comment"}>*/}
                            {/*            <p className={"commenter-name"}>mari.aa</p>*/}
                            {/*            <p className="commenter-comment">Sweety</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="post-comment-like-count">
                                <img src={require("./img/postCommentWindow-Icon.png")} alt="" className={"like-count-icon"}/>
                                <p className="count-number">98 Likes</p>
                            </div>
                        </div>
                            <div className="write-comment">
                                <input type="text" className={"write-comment-input"} placeholder={"write something..."}/>
                                <button className="send-comment-btn">send</button>
                                {/*<div className={"send-comment-btn"}>*/}
                                {/*    /!*<p className="send-comment-btn-arrow"> send </p>*!/*/}
                                {/*</div>*/}

                            </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default PostComment;
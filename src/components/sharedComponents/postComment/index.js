import React from "react";
import Icon from "../Icon";
import './css/postComment.scss'
import './css/postComment-media.scss'
import PostedComment from "./postedComment";


class PostComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const fetchData = async () => {
            await fetch(`https://fp-instagram.herokuapp.com/posts/${this.props.location.state.post.id}/comments`)
                .then(result => result.json())
                .then( async comments => {
                    this.setState({
                        comments: comments,
                    });
                });
        };
        fetchData();
    }

    render() {
        console.log(this.props.location.state);
        console.log(this.state.comments);
        return (
            <div className={"post-comment"} onClick={event=>{
                if(event.target===event.currentTarget){
                    this.props.history.goBack();
                }
            }}>
                <div className={"post-comment-window"}>
                    <img src={this.props.location.state.post.image_url} alt="" className={"posted-img"}/>
                    {/*<div className={"blah-blah"}>*/}
                    {/*    */}
                    {/*</div>*/}
                    <div className={"comment-section"}>
                        <div className="comments-and-user">
                            <div className="comment-section-top">
                                <div className={"comment-section-user"}>
                                    <img src={this.props.location.state.post.user.profile_photo} alt=""
                                         className={"comment-section-user-img"}/>
                                    <p className={"comment-section-username"}>{this.props.location.state.post.user.username}</p>
                                </div>
                                <Icon name={"options"}/>
                            </div>

                            <div className={"posted-comments"}>
                                {this.state.comments.map(item=>
                                    <PostedComment comment={item}/>
                                )}

                                {/*<div className={"comment"}>*/}
                                {/*    <img src={require("img/maria-comment.png")} alt="" className={"commenter-img"}/>*/}
                                {/*    <div className={"comment-details"}>*/}
                                {/*        <div className={"commenter-name-and-comment"}>*/}
                                {/*            <p className={"commenter-name"}>mari.aa</p>*/}
                                {/*            <p className="commenter-comment">Sweety</p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                        <div className="comment-section-bottom">
                            <div className="post-comment-like-count">
                                <img src={require("./img/postCommentWindow-Icon.png")} alt=""
                                     className={"like-count-icon"}/>
                                <p className="count-number">98 Likes</p>
                            </div>
                            <div className="write-comment">
                                <input type="text" className={"write-comment-input"}
                                       placeholder={"write something..."}/>
                                <button className="send-comment-btn">send</button>
                                {/*<div className={"send-comment-btn"}>*/}
                                {/*    /!*<p className="send-comment-btn-arrow"> send </p>*!/*/}
                                {/*</div>*/}

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default PostComment;
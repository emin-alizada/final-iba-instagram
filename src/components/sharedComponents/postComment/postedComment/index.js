import React from "react";
import './postedComment.scss'
class PostedComment extends React.Component{
    render() {
        console.log(this.props.comment);
        return(
            <div className={"comment"}>
                <img src={this.props.comment.commenter.profile_photo} alt="" className={"commenter-img"}/>
                <div className={"comment-details"}>
                    <div className={"commenter-name-and-comment"}>
                        <p className={"commenter-name"}>{this.props.comment.commenter.username}</p>
                        <p className="commenter-comment">{this.props.comment.comment_itself}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostedComment;
import React from "react";
import './postedComment.scss'
class PostedComment extends React.Component{
    render() {
        return(
            <div className={"comment"}>
                <img src={require("../img/maria-comment.png")} alt="" className={"commenter-img"}/>
                <div className={"comment-details"}>
                    <div className={"commenter-name-and-comment"}>
                        <p className={"commenter-name"}>mari.aa</p>
                        <p className="commenter-comment">Sweety</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostedComment;
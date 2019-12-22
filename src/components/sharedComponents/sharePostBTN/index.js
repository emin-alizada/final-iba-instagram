import React from "react";
import './css/shareBtn.scss'

class ShareBtn extends React.Component{
    render() {
        return(
            <div className={"share-btn"}>
                <img src={require("./plus.png")} alt="" className={"plus-icon"}/>
                <p className="share-post-btn-txt">New Post</p>

            </div>
        )
    }
}

export default ShareBtn;
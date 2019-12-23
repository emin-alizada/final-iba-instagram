import React from "react";
import "./mediaCard.scss";
import "./mediaBtns.scss"
import Icon from "../../sharedComponents/Icon/index"

class MediaCard extends React.Component {
    render() {
        return (
            <div className={"mediaCard"}>
                <img src={this.props.image_url} className={"mediaCard_photo"}/>
                <div className={"mediaCard_btnContainer"}>
                    <div className={"mediaCard_btn"}>
                        <Icon name = {"likeNotification"}/>
                        <span className={"mediaCard_counter"}>{this.props.like_counter}</span>
                    </div>
                    <div className={"mediaCard_btn"}>
                        <Icon name = {"commentPost"}/>
                        <span className={"mediaCard_counter"}>{this.props.comments_counter}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaCard;
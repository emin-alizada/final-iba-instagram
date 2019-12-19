import React from "react";
import "./mediaCard.scss";
import "./mediaBtns.scss"
import Icon from "../../sharedComponents/Icon/index"

class MediaCard extends React.Component {
    render() {
        return (
            <div className={"mediaCard"}>
                <img src={require("../img/profilePhoto1.png")} className={"mediaCard_photo"}/>
                <div className={"mediaCard_btnContainer"}>
                    <div className={"mediaCard_btn"}>
                        <Icon name = {"likeNotification"}/>
                        <span className={"mediaCard_counter"}>109</span>
                    </div>
                    <div className={"mediaCard_btn"}>
                        <Icon name = {"commentPost"}/>
                        <span className={"mediaCard_counter"}>34</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaCard;
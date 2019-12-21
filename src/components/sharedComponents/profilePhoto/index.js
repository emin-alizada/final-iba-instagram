import React from "react";
import "./profilePhoto.scss"

class ProfilePhoto extends React.Component {
    render() {
        return (
            <img src={this.props.source} className={"profile-photo"}/>
        );
    }
}

export default ProfilePhoto;
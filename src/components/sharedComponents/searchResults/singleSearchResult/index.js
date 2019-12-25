import React from "react";
import './css/singleSearchResult.scss'

import {connect} from "react-redux"
import {updateUser} from "../../../../actions/userAction";


class SingleSearchResult extends React.Component{
    render() {
        console.log(this.props.data);
        return (
            <div className={"single-search-result"}>
                <div className="search-result-user">
                    <img src={this.props.data.profile_photo} alt="" className="search-result-img"/>
                    <p className="search-result-username">{this.props.data.username}</p>
                </div>
                <button className="search-result-sub-btn" onClick={event => {
                    event.preventDefault();
                    const followUser = async () => {
                        console.log(this.props.user.id);
                        console.log(this.props.data.id);
                        await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}/follows`, {
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                                // "Origin": "http://localhost:3000"
                            },
                            method: "POST",
                            body: JSON.stringify({
                                id: this.props.data.id
                            })
                        }).then(response => {
                            this.props.userUpdateToProps(this.props.user.id);
                            alert("Follow Successfull");
                        })
                            .then(()=>{
                                this.props.historyProps.goBack()
                            });
                    };
                    followUser();
                }}>Follow</button>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        user: store.currentUser.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userUpdateToProps: userId => dispatch(updateUser(userId))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleSearchResult);
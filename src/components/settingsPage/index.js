import React from "react";
import Icon from "../sharedComponents/Icon";
import './css/settingsPage.scss'
import './css/settingsPage-media.scss'

import {connect} from "react-redux"

import './css/settingsPage-media.scss'
import ShareBtn from "../sharedComponents/sharePostBTN";
import {updateUser} from "../../actions/userAction";


class SettingPage extends React.Component{
    render() {
        console.log("user from settings",this.props.user);
        return (
            <div className={"settings-page"}>
                <div className="settings-window">
                    <div className="avatar">
                        <img src={this.props.user.profile_photo} alt="" className={"setting-page-avatar"}/>
                        <button className="change-photo-button">Change Profile Picture</button>
                    </div>
                    <div className="settings-username">{this.props.user.username}</div>
                    <form action="" className={"settings-form"} onSubmit={async (event) => {
                        event.preventDefault();
                        const formInputs = event.target.querySelectorAll("input");
                        let oldPassword = formInputs[6].value;
                        let newPassword= formInputs[7].value;
                        let newPasswordConfrim= formInputs[8].value;
                        const userUpdated = {
                            name: formInputs[0].value,
                            username: formInputs[1].value,
                            description: formInputs[2].value,
                            gender: event.target.querySelector("select").value,
                            birthdate: formInputs[3].value,
                            mail: formInputs[4].value,
                            phone_number: formInputs[5].value,
                        };
                       if(oldPassword === "" && newPassword === "" && newPasswordConfrim === ""){
                            await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}`, {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json",
                                    "Origin": "http://localhost:3000"
                                },
                                method: "PUT",
                                body: JSON.stringify(userUpdated)
                            }).then(response => {
                                this.props.userUpdateToProps(this.props.user.id);
                                alert("Updated is added");
                            })
                                .then(()=>{
                                    this.props.history.goBack();
                                });
                        }
                        else if(oldPassword === this.props.user.password && newPassword===newPasswordConfrim && newPassword!=="" ){
                            userUpdated.password = newPassword;
                           await fetch(`https://fp-instagram.herokuapp.com/users/${this.props.user.id}`, {
                               headers: {
                                   "Content-Type": "application/json",
                                   "Accept": "application/json",
                                   "Origin": "http://localhost:3000"
                               },
                               method: "PUT",
                               body: JSON.stringify(userUpdated)
                           }).then(response => {
                               this.props.userUpdateToProps(this.props.user.id);
                               alert("Updated is added");
                           })
                               .then(()=>{
                                   this.props.history.goBack();
                               });
                        }
                        else{
                            alert("Please check the data");
                       }
                    }}>
                        <fieldset className={"personal-info"}>
                            <label htmlFor="change-name" className={"settings-labels"}>Name
                                <input id={"change-name"} type="text" className={"personal-info-fields"} defaultValue={this.props.user.name}/>
                            </label>
                            <label htmlFor="change-username" className={"settings-labels"}>Username
                                <input id={"change-username"} type="text" className={"personal-info-fields"} defaultValue={this.props.user.username}/>
                            </label>
                            <label htmlFor="change-bio" className={"settings-labels"}>Bio
                                <input id={"change-bio"} type="text" className={"personal-info-fields"} defaultValue={this.props.user.description}/>
                            </label>
                            <label htmlFor="change-gender " className={"gender-select-holder settings-labels"}>Gender
                                <select name="change-gender" id="change-gender" className={"personal-info-fields"}>
                                    {/*<option value="default-select-option" disabled={true}>-Please select your gender</option>*/}
                                    <option value="M" selected={this.props.user.gender==="M"} >Male</option>
                                    <option value="F" selected={this.props.user.gender==="F"}>Female</option>
                                </select>
                            </label>
                            <label className={"settings-labels"} htmlFor="change-birthdate">Birthday
                                <input id={"change-birthdate"} type="date" className={"personal-info-fields"}/>
                            </label>
                        </fieldset>

                        <fieldset className={"change-contact-info"}>
                            <label className={"settings-labels"} htmlFor="change-email">E-mail
                                <input id={"change-email"} type="text" className={"contact-info-fields"} defaultValue={this.props.user.mail}/>
                            </label>
                            <label className={"settings-labels"} htmlFor="change-phone">Phone Number
                                <input id={"change-phone"} type="text" className={"contact-info-fields"} defaultValue={this.props.user.phone_number}/>
                            </label>
                        </fieldset>

                        <fieldset className="change-password">
                            <label className={"settings-labels"} htmlFor="old-pass">Old Password
                                <input id={"old-pass"} type="password"  className={"change-password-fields"}/>
                            </label>
                            <label className={"settings-labels"} htmlFor="new-pass">New Password
                                <input id={"new-pass"} type="password" className={"change-password-fields"}/>
                            </label>
                            <label className={"settings-labels"} htmlFor="confirm-pass">Confirm new password
                                <input id={"confirm-pass"} type="password" className={"change-password-fields"}/>
                            </label>
                        </fieldset>
                        <fieldset className="change-settings-buttons">
                            <button onClick={(event) => {
                                event.preventDefault();
                                console.log("go back");
                                this.props.history.goBack();
                            }} className={"cancel-btn"}>Cancel</button>
                            <input type="submit" className={"save-btn"}/>
                        </fieldset>
                    </form>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
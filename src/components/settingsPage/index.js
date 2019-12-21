import React from "react";
import Icon from "../sharedComponents/Icon";
import './css/settingsPage.scss'
class SettingPage extends React.Component{
    render() {
        return (
            <div className={"settings-page"}>
                <div className="settings-window">
                    <div className="avatar">
                        <img src={require("../sharedComponents/postComment/img/laura-comment.png")} alt=""/>
                        <button className="change-photo-button">Change Profile Picture</button>
                    </div>
                    <div className="settings-username">anna_white</div>
                    <form action="" className={"settings-form"}>
                        <fieldset className={"personal-info"}>
                            <label htmlFor="change-name" className={"settings-labels"}>Name
                                <input id={"change-name"} type="text" className={"personal-info-fields"}/>
                            </label>
                            <label htmlFor="change-username" className={"settings-labels"}>Username
                                <input id={"change-username"} type="text" className={"personal-info-fields"}/>
                            </label>
                            <label htmlFor="change-bio" className={"settings-labels"}>Bio
                                <input id={"change-bio"} type="text" className={"personal-info-fields"}/>
                            </label>
                            <label htmlFor="change-gender " className={"gender-select-holder settings-labels"}>Gender
                                {/*<input id={"change-gender"} type="text" className={"personal-info-fields"}/>*/}
                                <select name="change-gender" id="change-gender" className={"personal-info-fields"}>
                                    <option value="default-select-option">-Please select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="male">Female</option>

                                </select>
                            </label>
                            <label className={"settings-labels"} htmlFor="change-birthdate">Birthday
                                <input id={"change-birthdate"} type="date" className={"personal-info-fields"}/>
                            </label>
                        </fieldset>

                        <fieldset className={"change-contact-info"}>
                            <label className={"settings-labels"} htmlFor="change-email">E-mail
                                <input id={"change-email"} type="text" className={"contact-info-fields"}/>
                            </label>
                            <label className={"settings-labels"} htmlFor="change-phone">Phone Number
                                <input id={"change-phone"} type="text" className={"contact-info-fields"}/>
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
                            <button className={"cancel-btn"}>Cancel</button>
                            <input type="submit" className={"save-btn"}/>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default SettingPage;
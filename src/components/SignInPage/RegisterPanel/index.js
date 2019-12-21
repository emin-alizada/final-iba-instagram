import React from "react";
import Icon from "../../sharedComponents/Icon";
import './css/registerPanel.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";

class RegisterPanel extends React.Component {
    render() {
        return (
            <div className={"register-panel"}>
                <Icon name={"logo"}/>
                <span className={"logo-after"}> </span>
                <div>

                    <div className={"form-container"}>
                        <form action="" id={"register-form"} className={"register-form"}>
                            <input type="text" placeholder={"Email"} className={"fields"}/>
                            <input type="text" placeholder={"Full Name"} className={"fields"}/>
                            <input type="text" placeholder={"Username"} className={"fields"}/>
                            <div className="birthday-field-container">
                                <label htmlFor={"birthday"} className={"birthday-label"}>Birthdate:
                                    <input id={"birthday"} type="date" className={"fields"}/>
                                </label>
                            </div>
                            <select name="gender" id="register-form" className={"fields"}>
                                <option value={"default-select"} selected={true} disabled={true}>Please Select Your
                                    Gender
                                </option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>

                            <input type="password" placeholder={"Password"} className={"fields"} />
                            <input type="password" placeholder={"Confirm password"} className={"fields"} />
                            <input type="submit" value={"Sign Up"} className={"signup-button"}/>

                        </form>
                        <p className={"or"}>or</p>
                        <Link to="/login">
                            <a href="" className={"log-in-button"}> Log in </a>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default RegisterPanel;
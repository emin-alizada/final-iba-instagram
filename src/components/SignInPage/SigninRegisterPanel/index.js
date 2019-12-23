import React from "react";
import Icon from "../../sharedComponents/Icon";
import './css/sginInPanel.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {connect} from "react-redux"
import {verifyUser} from "../../../actions/userAction";


class SignInPanel extends React.Component {
    render() {
        return (

            <div className={"sign-in-panel"}>
                <Icon name={"logo"}/>
                <span className={"logo-after"}> </span>
                <div>

                    <form action="" onSubmit={ (event) => {
                        event.preventDefault();
                        const formLogIn = event.target.querySelectorAll("input");
                        this.props.verifyUserActionToProps({
                            username: formLogIn[0].value,
                            password: formLogIn[1].value
                        })
                        }
                    }
                          className={"login-form"}>
                        <div className={"username"}>
                            <input type="text" placeholder={"Username or Email"} className={"username-field"}
                                   required={true}/>
                            <Icon name={"usernameLogIn"} className={"username-icon"}/>
                        </div>
                        <div className="password">
                            <input type="password" placeholder={"Password"} className={"password-field"}
                                   required={true}/>
                            <Icon name={"passwordLogIn"}/>
                        </div>
                        <input type="submit" value={"Log In"} className={"login-button"}/>
                        <p className={"or"}>or</p>
                        <Link to="/login/signup">
                            <a href="#" className={"register-button"}> Sign Up </a>
                        </Link>
                    </form>

                </div>
            </div>

        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        verifyUserActionToProps: logInUser => dispatch(verifyUser(logInUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPanel);
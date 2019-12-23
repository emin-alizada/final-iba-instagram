import React from "react";
import Icon from "../../sharedComponents/Icon";
import './css/registerPanel.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";



class RegisterPanel extends React.Component {
    render() {
        return (
            <div className={"register-panel"}>
                <Icon name={"logo"}/>
                <span className={"logo-after"}> </span>
                <div>

                    <div className={"form-container"}>
                        <form action="" onSubmit={this.registration} id={"register-form"} className={"register-form"}>
                            <input type="email" placeholder={"Email"} className={"fields"}/>
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
                                <option value={"M"}>Male</option>
                                <option value={"F"}>Female</option>
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

    //methods
    registration = async(event) => {
        event.preventDefault();
        const formInputs = event.target.querySelectorAll("input");
        const newUser ={};
        if(formInputs[4].value === formInputs[5].value && formInputs[5].value !== ""){
            newUser.cover_photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Zeller_See_Zell_Am_See.jpg/1280px-Zeller_See_Zell_Am_See.jpg';
            newUser.profile_photo = "https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png";
            newUser.mail = formInputs[0].value;
            newUser.name = formInputs[1].value;
            newUser.username = formInputs[2].value;
            newUser.birthdate = formInputs[3].value;
            newUser.gender = event.target.querySelector("select").value;
            newUser.password = formInputs[4].value;
            console.log(newUser);

            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin','http://localhost:3000');

            console.log(JSON.stringify(newUser));

            await fetch("http://fp-instagram.herokuapp.com/users", {
                headers: headers,
                method: "POST",
                body: JSON.stringify(newUser)
            }).then(response=>{
                if(response.ok && response.status === 200){
                    this.props.history.push("/login");
                }
            })
        }
    }
}



export default RegisterPanel;
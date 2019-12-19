import React, {Component} from 'react';
import Icon from "../Icon";
import "./css/navbar.scss";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <div className={"my-container"}>
                    <Link to="/feed">
                        <Icon name = {"logo"}/>
                    </Link>
                    <div className="navbar-right">
                        <div className="search">
                            <Icon name={"search"} />
                            <input type="text" placeholder={"Search"} className={"search-field"}/>
                        </div>
                        <Link to="/profile">
                            <Icon name={ "profile"}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
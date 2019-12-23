import React, {Component} from 'react';
import Icon from "../Icon";
import "./css/customNavbar.scss"
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <div className={"elementContainer"}>
                    <Link to="/feed">
                        <Icon name={"logo"} className={"elementContainer_logo"}/>
                    </Link>
                        <div className={"leftMenu"}>
                        <div className={"leftMenu_searchContainer"}>
                            <Icon name={"search"} className={"leftMenu_searchIcon"}/>
                            <input type="text" className={"leftMenu_searchInput"} placeholder="search"/>
                        </div>
                            <Link to="/profile">
                                <Icon name={"profile"} className={"leftMenu_profileIcon"}/>
                            </Link>
                            <Link to={"/"}>
                                <Icon name={"newPost"}/>
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
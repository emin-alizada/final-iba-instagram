import React, {Component} from 'react';
import Icon from "../Icon";
import "./css/customNavbar.scss"

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <div className={"elementContainer"}>
                    <Icon name={"logo"} className={"elementContainer_logo"}/>
                    <div className={"leftMenu"}>
                        <div className={"leftMenu_searchContainer"}>
                            <Icon name={"search"} className={"leftMenu_searchIcon"}/>
                            <input type="text" className={"leftMenu_searchInput"} placeholder="search"/>
                        </div>
                        <Icon name={"profile"} className={"leftMenu_profileIcon"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
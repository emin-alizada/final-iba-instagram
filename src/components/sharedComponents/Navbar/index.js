import React, {Component} from 'react';
import Icon from "../Icon";

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <div className={"my-container"}>
                    <Icon name = {"logo"}/>

                    <div className="navbar-right">
                        <div className="search">
                            <Icon name={"search"} />
                            <input type="text" placeholder={"Search"} className={"search-field"}/>
                        </div>
                        <Icon name={ "profile"}/>
                    </div>


                </div>
            </div>
        );
    }
}

export default Navbar;
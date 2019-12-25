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
                            <form action="" onSubmit={ async (event) =>{
                                event.preventDefault();
                                const request = {
                                    content:event.target.querySelector("input").value
                                };
                                await fetch(`https://fp-instagram.herokuapp.com/search`,{
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept": "application/json",
                                        "Origin": "http://localhost:3000"
                                    },
                                    method: "POST",
                                    body: JSON.stringify(request)
                                })
                                    .then(response => {
                                        if (response.status === 200){
                                            return response;
                                        }
                                        else{
                                            alert("No users matched request parameters");
                                            throw new Error("no user");
                                        }
                                    })
                                    .then(response => response.json())
                                    .then(search => {
                                        this.props.history.push(`${this.props.match.path}/search_username`, {response: search});
                                    })
                                    .catch(e => {
                                        console.log(e);
                                    })
                            }}>
                                <Icon name={"search"} className={"leftMenu_searchIcon"}/>
                                <input type="text" className={"leftMenu_searchInput"} placeholder="search"/>
                            </form>
                        </div>
                            <Link to="/profile">
                                <Icon name={"profile"} className={"leftMenu_profileIcon"}/>
                            </Link>
                            <Link to={`${this.props.match.path}/new`}>
                                <Icon name={"newPost"}/>
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
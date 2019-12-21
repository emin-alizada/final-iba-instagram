import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import MainFeed from "./components/MainFeed";
import PostComment from "./components/sharedComponents/postComment";
import Navbar from "./components/sharedComponents/Navbar";
import UserProfile from "./components/userProfile/index"


function App() {

  return (
    <div className="App">
        <UserProfile/>
    </div>
  );
}

export default App;
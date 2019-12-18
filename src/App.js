import React from 'react';
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import "./resetCSS/reset.scss"
import Navbar from "./components/sharedComponents/Navbar";
import './components/sharedComponents/Navbar/css/navbar.scss'
import PostComment from "./components/sharedComponents/postComment";

function App() {

  return (
    <div className="App">
        <PostComment/>
        {/*<Navbar/>*/}
        {/*<SignInPage/>*/}
    </div>
  );
}

export default App;
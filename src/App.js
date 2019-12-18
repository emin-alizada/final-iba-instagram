import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import MainFeed from "./components/MainFeed";
import PostComment from "./components/sharedComponents/postComment";

function App() {

  return (
    <div className="App">
        {/*<SignInPage/>*/}
        {/*<MainFeed/>*/}
        <PostComment/>

    </div>
  );
}

export default App;
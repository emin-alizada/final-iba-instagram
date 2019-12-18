import React from 'react';
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import "./resetCSS/reset.scss"
import MainFeed from "./components/MainFeed";

function App() {
  return (
    <div className="App">
        <SignInPage/>
        {/*<MainFeed/>*/}

    </div>
  );
}

export default App;
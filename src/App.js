import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import UserProfile from "./components/userProfile/index"

function App() {

  return (
    <div className="App">
        {/*<SignInPage/>*/}
        <UserProfile/>

    </div>
  );
}

export default App;
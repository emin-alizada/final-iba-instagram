import React from 'react';
import "./resetCSS/reset.scss"
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import UserProfile from "./components/userProfile/index"
import SettingProfile from "./components/settingProfile/index";

function App() {

  return (
    <div className="App">
        {/* <UserProfile/> */}
      <SettingProfile/>
    </div>
  );
}

export default App;
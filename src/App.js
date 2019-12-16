import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Icon from "./components/sharedComponents/Icon";

function App() {
  let a = ["commentNotification",
    "commentPost",
    "likeNotification",
    "likePost.png",
    "logo",
    "options",
    "passwordLogIn",
    "profile",
    "save",
    "search",
    "settings",
    "sharePost",
    "subscriptionNotification",
    "usernameLogIn",]
  return (
    <div className="App">
      {a.map(name =>{
        return <Icon name={name} key={name+name.index} />
      })}
    </div>
  );
}

export default App;
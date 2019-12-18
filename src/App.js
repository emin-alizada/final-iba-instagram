import React from 'react';
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import SignInPage from "./components/SignInPage";
import "./resetCSS/reset.scss"

function App() {

  return (
    <div className="App">
        <SignInPage/>
    </div>
  );
}

export default App;
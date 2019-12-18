import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Icon from "./components/sharedComponents/Icon";
import Signinpage from "./components/SignInPage";
import "./resetCSS/reset.scss"

function App() {

  return (
    <div className="App">
      {/*{iconList.map(name =>{*/}
      {/*  return <Icon name={name} key={name+name.index} />*/}
      {/*})}*/}

      <Signinpage/>
    </div>
  );
}

export default App;
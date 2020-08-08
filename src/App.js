import React from "react";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

import Profile from "./components/content/Profile/Profile";
import Dialogs from "./components/content/Dialogs/Dialogs";
import News from "./components/content/News/News";
import Music from "./components/content/Music/Music";
import Settings from "./components/content/Settings/Settings";

function App(props) {

  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <NavBar FriendsData={props.state.NavBarPage.FriendsData}/>
        <div className={s.app_wrapper_content}>
          <Route path="/Profile" render={ () => <Profile PostsData={props.state.profilePage.PostsData}/>} />
          <Route path="/Dialogs" render={ () => <Dialogs DialogsData={props.state.DialogPage.DialogsData} MessageData={props.state.DialogPage.MessageData}/>} /> 
          <Route path="/News" render={ () => <News />} /> 
          <Route path="/Music" render={ () => <Music />} /> 
          <Route path="/Settings" render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

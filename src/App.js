import React from "react";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import News from "./components/content/News/News";
import Music from "./components/content/Music/Music";
import Settings from "./components/content/Settings/Settings";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import DialogsContainer from "./components/content/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/content/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/content/login/Login";

function App() {
    return ( <
        BrowserRouter >
        <
        div className = { s.App } >
        <
        HeaderContainer / >
        <
        NavBarContainer / > { " " } <
        div className = { s.app_wrapper_content } >
        <
        Route path = "/Profile/:userId?"
        render = {
            () => < ProfileContainer / > }
        />{" "} <
        Route path = "/Dialogs"
        render = {
            () => < DialogsContainer / > }
        />{" "} <
        Route path = "/News"
        render = {
            () => < News / > }
        />{" "} <
        Route path = "/Music"
        render = {
            () => < Music / > }
        />{" "} <
        Route path = "/Settings"
        render = {
            () => < Settings / > }
        />{" "} <
        Route path = "/users"
        render = {
            () => < UsersContainer / > }
        />{" "} <
        Route path = "/login"
        render = {
            () => < Login / > }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /BrowserRouter>
    );
}

export default App;
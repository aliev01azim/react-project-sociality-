import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let PostsData = [
    { id: 1, likesCount: 12, postsDesc: 'Hi,Bro My name is Azim and it is my first post!' },
    { id: 2, likesCount: 0, postsDesc: 'i love my future profession' },
    { id: 3, likesCount: 392, postsDesc: 'i am gonna be the best frontend developer' },
    { id: 4, likesCount: 2, postsDesc: 'Azim ,listen me, just keep up a good work!' }
]

let DialogsData = [
    { id: 1, name: 'Azim' },
    { id: 2, name: 'aluun' },
    { id: 3, name: 'Osmo' },
    { id: 4, name: 'Chika' },
    { id: 5, name: 'Eldi' },
    { id: 6, name: 'Akyl' },
    { id: 7, name: 'Bekza' },
    { id: 8, name: 'Janik' },
    { id: 9, name: 'Rus' }
]

let MessageData = [
    { id: 1, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
    { id: 2, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
    { id: 3, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
    { id: 4, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
    { id: 5, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
    { id: 6, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " }
]

ReactDOM.render( <
    React.StrictMode >
    <
    App PostsData = { PostsData }
    DialogsData = { DialogsData }
    MessageData = { MessageData }
    /> <
    /React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
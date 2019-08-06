import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dataDialogs = [
    {id:1, name: 'LeBron'},
    {id:2, name: 'Wade'},
    {id:3, name: 'Curry'},
    {ia:4, name: 'Jordan'}
];
let dataMessages = [
    {id:1, messageText: 'Hello'},
    {id:2, messageText: 'How are you?'},
    {id:3, messageText: 'I am fine, thank u. And you?'},
    {ia:4, messageText: 'I am too'}
];

let navBarListData = [
    {id:1, name: 'Profile'},
    {id:2, name: 'Messages'},
    {id:3, name: 'News'},
    {id:4, name: 'Music'},
    {ia:5, name: 'Settings'}
];

let dataPosts = [
    {id: 1, text: 'Привет', likes: 12},
    {id: 2, text: 'Как дела?', likes: 5},
    {id: 3, text: 'Заебись, братан', likes: 50},
    {ia: 4, text: 'Четко!', likes: 11}
];

ReactDOM.render(<App dataMessages={dataMessages} dataDialogs={dataDialogs} navBarListData={navBarListData} dataPosts={dataPosts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navigation from "./components/navbar/navbar";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrap'>
                <Header/>
                <Navigation {...props}/>
                <Content data={props}/>
            </div>
        </BrowserRouter>
    )
};

export default App;
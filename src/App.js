import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navigation from "./components/navbar/navbar";
import Profile from "./components/content/profile/profile";

const App = () => {
  return (
      <div className='app-wrap'>
          <Header/>
          <Navigation/>
          <Profile/>
          test
      </div>
  )
};

export default App;
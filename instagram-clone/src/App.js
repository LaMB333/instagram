import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">

      <div className="app_header">
        <img
        className='app_headerImage'
        src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
        alt=''
        />
      </div>

      <h1>Hello handsome!</h1>
      <Post/>
         
    </div>
  );
}

export default App;

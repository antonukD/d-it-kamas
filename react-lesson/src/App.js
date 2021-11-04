import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='content'>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        <div> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM--Uugl9NzBLmqo76weB6LKmcG6PLq-aXdg&usqp=CAU' /></div>
        <div>ava + description</div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>

      </div>
    </div>);
}

export default App;

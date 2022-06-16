import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8080';

import Header from './components/Header';
import About from './components/About';
import Terms from './components/Terms';
import HomeGuest from './components/HomeGuest';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import SinglePost from './components/ViewSinglePost';
import Footer from './components/Footer';

const Main = ({}) => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem('complexappToken'))
  );

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.querySelector('#app'));

if (module.hot) {
  module.hot(accept);
}

export default Main;

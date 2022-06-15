import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Terms from './components/Terms';
import HomeGuest from './components/HomeGuest';
import Home from './components/Home';
import Footer from './components/Footer';

const Main = ({}) => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem('complexappToken'))
  );

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={ loggedIn ? <Home /> : <HomeGuest />} />
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

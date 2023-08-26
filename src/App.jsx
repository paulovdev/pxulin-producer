import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader/PreLoader'
import Nav from './components/Nav/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Music from './pages/music/Music'
import Store from './pages/store/Store'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);
  return isLoading
    ?
    (<PreLoader />)
    :
    (<div>
      <Nav />
      <Home />
      <About />
      <Music />
      <Store />
    </div>)
}

export default App

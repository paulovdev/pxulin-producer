import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader/PreLoader'
import Nav from './components/Nav/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import AboutGfx from './pages/about/AboutGfx'
import Projects from './pages/projects/Projects'
import Footer from './components/Footer/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3500);
    };

    fakeDataFetch();
  }, []);
  return isLoading
    ?
    (<PreLoader />)
    :
    (<div className='noise'>
      <Nav />
      <Home />
      <About />
      <AboutGfx />
      <Projects />
      <Footer />
    </div>)
}

export default App
import Home from './pages/home/Home'
import AboutSection1 from './pages/about/AboutSection1'
import AboutSection2 from './pages/about/AboutSection2'
import Expertises from './pages/expertises/Expertises'
import SlideText from './components/SlideText/SlideText'
import Recent from './pages/recent/Recent'
import Services from './pages/services/Services'

const AppLeader = () => {
  return (
    <>
      <Home />
      <AboutSection1 />
      <AboutSection2 />
      <Expertises />

      <SlideText />
      <Recent />
      <Services />
    </>
  )

}

export default AppLeader;
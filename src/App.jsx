import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop'
const App = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='noise' onLoad={scrollToTop}>
      <ScrollTop />
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </div>
  )

}

export default App
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='noise' onLoad={scrollToTop}>
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </div>
  )

}

export default App
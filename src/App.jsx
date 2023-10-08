import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop'
import CookiesModal from './utils/Cookies/CookiesModal';
const App = () => {

  return (
    <>
      <ScrollTop />
      <CookiesModal />
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </>

  )

}

export default App
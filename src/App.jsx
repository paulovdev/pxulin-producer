import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';

import CookiesModal from './utils/Cookies/CookiesModal';
const App = () => {

  return (
    <>
      <CookiesModal />
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </>

  )

}

export default App
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop'
const App = () => {

  return (
    <>
      <ScrollTop />
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </>

  )

}

export default App
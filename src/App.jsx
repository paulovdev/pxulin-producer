import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <div className='noise'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )

}

export default App
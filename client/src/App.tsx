import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Pages from './Pages';

function App() {
  return (
    <BrowserRouter>  
      <Pages />
    </BrowserRouter>
  )
}

export default App

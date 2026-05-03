import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
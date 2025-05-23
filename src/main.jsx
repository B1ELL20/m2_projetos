import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import Rotas from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)

import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import Rotas from './routes';
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {

    gtmId: 'GTM-WBLGFC8W'
}
 
TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { rootStore } from '../../store'
import App from '../screens/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
)

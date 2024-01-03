import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { persist, store } from 'app'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <HashRouter>
      <PersistGate loading={<div>Loading...</div>} persistor={persist}>
        <Provider store={store}>
          <App/>
        </Provider>
      </PersistGate>
    </HashRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

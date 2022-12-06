import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles.scss'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
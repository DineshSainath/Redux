import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// store - where all the state lies for the application
//reducers - to handle state operations or changes
const store = configureStore({
  reducer: {},
})

//Provider wraps the content where redux is used and we specify the store(states)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

import React from 'react'
import { Provider } from 'react-redux'

const App = () => <div>this file is located on app/Root.jsx </div>

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root

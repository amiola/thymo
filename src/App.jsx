import React from 'react'
import Router from './router/Router'
import Provider from './context/Provider'

function App() {

  return (
    <>
    <Provider>
      <Router/>
    </Provider>
    </>
  )
}

export default App

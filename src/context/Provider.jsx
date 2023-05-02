import React, { useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {
  const [curMainPage,setCurMainPage]=useState()
    
  return (
    <Context.Provider
    value={{
      curMainPage,
      setCurMainPage
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default Provider
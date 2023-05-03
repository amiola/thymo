import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Lifting from '../pages/training/Lifting'
import Training from '../pages/training/Training'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:page' element={<Main/>} />
      <Route path='/:page/weight-lifting' element={<Lifting/>} />
      <Route path='/:page/:training/:group' element={<Training/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
    </>
  )
}

export default Router
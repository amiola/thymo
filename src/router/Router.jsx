import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Training from '../pages/training/Training'
import Exercise from '../pages/training/Exercise'
import Group from '../pages/training/Group'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:page' element={<Main/>} />
      <Route path='/:page/:training' element={<Training/>} />
      <Route path='/:page/:training/:category' element={<Group/>} />
      <Route path='/exercise' element={<Exercise/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
    </>
  )
}

export default Router
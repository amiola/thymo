import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Training from '../pages/training/Training'
import Exercise from '../pages/training/Exercise'
import Group from '../pages/training/Group'
import Category from '../pages/training/Category'
import Pose from '../pages/training/Pose'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:page' element={<Main/>} />
      <Route path='/training/:training' element={<Training/>} />
      <Route path='/training/weightLifting/:group' element={<Group/>} />
      <Route path='/training/yoga/category/:id' element={<Category/>} />
      <Route path='/exercise' element={<Exercise/>} />
      <Route path='/pose/:id' element={<Pose/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
    </>
  )
}

export default Router
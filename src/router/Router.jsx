import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Card from '../pages/training/Card'
import Exercise from '../pages/training/Exercise'
import Group from '../pages/training/Group'
import Category from '../pages/training/Category'
import Pose from '../pages/training/Pose'
import Results from '../pages/parameters/Results'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:page' element={<Main/>} />
      <Route path='/:page/:card' element={<Card/>} />
      <Route path='/training/weightLifting/:group' element={<Group/>} />
      <Route path='/training/yoga/category/:id' element={<Category/>} />
      <Route path='/parameters/calculation/results' element={<Results/>} />
      <Route path='/exercise' element={<Exercise/>} />
      <Route path='/pose/:id' element={<Pose/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
    </>
  )
}

export default Router
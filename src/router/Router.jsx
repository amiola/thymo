import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Training from '../pages/training/Training'
import Lifting from '../pages/training/Lifting'
import Nutrition from '../pages/nutrition/Nutrition'
import Parameters from '../pages/parameters/Parameters'
import Wellness from '../pages/wellness/Wellness'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/training' element={<Training/>} />
      <Route path='/weight-lifting' element={<Lifting/>} />
      <Route path='/nutrition' element={<Nutrition/>} />
      <Route path='/parameters' element={<Parameters/>} />
      <Route path='/wellness' element={<Wellness/>} />
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
    </>
  )
}

export default Router
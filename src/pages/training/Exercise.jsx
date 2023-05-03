import React from 'react'
import Nav from '../../navbar/Nav'
import { useLocation } from 'react-router-dom'

const Exercise = () => {
    const location = useLocation()
  return (
    <>
    <Nav/>
    <section className="exercise-container">
        <h1>{location.state.name}</h1>
        <p>{location.state.instructions}</p>
    </section>
    </>
  )
}

export default Exercise
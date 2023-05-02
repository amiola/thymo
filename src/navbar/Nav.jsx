import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <div className="nav-logo"><NavLink to='/'><img src="icons/beat-logo.svg" alt="logo" /></NavLink></div>
      <ul>
        <li><NavLink to='/training'><img src="icons/haltere.svg" alt="training icon" /></NavLink></li>
        <li><NavLink to='/nutrition'><img src="icons/apple.svg" alt="nutrition icon" /></NavLink></li>
        <li><NavLink to='/wellness'><img src="icons/plant.svg" alt="wellness icon" /></NavLink></li>
      </ul>
      <div className="nav-lang"><img src="icons/world.svg" alt="languages icon" /></div>
    </nav>
    </>
  )
}

export default Nav
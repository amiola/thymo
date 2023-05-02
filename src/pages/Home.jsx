import React from 'react'
import Nav from '../navbar/Nav'
import { useNavigate } from 'react-router-dom'
import { homeData } from '../assets/home'

const Home = () => {

  const navigation = useNavigate()

  return (
    <>
    <Nav/>
    <section className="home">
      <div className="logo">
        <img className='beat' src="icons/beat-logo.svg" alt="beat logo" />
        <img className='text' src="icons/text-logo.svg" alt="text logo" />
      </div>
      {homeData.map((data,i)=>{
        const icon = `icons/plus${data.icon}.svg`
        return (
        <div className={data.class} key={i}
        onClick={()=>navigation(data.navigation)}>
          <img src={icon} alt="plus icon" />
          <h3>{data.title}</h3>
        </div>
      )})}
    </section>
    </>
  )
}

export default Home
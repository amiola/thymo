import React, { useContext } from 'react'
import Nav from '../navbar/Nav'
import { useNavigate } from 'react-router-dom'
import { homeData } from '../assets/home'
import Context from '../context/Context'
import { pages } from '../assets/pages'

const Home = () => {

  const {curMainPage,setCurMainPage}=useContext(Context)
  const navigation = useNavigate()

  const navigate =(route,key)=>{
    setCurMainPage(pages[key]);
    navigation(route);
  }

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
        onClick={()=>navigate(data.navigation,data.key)}>
          <img src={icon} alt="plus icon" />
          <h3>{data.title}</h3>
        </div>
      )})}
    </section>
    </>
  )
}

export default Home
import React, { useContext } from 'react'
import Nav from '../navbar/Nav'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router-dom'
import { pages } from '../assets/pages'
import Context from '../context/Context'
import { HeadContainer } from '../components/HeadContainer'

const Main = () => {
  const {curMainPage,setCurMainPage}=useContext(Context)
  const navigation = useNavigate()
  const pageName = useParams().page

  return (
    <>
    <Nav/>
    <section className="container">
      <HeadContainer className='head' img={curMainPage.img} >
      <h1>{curMainPage.title}</h1>
        <p>{curMainPage.text}</p>
      </HeadContainer>
      <div className="cards">
        {curMainPage.cards.map((card,i)=>(
          <div key={i} onClick={()=>navigation(card.navigation)} className='card-box'>
          <Card card={card}/>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Main
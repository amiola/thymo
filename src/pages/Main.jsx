import React from 'react'
import Nav from '../navbar/Nav'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router-dom'
import { pages } from '../assets/pages'
import { BackImage } from '../components/BackImage'

const Main = () => {
  const navigation = useNavigate()
  const pageName = useParams().page
  const page = pages[pageName]

  return (
    <>
    <Nav/>
    <section className="container">
      <BackImage className='head' img={page.img} width='100%' height='60%'>
      <h1>{page.title}</h1>
        <p>{page.text}</p>
      </BackImage>
      <div className="cards">
        {page.cards.map((card,i)=>(
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
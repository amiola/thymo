import React from 'react'
import Nav from '../../navbar/Nav'
import Card from '../../components/Card'
import { trainingCards } from '../../assets/cards'
import { useNavigate } from 'react-router-dom'

const Training = () => {
  const navigation = useNavigate()
  return (
    <>
    <Nav/>
    <section className="training">
      <div className="head">
        <h1>WELCOME TO OUR TRAINING ROUTINE PLACE</h1>
        <p>Please, choose the training way you like the most:</p>
      </div>
      <div className="cards">
        {trainingCards.map((card,i)=>(
          <div key={i} onClick={()=>navigation(card.navigation)} className='card-box'>
          <Card card={card}/>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Training
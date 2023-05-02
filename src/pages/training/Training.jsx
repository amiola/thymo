import React from 'react'
import Nav from '../../navbar/Nav'
import Card from '../../components/Card'
import { trainingCards } from '../../assets/cards'

const Training = () => {
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
          <Card key={i} card={card}/>
        ))}
      </div>
    </section>
    </>
  )
}

export default Training
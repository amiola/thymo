import React from 'react'
import Nav from '../../navbar/Nav'
import { useParams } from 'react-router-dom'
import { trainingPages } from '../../assets/pages'

const Training = () => {
    const groupName = useParams().group
    const group = trainingPages[groupName]
  return (
    <>
    <Nav/>
    <section className="training">
        <h1>{group.title.toUpperCase()}</h1>
        <h3>Please, choose a group of muscles to show the exercises:</h3>
        <div className="muscles">
          {group.cards.map((card,i)=>(
            <div className="muscle" key={i}>
              <img src={card.icon} alt={`${card.name} icon`} />
              <h1>{card.name.toUpperCase()}</h1>
            </div>
          ))}
        </div>
        <div className="exercices">
        </div>
    </section>
    </>
  )
}

export default Training
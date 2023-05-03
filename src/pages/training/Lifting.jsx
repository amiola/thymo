import React from 'react'
import Nav from '../../navbar/Nav'
import { liftingGroupsCards } from '../../assets/cards'
import { useNavigate } from 'react-router-dom'

const Lifting = () => {
  const navigation = useNavigate()
  return (
    <>
    <Nav/>
    <section className="lifting">
      <div className='img'/>
      <div className="right">
      <div className="text">
        <h2>WEIGHT LIFTING</h2>
        <p>Please, choose the training way you like the most:</p>
      </div>
      <div className="btns">
        {liftingGroupsCards.map((card,i)=>{
          const icon = `/icons/${card.name}.svg`
          return (
          <div className="lifting-group" key={i}
          onClick={()=>navigation(card.navigation)}>
            <img src={icon} alt={`${card.name} icon`} />
            <h2>{card.title}</h2>
          </div>
)})}
      </div>
      </div>
    </section>
    </>
  )
}

export default Lifting
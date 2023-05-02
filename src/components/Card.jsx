import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const icon = `icons/${props.card.name}.svg`
    const caret = `icons/caret${props.card.caret}.svg`

  return (
    <>
    <div className="card">
        <img src={icon} alt={props.card.name} className='icon'/>
        <h3>{props.card.name.toUpperCase()}</h3>
        <p>{props.card.text}</p>
        <img src={caret} alt='caret' className='caret'/>
    </div>
    </>
  )
}

export default Card
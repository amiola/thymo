import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import { useParams } from 'react-router-dom'
import { trainingPages } from '../../assets/pages'
import Context from '../../context/Context'

const Training = () => {
    const groupName = useParams().group
    const group = trainingPages[groupName]

    const {result,setExMuscle}=useContext(Context)

    const getExercises = (muscle)=>{
      setExMuscle(muscle);
    }

  return (
    <>
    <Nav/>
    <section className="training">
        <h1>{group.title.toUpperCase()}</h1>
        <h3>Please, choose a group of muscles to show the exercises:</h3>
        <div className="muscles">
          {group.cards.map((card,i)=>(
            <div className="muscle" key={i}
            onClick={()=>getExercises(card.name)}>
              <img src={card.icon} alt={`${card.name} icon`} />
              <h1>{card.name.toUpperCase()}</h1>
            </div>
          ))}
        </div>
        <div className="exercices-container">
        <button className="btn btn-left">
          &lt;
          </button>
        <div className="exercices">
          {result.map((exercise,i)=>(
            <div className="exercise" key={i}>
              <h3>{exercise.name}</h3>
              <p>{exercise.equipment}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-right">
          &gt;
          </button>
        </div>
    </section>
    </>
  )
}

export default Training
import React, { useContext, useRef } from 'react'
import Nav from '../../navbar/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { trainingPages } from '../../assets/pages'
import Context from '../../context/Context'

const Training = () => {

    const navigation = useNavigate()

    const groupName = useParams().group
    const group = trainingPages[groupName]

    const slider = useRef()

    const {result,setExMuscle}=useContext(Context)

    const getExercises = (muscle)=>{
      setExMuscle(muscle);
    }

    const moveLeft=(e)=>{
      e.preventDefault()
      slider.current.scrollLeft -= slider.current.offsetWidth;
    }

    const moveRight=(e)=>{
      e.preventDefault()
      slider.current.scrollLeft += slider.current.offsetWidth;
    }

    const goToExercise=(ex)=>{
      navigation('/exercise',{
        state:{
          name: ex.Name,
          primary: ex['Primary Muscles'],
          secondary: ex['SecondaryMuscles'],
          link: ex['Youtube link']
        }
      })
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
            onClick={()=>getExercises(card.muscle)}>
              <div className="muscle-img">
              <img src={card.icon} alt={`${card.name} icon`} />
              </div>
              <h1>{card.name.toUpperCase()}</h1>
            </div>
          ))}
        </div>
        <div className="exercices-container">
        <button className="btn btn-left"
        onClick={moveLeft}>
          &lt;
          </button>
        <div className="exercices" ref={slider}>
          {result.map((exercise,i)=>(
            <div className="exercise" key={i}
            onClick={()=>goToExercise(exercise)}>
              <h3>{exercise.Name}</h3>
              <p>Primary muscles:</p> 
              <div className="primary">{exercise['Primary Muscles'].map((muscle,i)=>(
                <p key={i}>{muscle}</p>
              ))}</div>
              <p>Secondary muscles:</p> 
              <div className="secondary">{exercise['SecondaryMuscles'].map((muscle,i)=>(
                <p key={i}>{muscle}</p>
              ))}</div>
            </div>
          ))}
        </div>
        <button className="btn btn-right"
        onClick={moveRight}>
          &gt;
          </button>
        </div>
    </section>
    </>
  )
}

export default Training
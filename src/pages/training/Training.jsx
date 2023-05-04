import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { trainings } from '../../assets/pages'
import Context from '../../context/Context'
import {SideImage} from '../../components/SideImage'

const Training = () => {
  const {yogaData}=useContext(Context)
  const navigation = useNavigate()
  const trainName = useParams().training
  const train = trainings[trainName]
  return (
    <>
    <Nav/>
    <section className="training">
      <SideImage img={train.img}/>
      <div className="right">
      <div className="text">
        <h2>{train.title.toUpperCase()}</h2>
        <p>{train.text}</p>
      </div>
      <div className="btns">
        {trainName==='weightLifting' && train.categories.map((card,i)=>{
          const icon = `/icons/${card.name}.svg`
          return (
          <div className="training-group" key={i}
          onClick={()=>navigation(card.navigation)}>
            <img src={icon} alt={`${card.name} icon`} />
            <h2>{card.title}</h2>
          </div>
          )
})}
        {trainName==='yoga' && yogaData.map((cat,i)=>(
          <div key={i} className="training-group">
            <div className="yogaCats">
            <h3>{cat.category_name}</h3>
            <p>{cat.category_description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  )
}

export default Training
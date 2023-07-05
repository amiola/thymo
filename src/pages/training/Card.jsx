import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm} from 'react-hook-form'
import { cards } from '../../assets/pages'
import Context from '../../context/Context'
import { BackImage } from '../../components/BackImage'
import { parametersFields } from '../../assets/parameters'

const Card = () => {
  const {yogaData, setParams}=useContext(Context)
  const navigation = useNavigate()
  const cardName = useParams().card
  const card = cards[cardName]

  const {register, handleSubmit, formState:{errors}, setFocus}=useForm()

  const obtener = (data)=>{
    setParams(data);
    console.log(data);
    navigation('/parameters/calculation/results');
  } 


  return (
    <>
    <Nav/>
    <section className="card">
      <BackImage img={card.img} width='30%' height='100%' />
      <div className="right">
      <div className="text">
        <h2>{card.title.toUpperCase()}</h2>
        <p>{card.text}</p>
      </div>
      <div className="btns">
        {cardName==='weightLifting' && card.categories.map((card,i)=>{
          const icon = `/icons/${card.name}.svg`
          return (
          <div className="card-group" key={i}
          onClick={()=>navigation(card.navigation)}>
            <img src={icon} alt={`${card.name} icon`} />
            <h2>{card.title}</h2>
          </div>
          )
})}
        {cardName==='yoga' && yogaData.map((cat,i)=>(
          <div key={i} className="card-group"
          onClick={()=>navigation(`/training/yoga/category/${cat.id}`)}>
            <div className="yogaCats">
            <h3>{cat.category_name}</h3>
            <p>{cat.category_description}</p>
            </div>
          </div>
        ))}

{cardName==='calculation' && (
<form onSubmit={handleSubmit(obtener)}>
{parametersFields.map((field,i)=>{
  if(field.type === 'options'){
    return (
    <div className="field" key={i}>
        <label htmlFor={field.name}>
        {field.title}
        </label>
        <select id={field.name} {...register(`${field.name}`,{})}>
          <option
          // value=""
          >-- {field.placeHolder} --</option>
          {field.options.map((op,i)=>(
            <option value={op.value} key={i}>{op.title}</option>
          ))}
        </select>

    </div>
)}
  else{
    return (
      <>
      <div className="field" key={i}>
      <label htmlFor={field.name}>{field.title}: {field.obligatorio && '*'}</label>
      <input 
      autoFocus autoComplete="off"
      type={field.type} id={field.name} placeholder={`${field.placeHolder}.`} 
      {...register(`${field.name}`,field.requirements)}/>
      </div>
      {errors[field.name]?.type === 'required' && <div className='alert'>This field is required</div>}
      {errors[field.name]?.type === 'max' && <div className='alert'>The maximum value is {field.requirements.max}</div>}
      {errors[field.name]?.type === 'min' && <div className='alert'>The minimum value is {field.requirements.min}</div>}
    </>
)}})}

<div className="submit-box">
   <input className='btn' type='submit' value='Calculate'/>
</div>
</form>
)}

      </div>
      </div>
    </section>
    </>
  )
}

export default Card
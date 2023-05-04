import React, { useEffect, useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {

const [result,setResult]=useState([])
const [exMuscle,setExMuscle]=useState('')

// Getting yoga data
const [yogaData,setYogaData]=useState()
const yogaUrl = 'https://yoga-api-nzy4.onrender.com/v1/categories'

const getYogaData = async ()=>{
  const url = yogaUrl;
  const res = await fetch(url);
  const data = await res.json();
  setYogaData(data)
}

useEffect(()=>{
  getYogaData()
},[])

/*
const mainUrl = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3837ec823amshddf2ad4c132822bp1306e6jsn773992c6bda8',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};
*/

const mainUrl = 'https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3837ec823amshddf2ad4c132822bp1306e6jsn773992c6bda8',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};


const getExercise = async (muscle)=>{
  try{
    // const url = mainUrl + 'name='+ name +'&type=' + type + '&muscle=' + muscle;
    // 'name=press&type=strength&muscle=quadriceps'
    const url = mainUrl + muscle.split(' ').join('%20')
    const res = await fetch(url,options);
    const data = await res.json();
    setResult(data);
  }
  catch(err){
    console.error(err)
  }
}

useEffect(()=>{
  if(exMuscle==='') return '';
  getExercise(exMuscle)
},[exMuscle])

// useEffect(()=>{
//   console.log(result);
// },[result])
    
  return (
    <Context.Provider
    value={{
      result,
      exMuscle,
      setExMuscle,
      yogaData
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default Provider
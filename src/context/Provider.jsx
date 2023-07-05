import React, { useEffect, useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {

const [result,setResult]=useState([])
const [exMuscle,setExMuscle]=useState('')
const [params, setParams]=useState('')
const [calcs, setCalcs]=useState()

////////////////////////////////
// GETTING YOGA DATA

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

///////////////////////////////////
//GETTING WEIGHT LIFTING EXERCISES

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

const exercisesUrl = 'https://exerciseapi3.p.rapidapi.com/search/?primaryMuscle=';
const options1 = {
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
    const url = exercisesUrl + muscle.split(' ').join('%20')
    const res = await fetch(url,options1);
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

/////////////////////////////////////////
//GETTING PARAMETERS CALCULATION VALUES

const calculationsUrl = 'https://fitness-api.p.rapidapi.com/fitness';

const getCalculations = async (params)=>{
  if(params === '') return '';
  try{
    const url = calculationsUrl;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '3837ec823amshddf2ad4c132822bp1306e6jsn773992c6bda8',
        'X-RapidAPI-Host': 'fitness-api.p.rapidapi.com'
      },
      body: new URLSearchParams({
        height: ''+params.height,
        weight: ''+params.weight,
        age: ''+params.age,
        gender: params.gender,
        exercise: params.exercise,
        neck: params.neck,
        hip: params.hip,
        waist: params.waist,
        goal: params.goal,
        deficit: ''+params.deficit,
        goalWeight: ''+params.goalWeight
      })
    };
    const res = await fetch(url, options);
    const data = await res.json();
    setCalcs(data);
    console.log(data);

  }catch(e){
    console.error(e);
  }
}

useEffect(()=>{
  getCalculations(params)
},[params])

///////////////////////////////////////////////////
    
  return (
    <Context.Provider
    value={{
      result,
      exMuscle,
      setExMuscle,
      yogaData,
      setCalcs,
      calcs,
      setParams
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default Provider
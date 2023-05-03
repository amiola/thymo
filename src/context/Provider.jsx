import React, { useEffect, useState } from 'react'
import Context from './Context'

const Provider = ({children}) => {

const [result,setResult]=useState([])
const [exType,setExType]=useState('')
const [exMuscle,setExMuscle]=useState('')


const mainUrl = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3837ec823amshddf2ad4c132822bp1306e6jsn773992c6bda8',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

const getExBy = async (type,name,muscle)=>{
  try{
    const url = mainUrl + 'name='+ name +'&type=' + type + '&muscle=' + muscle;
    // 'name=press&type=strength&muscle=quadriceps'
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
  getExBy(exType,'',exMuscle)
},[exMuscle])

// useEffect(()=>{
//   console.log(result);
// },[result])
    
  return (
    <Context.Provider
    value={{
      result,
      exMuscle,
      setExMuscle
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default Provider
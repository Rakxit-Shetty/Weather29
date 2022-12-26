import React,{useState} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Showdata from './Showdata'

export default function Bboxnew() {

    const [city,setCity]=useState("udupi")
 /*   const {data, isLoading,isError} =useQuery(['temp'],()=>{
      return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e47e48462c06831b09a3c5d577fda9d&units=metric`)
    .then((res)=> res.data)
    })

if(isError){
    return <h1>No data</h1>
}

if(isLoading){
    return <h1>loading</h1>
}*/
  return (
    <div>

        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}></input>

        {/*<div>{
        data?.main.temp
        }</div>*/}
        <Showdata city={city}/>
        
    </div>
  )
}

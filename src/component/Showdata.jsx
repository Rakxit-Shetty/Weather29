import React,{useEffect} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function Showdata(props) {
    const {data, isLoading,isError,refetch} =useQuery(['temp'],()=>{
        return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7e47e48462c06831b09a3c5d577fda9d&units=metric`)
      .then((res)=> res.data)
      })
  
useEffect(() => {
 console.log(props.city)
 refetch
}, [props.city])

  if(isError){
      return <h1>No data</h1>
  }
  
  if(isLoading){
      return <h1>loading</h1>
  }
  return (
    <div>{data.main.temp}</div>
  )
}

export default Showdata
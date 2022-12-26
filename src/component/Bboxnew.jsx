import React,{useState} from 'react'


export default function Bboxnew() {
    const [city,setCity]=useState("udupi")
  return (
    <div>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <div>{city}</div>
    </div>
  )
}

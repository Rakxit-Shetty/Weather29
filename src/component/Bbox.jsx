import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Bbox() {

const [input,setInput]=useState("udupi")
const [call,setCall]=useState(false)
const [data,setData]=useState("udupi")

useEffect(() => {
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=7e47e48462c06831b09a3c5d577fda9d&units=metric`)   //"https://catfact.ninja/fact")
  .then( (res)=> {console.log(res)
         setData(res.data.main)
        }
         )

  .catch( 
    (er)=>console.log(error)
    )
 
  
}, [call])


  const clicked=()=>{
    console.log("text is "+input)
    setData(input)
    if(call==false){
    setCall(true)}
    else{
      setCall(false)
    }
  }
  return (<>
  <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}>
        </input>
        
        <button onClick={clicked}>CLICKME</button>
        <div>
          <h2>{data.temp}</h2>

        </div>
  </div>
  </>
    
  )
}

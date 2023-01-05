import React,{useState,useEffect} from 'react'
import axios from "axios"
import '../css/main.10eec380.chunk.css'

export default function Bbox() {

const [input,setInput]=useState("udupi")
const [data,setData]=useState("")
const [desp,setDesp]=useState("")
const [minmax,setMinmax]=useState("")
useEffect(() => {
  if (!input) {
   setData(" ")
} else{
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7e47e48462c06831b09a3c5d577fda9d&units=metric`)   //"https://catfact.ninja/fact")
  .then( (res)=> {
         setData(res.data.main.temp+"°cel")
         //console.log(res.data.main.temp_max)
         setMinmax("min : "+res.data.main.temp_min+" | "+"max : "+res.data.main.temp_max)
         setDesp(res.data.weather[0].description)
        }
         )

  .catch( 
    (er)=>{ setData(""); setDesp("");setMinmax("")}
    )
    
  }  
}, [input])

  return (<>
  
    <div className='box'>
        <div className='inputData'>
            <input type='text' placeholder='Enter city name...' value={input} onChange={(e)=>setInput(e.target.value)} className='inputField'/>
        </div>
        
    
        <div className='info'>
          <h1 className='location'>{input}</h1>
          <h2 className='temp'>{data}</h2>
          <h3 className='tempmin_max'><p>{desp}</p><br></br>{minmax}</h3>

        </div>

        <div className='wave -one'></div>
        <div className='wave -two'></div>
        
        
	</div>
  
  
  
    <div class="footer">
  	<div>&#169; 2022 to Learn React JS components by 
		<a href="https://rakshitshetty.netlify.app"> &nbsp; Rakxit-Shetty</a>
    </div>
	</div>
  </>
    
  )
}

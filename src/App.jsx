import { useState } from 'react'
import Bboxnew from './component/Bboxnew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    INPUT CITY NAME
    <Bboxnew/>
   {/*<Bbox/>*/}

    </>
    
  )
}

export default App

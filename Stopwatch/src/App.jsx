import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  let [time, setTime] = useState(0);
  const [running , setRunning] = useState(false)


  useEffect(    
    ()=>{
      let intervalId ;
      if(running){
        intervalId = setInterval(()=>{
          setTime((prevTime) => prevTime + 10)
        },10) 
      }

      else if(!running){
        clearInterval(intervalId)
      }
      return () =>{clearInterval(intervalId)}

    }, [running]
  )

  

  return (
    <>
      <div>
        <span>
          {("0"+Math.floor(time/60000)%60).slice(-2)} : 
        </span>
        <span>
          {("0"+Math.floor(time/1000)%60).slice(-2)} :
        </span>
        <span>
          {("0"+Math.floor(time/10)%100).slice(-2)}
        </span>
      </div>
      <div>

        {
          (!running) ? <button onClick={()=>{setRunning(true)}}>Start</button> :
          <button onClick={()=>setRunning(false)}>Stop</button> 

        }
         <button onClick={()=>setTime(0)}>Reset</button>

      </div>
    </>
  )
}

export default App

import React, { useContext, useState } from 'react'
import myContext from './Contex'
import B from './B';

function A() {
  const[state,setState] =useState("")
  const [data,setData] =useState("")
  return (
    <div>
        <h2>A Component</h2>
        <input type='text' placeholder='enter Somehing' onChange={(e)=>{setState(e.target.value)}}/>
        <button onClick={()=>{setData(state)}}>Send</button>
        <myContext.Provider value={data}>
          <B />
        </myContext.Provider>
    </div>
  )
}

export default A
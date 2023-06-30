import React, { useContext } from 'react'
import myContext from './Contex'

function D() {
  const data=useContext(myContext)
  return (
    <div>
        <h2>D Component:{data}</h2>
    </div>
  )
}

export default D
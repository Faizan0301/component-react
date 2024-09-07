import React, { useState } from 'react'

function Hello() {
  let [greeting,setGreeting]=useState('Hello')
  let change=()=>{
    setGreeting('Welcome');
  }
  return (
    <>
      <h2>{greeting} from function component..</h2>
      <button onClick={change}>Change</button>
    </>
  )
}

export default Hello


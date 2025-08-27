//import React, { useState } from 'react'
// import {CounterContext} from "./CounterContext"
import React, { createContext, useState } from 'react'
export const CounterContext = createContext()


function CounterProvider({children}) {

  const [count,setCount] = useState(0);

const obj = {
    increment : ()=>{
    setCount(count+1)
    console.log(count)
  },
    decrement : ()=>{
    setCount(count-1)
  }

 

  
}



  return (
    <CounterContext.Provider value={{count,obj}}>
         {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
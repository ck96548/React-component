import { useState } from 'react'
import './App.css'
import { ToastContainer } from './Components/ToastContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    </>
  )
}

export default App
